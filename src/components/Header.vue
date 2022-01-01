<template>
  <header>
    <div class="container">
      <virus width="100" />
      <h1>{{ title }}</h1>
      <label for="countries">
        Select country:
        <select
          name="countries"
          class="select-countries"
          v-model="selected"
          @change="onCountryChange"
        >
          <option value="" disabled selected>Global</option>
          <option
            v-for="country in countries"
            :key="country.ID"
            :value="country.CountryCode"
            >{{ country.Country }}</option
          >
        </select>
      </label>
      <button v-if="selected" @click.prevent="clearedCountry">
        Clear country
      </button>
    </div>
  </header>
</template>

<script>
import Virus from '@/components/icons/Virus'
export default {
  name: 'Header',
  components: {
    Virus
  },
  props: {
    countries: Array,
    getCovidData: Function
  },
  emits: ['selectedCountry', 'clearedCountry'],
  data () {
    return {
      title: 'Covid, Where Art Thou?',
      selected: ''
    }
  },
  methods: {
    onCountryChange () {
      const country = this.countries.find(
        item => item.CountryCode === this.selected
      )
      this.$emit('selectedCountry', country)
    },
    clearedCountry () {
      this.$parent.clearCountry()
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: v(clr-neutral-200);
  font-size: v(fs-xl);
  .container {
    @include flex(center, flex-start, row, false);
    @include padding(em(20) null);
  }
  h1 {
    margin-left: rem(40);
  }
  label,
  button {
    margin-left: auto;
  }
  label {
    font-weight: map-get($weights, 700);
    select {
      font-weight: map-get($weights, 400);
    }
  }
}
</style>
