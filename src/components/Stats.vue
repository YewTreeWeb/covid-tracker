<template>
  <article class="card">
    <h3>Totals</h3>
    <ul>
      <li>
        <span>Total Cases Confirmed:</span>
        {{ numberFormatting(stats.TotalConfirmed) }}
      </li>
      <li>
        <span>Total Deaths:</span> {{ numberFormatting(stats.TotalDeaths) }}
      </li>
    </ul>
  </article>
  <article class="card">
    <h3>New Cases</h3>
    <ul>
      <li>
        <span>New Cases Confirmed:</span>
        {{ numberFormatting(stats.NewConfirmed) }}
      </li>
      <li><span>New Deaths:</span> {{ numberFormatting(stats.NewDeaths) }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    stats: Object,
    countries: Array,
    uk: Object
  },
  methods: {
    numberFormatting (num) {
      let formatted = 0
      if (num) {
        formatted = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
      return formatted
    }
  }
}
</script>

<style lang="scss">
article {
  width: max(28%, 350px);
}
</style>
