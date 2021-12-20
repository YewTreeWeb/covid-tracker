<template>
  <section>
    <h2>{{ title }}</h2>
    <p>{{ formatedDate }}</p>
  </section>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'Hero',
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
