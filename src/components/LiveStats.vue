<template>
  <aside class="card">
    <h3>Live UK Cases</h3>
    <p>All data for Covid cases are refreshed every 15 minutes</p>
    <data-loading v-if="loading" :msg="msg" />
    <ul class="liveCases" v-else>
      <li v-for="stat in stats" :key="stat.ID">
        <span>Place:</span>{{ stat.Province }}<br />
        <span>Active:</span>{{ numberFormatting(stat.Active) }}<br />
        <span>Confirmed:</span>{{ numberFormatting(stat.Confirmed) }}<br />
        <span>Deaths:</span>{{ numberFormatting(stat.Deaths) }}
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
    },
    numberFormatting: Function,
    msg: String
  }
}
</script>

<style lang="scss">
aside {
  width: 100%;
  max-height: 100vh;
  margin-top: em(30);
  overflow-y: scroll;
  scroll-behavior: smooth;
  scrollbar-width: thin; /* "auto" or "thin" */
  scrollbar-color: v(clr-neutral-500) v(clr-neutral-200); /* scroll thumb and track */
  &::-webkit-scrollbar {
    width: rem(12); /* width of the entire scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: v(clr-neutral-200); /* color of the tracking area */
  }
  &::-webkit-scrollbar-thumb {
    background-color: v(clr-neutral-500); /* color of the scroll thumb */
    border-radius: 8px; /* roundness of the scroll thumb */
    border: 3px solid v(clr-neutral-200); /* creates padding around scroll thumb */
  }
  @media screen and (min-width: 725px) {
    width: 40%;
    margin-top: unset;
  }
  @media screen and (min-width: 1153px) {
    width: 33%;
    max-height: 70vh;
  }
}
</style>
