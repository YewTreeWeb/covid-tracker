<template>
  <section class="hero">
    <div>
      <h2>{{ title }} Cases</h2>
      <p><span>Date:</span>{{ formatedDate }}</p>
    </div>
    <div class="hero__img">
      <doctor
        fill="var(--clr-primary-100)"
        fillSecondary="var(--clr-neutral-200)"
      />
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

<style lang="scss">
.hero {
  @include flex(center, space-between, row);
  h2 {
    font-size: v(fs-5xl);
    line-height: map-get($lh, 5xl);
  }
  &__img {
    max-width: 1000px;
    @include size(100%, auto);
  }
}
</style>
