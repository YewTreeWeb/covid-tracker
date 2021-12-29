<template>
  <header>
    <div class="container">
      <virus width="100" />
      <h1>{{ title }}</h1>
      <select name="countries" class="select-countries">
        <option
          v-for="country in countries"
          :key="country.ID"
          :value="country.CountryCode"
          >{{ country.Country }}</option
        >
      </select>
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
    countries: Array
  },
  emits: ['selectedCountry'],
  data () {
    return {
      title: 'Covid, Where Art Thou?'
    }
  },
  methods: {
    selectedCountry (country) {
      console.log(country)
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: v(clr-neutral-200);
  .container {
    @include flex(center, flex-start, row, false);
    @include padding(em(20) null);
  }
  h1 {
    margin-left: rem(40);
  }
}
</style>
