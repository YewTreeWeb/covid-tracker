<template>
  <header>
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
      title: 'Covid Where Art Thou?'
    }
  }
}
</script>
