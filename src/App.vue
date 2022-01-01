<template>
  <loading v-if="loading" />
  <Header :countries="countries" @selectedCountry="getCountry" />
  <main class="container" :class="{ 'is-loading': loading }">
    <hero :title="title" :date="date" />
    <section class="cases">
      <div>
        <stats
          :stats="statistics"
          :uk="uk"
          :countryTitle="title"
          :numberFormatting="numberFormatting"
          v-if="statistics"
        />
      </div>
      <liveStats
        :stats="live"
        :loading="dataLoading"
        :numberFormatting="numberFormatting"
      />
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
      statistics: {},
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
    },
    getCountry (country) {
      this.title = country.Country
      this.statistics = country
    },
    clearCountry () {
      this.title = 'Global'
      this.getCovidData('summary')
        .then(data => {
          this.statistics = data.Global
        })
        .catch(err => {
          if (window.console) console.error(err)
        })
    },
    numberFormatting (num) {
      let formatted = 0
      if (num) {
        formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return formatted
    }
  },
  created () {
    const body = document.getElementsByTagName('body')[0]
    const date = new Date()
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const dayPrev =
      date.getDate() - 1 < 10 ? `0${date.getDate() - 1}` : date.getDate() - 1
    const month =
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    this.getCovidData('summary')
      .then(data => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(data)
        }
        this.date = data.Date
        this.statistics = data.Global
        this.countries = data.Countries
      })
      .catch(err => console.error(err))
    this.getCovidData('live/country/united-kingdom')
      .then(data => {
        const formatDate = `${date.getFullYear()}-${month}-${day}`
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
        const formatDate = `${date.getFullYear()}-${month}-${dayPrev}`
        console.log(stats)
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
          const day =
            date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
          const month =
            date.getMonth() + 1 < 10
              ? `0${date.getMonth() + 1}`
              : date.getMonth() + 1
          const formatDate = `${date.getFullYear()}-${month}-${day}`

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
    @include flex(flex-start, center, row);
    @supports (gap: 1px) {
      gap: 0 30px;
    }
    @include padding(em(60) null);
    > div {
      margin-right: 30px;
      @supports (display: grid) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      }
      @supports (gap: 1px) {
        margin-right: unset;
        gap: 30px;
      }
    }
  }
}
</style>
