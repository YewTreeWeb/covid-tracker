<template>
  <header class="text-5xl text-center p-10 mb-10">
    <virus width="100" />
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import Virus from '@/components/icons/Virus'
export default {
  name: 'Header',
  components: {
    Virus
  },
  data () {
    return {
      title: 'Covid-19, Where Art Thou?'
    }
  }
}
</script>
