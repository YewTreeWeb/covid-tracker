<template>
  <div class="loading" v-if="loading">Loading data...</div>
  <Header />
  <main>
    <hero :title="title" :date="date" />
    <stats :stats="global" :countryStats="countries" />
    <liveStats />
  </main>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Stats from './components/Stats.vue'
import LiveStats from './components/LiveStats.vue'

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
      global: null,
      title: 'Global',
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
        // this.loading = false
      })
      .catch(err => console.error(err))
    this.getCovidData('live/country/united-kingdom/status/confirmed')
      .then(data => {
        // const date = new Date()
        // const formatDate = `${date.getFullYear()}-${date.getMonth() +
        //   1}-${date.getDate()}`
        if (process.env.NODE_ENV !== 'production') {
          console.log(data)
        }
        // data.map(stat => {
        //   return stat.Date === formatDate
        // })
        // this.date = data.Date
        // this.global = data.Global
        // this.countries = data.Countries
        this.loading = false
      })
      .catch(err => console.error(err))
  }
}
</script>
