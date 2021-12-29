<template>
  <loading v-if="loading" />
  <Header :countries="countries" />
  <main class="container" :class="{ 'is-loading': loading }">
    <hero :title="title" :date="date" />
    <section class="cases">
      <stats :stats="global" :countries="countries" :uk="uk" v-if="global" />
      <liveStats :stats="live" :loading="dataLoading" />
    </section>
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import LiveStats from '@/components/LiveStats'
import Loading from './components/Loading.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Hero,
    Stats,
    LiveStats,
    Loading
  },
  data () {
    return {
      loading: true,
      dataLoading: false,
      date: null,
      title: 'Global',
      global: {},
      countries: [],
      live: [],
      uk: {}
    }
  },
  methods: {
    async getCovidData (query = '') {
      const api = `https://api.covid19api.com/${query}`
      const response = await fetch(api)
      const data = await response.json()
      return data
    },
    async getGovCovidData () {
      const response = await fetch(
        'https://api.coronavirus.data.gov.uk/v1/data'
      )
      const data = await response.json()
      return data
    }
  },
  created () {
    const body = document.getElementsByTagName('body')[0]
    const date = new Date()
    const formatDate = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`
    this.getCovidData('summary')
      .then(data => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(data)
        }
        this.date = data.Date
        this.global = data.Global
        this.countries = data.Countries
      })
      .catch(err => console.error(err))
    this.getCovidData('live/country/united-kingdom')
      .then(data => {
        data.filter(item => {
          if (item.Date.includes(formatDate)) {
            this.live.push(item)
          }
        })
      })
      .then(() => {
        setTimeout(() => {
          this.loading = false
          body.classList.remove('is-loading')
        }, 2000)
      })
      .catch(err => {
        if (window.console) {
          console.error(err)
        }
      })
    this.getGovCovidData()
      .then(data => {
        const stats = data.data
        const formatDate = `${date.getFullYear()}-${date.getMonth() +
          1}-${date.getDate() - 1}`
        stats.filter(item => {
          if (item.date.includes(formatDate)) {
            this.uk = item
          }
        })
      })
      .catch(err => console.error(err))
  },
  mounted () {
    window.setInterval(() => {
      this.live = []
      this.dataLoading = true
      this.getCovidData('live/country/united-kingdom')
        .then(data => {
          const date = new Date()
          const formatDate = `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()}`
          data.filter(item => {
            if (item.Date.includes(formatDate)) {
              this.live.push(item)
            }
          })
        })
        .then(() => {
          setTimeout(() => {
            this.dataLoading = false
          }, 2000)
        })
        .catch(err => {
          if (window.console) {
            console.error(err)
          }
        })
    }, 900000)
  }
}
</script>

<style lang="scss">
main {
  @include padding(em(60) null);
  &.is-loading {
    overflow: hidden;
    @include size(null, fill);
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
  .cases {
    @include flex(flex-start, space-between, row);
    @include padding(em(60) null);
  }
}
</style>
