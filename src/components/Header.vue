<template>
  <header>
    <virus />
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
import Virus from '@/components/icons/Virus'
export default {
  name: 'Header',
  components: {
    Virus
  }
}
</script>
