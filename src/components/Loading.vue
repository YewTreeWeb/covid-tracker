<template>
  <div class="loading">
    <img class="error" v-if="error" src="../assets/error.svg" alt="404" />
    <div class="loader" v-else></div>
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    msg: {
      default: 'Getting Covid-19 data...'
    },
    error: Boolean
  }
}
</script>

<style lang="scss" scoped>
.loading {
  position: relative;
  z-index: 10;
  @include size(100%, 100vh);
  @include flex(center, center, column);
  @supports (gap: 1px) {
    gap: 4em;
  }
  > .loader {
    position: relative;
    @include size(4em);
    border: 3px solid v(clr-primary-100);
    overflow: hidden;
    animation: spin 3s ease infinite;
    &::before {
      content: '';
      position: absolute;
      top: -3px;
      left: -3px;
      @include size(4em);
      background-color: v(clr-primary-200);
      transform-origin: center bottom;
      transform: scaleY(1);
      animation: fill 3s linear infinite;
    }
  }
  > .error {
    max-height: 75vh;
  }
  > h2 {
    margin-top: 2em;
    @supports (gap: 1px) {
      margin-top: unset;
    }
  }
}

@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}

@keyframes fill {
  25%,
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
