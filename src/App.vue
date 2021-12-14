<template>
  <div class="loading" v-if="loading">Loading data...</div>
  <Header />
  <main></main>
  <Footer />
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      loading: true,
      date: null,
      global: null,
      countries: []
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
        this.loading = false
      })
      .catch(err => console.error(err))
    this.getCovidData('live/country/united-kingdom/status/confirmed')
      .then(data => {
        if (process.env.NODE_ENV !== 'production') {
          console.log(data)
        }
        // this.date = data.Date
        // this.global = data.Global
        // this.countries = data.Countries
        this.loading = false
      })
      .catch(err => console.error(err))
  }
}
</script>
