<template>
  <aside>
    <h3>Live UK Cases</h3>
    <p>All data for Covid cases are refreshed every 10 minutes</p>
    <ul>
      <li v-for="stat in stats" :key="stat.ID">
        Place: {{ stat.Province }} Active: {{ stat.Active }} Confirmed:
        {{ stat.Confirmed }} Deaths: {{ stat.Deaths }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'LiveStats',
  props: {
    stats: Array
  }
}
</script>
