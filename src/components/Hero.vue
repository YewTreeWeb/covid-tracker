<template>
  <section class="hero">
    <div>
      <h2>{{ title }} Cases</h2>
      <p><span>Date:</span>{{ formatedDate }}</p>
    </div>
    <div>
      <doctor />
    </div>
  </section>
</template>

<script>
import dayjs from 'dayjs'
import Doctor from './icons/Doctor'
export default {
  name: 'Hero',
  components: {
    Doctor
  },
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String
    }
  },
  computed: {
    formatedDate () {
      return dayjs(this.date).format('DD/MM/YYYY')
    }
  }
}
</script>
