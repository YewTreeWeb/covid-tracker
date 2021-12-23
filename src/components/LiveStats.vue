<template>
  <aside class="card">
    <h3>Live UK Cases</h3>
    <p>All data for Covid cases are refreshed every 15 minutes</p>
    <data-loading v-if="loading" />
    <ul class="liveCases" v-else>
      <li v-for="stat in stats" :key="stat.ID">
        <span>Place:</span>{{ stat.Province }}<br />
        <span>Active:</span>{{ stat.Active }}<br />
        <span>Confirmed:</span>{{ stat.Confirmed }}<br />
        <span>Deaths:</span>{{ stat.Deaths }}
      </li>
    </ul>
  </aside>
</template>

<script>
import DataLoading from './DataLoading.vue'
export default {
  name: 'LiveStats',
  components: {
    DataLoading
  },
  props: {
    stats: Array,
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss">
aside {
  width: max(39%, 500px);
  max-height: 50vh;
  overflow-y: scroll;
}
</style>
