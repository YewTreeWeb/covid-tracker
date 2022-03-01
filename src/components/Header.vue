<template>
  <header>
    <div class="container">
      <virus width="100" />
      <h1>{{ title }}</h1>
      <div class="select-country" :class="{ 'mt-40': selected }">
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
    @include flex(center, center, row);
    @include padding(em(20) null);
    @media screen and (min-width: 1360px) {
      justify-content: flex-start;
    }
  }
  h1 {
    text-align: center;
    @media screen and (min-width: 601px) {
      text-align: unset;
      @include margin(null rem(10) null rem(40));
    }
  }
  .select-country {
    text-align: center;
    @include flex(center, center, column);
    .mt-40 {
      margin-top: rem(40);
    }
    label {
      font-weight: map-get($weights, 700);
      select {
        font-weight: map-get($weights, 400);
        width: 100%;
        @include margin(em(10) null);
        @media screen and (min-width: 601px) {
          width: auto;
          @include margin(unset null unset em(10));
        }
      }
    }
    button {
      margin-left: em(15);
    }
    @media screen and (min-width: 601px) {
      text-align: unset;
      flex-flow: row wrap;
    }
    @media screen and (min-width: 1360px) {
      margin-top: unset;
      margin-left: auto;
    }
  }
}
</style>
