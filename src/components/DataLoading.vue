<template>
  <div class="loader">
    <p class="error" v-if="msg">{{ msg }}</p>
    <div class="balls" v-else>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataLoading',
  props: {
    msg: String
  }
}
</script>

<style lang="scss" scoped>
.loader {
  @include padding(em(30) null);
  .error {
    font-weight: map-get($weights, 700);
    color: v(clr-accent-100);
  }
  .balls {
    width: 4em;
    @include flex(center, space-between, row, false);
    div {
      @include size(0.8em);
      border-radius: 50%;
      background-color: v(clr-primary-100);
    }
    div:nth-of-type(1) {
      transform: translateX(-100%);
      animation: left-swing 0.5s ease-in alternate infinite;
    }
    div:nth-of-type(3) {
      transform: translateX(-95%);
      animation: right-swing 0.5s ease-out alternate infinite;
    }
  }
}
@keyframes left-swing {
  50%,
  100% {
    transform: translateX(95%);
  }
}

@keyframes right-swing {
  50% {
    transform: translateX(-95%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
