<template>
  <footer>
    <div class="container">
      <p>
        &copy; Webapp created by
        <a
          href="https://yewtreeweb.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          >YewTree Web</a
        >
        {{ year }}
      </p>
      <p>
        Data provided by
        <a
          href="https://covid19api.com/"
          target="_blank"
          rel="noopener noreferrer"
          >COVID 19 API</a
        >
        and
        <a
          href="https://coronavirus.data.gov.uk/"
          target="_blank"
          rel="noopener noreferrer"
          >Coronavirus (COVID-19) in the UK</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      year: null
    }
  },
  methods: {
    copyright () {
      const date = new Date()
      if (date.getFullYear() === 2022) {
        this.year = 2022
      } else {
        this.year = `2022-${date.getFullYear()}`
      }
    }
  },
  created () {
    this.copyright()
  }
}
</script>

<style lang="scss">
footer {
  background-color: v(clr-neutral-200);
  @include padding(em(40));
}
</style>
