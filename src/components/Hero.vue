<template>
  <section class="hero">
    <div class="hero__content">
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
    line-height: map-get($lh, 5xl);
    font-size: clamp(2rem, 5vw, 7rem);
  }
  p {
    font-size: clamp(1.125rem, 3vw, 1.875rem);
    margin-top: 1.5rem;
    span {
      font-weight: map-get($weights, 600);
      margin-right: 0.8rem;
    }
  }
  &__img {
    @include fluid(max-width, 400px, 1000px, 400px, 1920px);
    @include size(100%, auto);
  }
  &__content {
    @media screen and (min-width: 415px) {
      max-width: 750px;
    }
  }
}
</style>
