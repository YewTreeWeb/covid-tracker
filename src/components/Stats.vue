<template>
  <article class="card">
    <h3>Totals</h3>
    <ul>
      <li><span>Total Cases Confirmed:</span> {{ stats.TotalConfirmed }}</li>
      <li><span>Total Deaths:</span> {{ stats.TotalDeaths }}</li>
    </ul>
  </article>
  <article class="card">
    <h3>New Cases</h3>
    <ul>
      <li><span>New Cases Confirmed:</span> {{ stats.NewConfirmed }}</li>
      <li><span>New Deaths:</span> {{ stats.NewDeaths }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    stats: Object,
    countries: Array
  }
}
</script>

<style lang="scss">
article {
  width: max(28%, 350px);
}
</style>
