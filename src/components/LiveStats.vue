<template>
  <aside>
    <h3>Live UK Cases</h3>
    <p>All data for Covid cases are refreshed every 15 minutes</p>
    <data-loading v-if="loading" />
    <ul v-else>
      <li v-for="stat in stats" :key="stat.ID">
        Place: {{ stat.Province }} Active: {{ stat.Active }} Confirmed:
        {{ stat.Confirmed }} Deaths: {{ stat.Deaths }}
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
