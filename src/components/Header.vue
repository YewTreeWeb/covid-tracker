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
      title: 'Covid, Where Art Thou?'
    }
  }
}
</script>

<style lang="scss">
header {
  background-color: v(clr-neutral-200);
  @include flex(center, flex-start, row, false);
  @include padding(em(20) em(40));
  h1 {
    margin-left: rem(40);
  }
}
</style>
