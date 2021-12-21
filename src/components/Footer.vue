<template>
  <footer>
    <div class="container">
      <p>This is the footer</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
footer {
  background-color: v(clr-neutral-200);
  @include padding(em(40));
}
</style>
