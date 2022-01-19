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
  <article
    v-if="Object.keys(uk).length && countryTitle === 'United Kingdom'"
    class="card"
  >
    <h3>Hospitalisation</h3>
    <p>UK government data, taken on the {{ dateFormat }}</p>
    <ul>
      <li>
        <span>Hospital Cases:</span>{{ numberFormatting(uk.hospitalCases) }}
      </li>
      <li v-if="uk.newAdmissions">
        <span>New Admissions:</span>{{ numberFormatting(uk.newAdmissions) }}
      </li>
    </ul>
  </article>
  <article
    v-if="Object.keys(uk).length && countryTitle === 'United Kingdom'"
    class="card"
  >
    <h3>Vaccinations</h3>
    <p>UK government data, taken on the {{ dateFormat }}</p>
    <ul>
      <li>
        <span>First Vaccinations:</span>{{ numberFormatting(uk.firstDose) }}
      </li>
      <li>
        <span>Second Vaccinations:</span>{{ numberFormatting(uk.secondDose) }}
      </li>
      <li v-if="uk.thirdDose">
        <span>Third Vaccinations:</span>{{ numberFormatting(uk.thirdDose) }}
      </li>
      <li v-if="uk.boosterDose">
        <span>Booster Vaccinations:</span>{{ numberFormatting(uk.boosterDose) }}
      </li>
    </ul>
  </article>
</template>

<script>
export default {
  name: 'Stats',
  props: {
    stats: Object,
    uk: Object,
    countryTitle: String,
    numberFormatting: Function
  },
  computed: {
    dateFormat () {
      const date = this.uk.date.split('-')
      return `${date[2]}/${date[1]}/${date[0]}`
    }
  }
}
</script>

<style lang="scss">
article {
<<<<<<< HEAD
  min-width: min(100%, 356px);
  width: 48%;
=======
  width: min(100%, 284px);
  min-height: 250px;
  flex: 1 1 min(100%, 284px);
>>>>>>> 2ea0b34a40c2e74e8c955356396a1c6044ea342a
  @include margin(null 30px 30px null);
  &:nth-of-type(2n) {
    margin-right: 0;
  }
  @supports (gap: 1px) {
    @include margin(null unset unset null);
  }
  > p {
    max-width: 320px;
  }
  @media screen and (min-width: 1427px) {
    width: auto;
  }
}
</style>
