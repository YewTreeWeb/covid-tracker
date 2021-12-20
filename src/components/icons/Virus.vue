<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    :width="width"
    :height="height"
  >
    <g
      stroke-linecap="square"
      stroke-linejoin="miter"
      stroke-miterlimit="10"
      :stroke-width="strokewidth"
      :fill="_secondaryfill"
      :stroke="_secondaryfill"
    >
      <circle cx="12" cy="19" r="2" stroke="none"></circle>
      <line
        x1="10.26"
        y1="2.142"
        x2="11.79"
        y2="5.837"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="8.412"
        y1="2.907"
        x2="12.108"
        y2="1.376"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="2.142"
        y1="10.26"
        x2="5.837"
        y2="11.79"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="1.376"
        y1="12.108"
        x2="2.907"
        y2="8.412"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="2.142"
        y1="21.74"
        x2="5.837"
        y2="20.21"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="2.907"
        y1="23.588"
        x2="1.376"
        y2="19.892"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="10.26"
        y1="29.858"
        x2="11.79"
        y2="26.163"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="12.108"
        y1="30.624"
        x2="8.412"
        y2="29.093"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="21.74"
        y1="29.858"
        x2="20.21"
        y2="26.163"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="23.588"
        y1="29.093"
        x2="19.892"
        y2="30.624"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="29.858"
        y1="21.74"
        x2="26.163"
        y2="20.21"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="30.624"
        y1="19.892"
        x2="29.093"
        y2="23.588"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="29.858"
        y1="10.26"
        x2="26.163"
        y2="11.79"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="29.093"
        y1="8.412"
        x2="30.624"
        y2="12.108"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="21.74"
        y1="2.142"
        x2="20.21"
        y2="5.837"
        fill="none"
        :stroke="fill"
      ></line>
      <line
        x1="19.892"
        y1="1.376"
        x2="23.588"
        y2="2.907"
        fill="none"
        :stroke="fill"
      ></line>
      <circle
        cx="16"
        cy="16"
        r="11"
        fill="none"
        stroke-linecap="butt"
        :stroke="fill"
      ></circle>
      <circle
        cx="19.5"
        cy="16.5"
        r="2.5"
        fill="none"
        :stroke="_secondaryfill"
      ></circle>
      <circle cx="12.5" cy="11.5" r="1.5" stroke="none"></circle>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Virus',
  props: {
    width: {
      type: [Number, String],
      default: '100%'
    },
    height: {
      type: [Number, String],
      default: '100%'
    },
    strokewidth: {
      type: [Number, String],
      default: 1
    },
    fill: {
      type: String,
      default: 'currentColor'
    },
    secondaryfill: {
      type: String
    }
  },
  computed: {
    _secondaryfill: function () {
      return this.secondaryfill || this.fill
    }
  }
}
</script>
