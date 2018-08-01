<template lang="html">
  <button class="button-menu" :class="active ? 'is-active' : ''">
    <span>
      <span></span>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import "styles.scss";
</style>
