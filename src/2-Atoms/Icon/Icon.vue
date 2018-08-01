<template lang="html">
  <i v-if="!svgPath" class="icon" :class="[
    name,
    size ? 'is-' + size : '']" aria-hidden="true"></i>
  <img v-else :src="getImgUrl(name)" alt="" class="icon is-svg">
</template>

<script>
export default {
  name: 'icon',
  props: {
    name: {
      type: String,
      default: '',
      note: 'Icon Name'
    },
    size: {
      type: String,
      default: '',
      note: 'Icon Size'
    },
    svgPath: {
      type: Boolean,
      default: false,
      note: 'Icon Path (to .svg file)'
    }
  },
  methods: {
    getImgUrl (pet) {
      var images = require.context('../../assets/img/icons/', false, /\.svg$/)
      return images('./' + pet + '.svg')
    }
  }
}
</script>
