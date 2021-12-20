<template>
  <section>
    <article>
      <h3>Totals</h3>
      <ul>
        <li><span>Total Cases Confirmed:</span> {{ stats.TotalConfirmed }}</li>
        <li><span>Total Deaths:</span> {{ stats.TotalDeaths }}</li>
        <li><span>Total Recovered:</span> {{ stats.TotalRecovered }}</li>
      </ul>
    </article>
    <article>
      <h3>New Cases</h3>
      <ul>
        <li><span>New Cases Confirmed:</span> {{ stats.NewConfirmed }}</li>
        <li><span>New Deaths:</span> {{ stats.NewDeaths }}</li>
        <li><span>New Recovered:</span> {{ stats.NewRecovered }}</li>
      </ul>
    </article>
  </section>
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
