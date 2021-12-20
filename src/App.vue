<template>
  <div class="loading" v-if="loading">Loading data...</div>
  <Header />
  <main>
    <hero :title="title" :date="date" />
    <stats :stats="global" :countries="countries" />
    <liveStats :stats="live" />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import LiveStats from '@/components/LiveStats'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Hero,
    Stats,
    LiveStats
  },
  data () {
    return {
      loading: true,
      date: null,
      title: 'Global',
      global: {},
      countries: [],
      live: []
    }
  },
  methods: {
    async getCovidData (query = '') {
      const api = `https://api.covid19api.com/${query}`
      const response = await fetch(api)
      const data = await response.json()
      return data
    },
    getLiveData (query) {
      this.getCovidData(query)
        .then(data => {
          const date = new Date()
          const formatDate = `${date.getFullYear()}-${date.getMonth() +
            1}-${date.getDate()}`
          data.filter(item => {
            if (item.Date.includes(formatDate)) {
              this.live.push(item)
            }
          })
          this.loading = false
        })
        .catch(err => console.error(err))
    }
  },
  created () {
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
    this.getLiveData('live/country/united-kingdom')
  },
  mounted () {
    window.setInterval(() => {
      console.log('data refreshed')
      this.getLiveData('live/country/united-kingdom')
    }, 600000)
  }
}
</script>
