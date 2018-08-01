<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  BADGE
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
<template lang="html">
  <span class="badge" :class="[
  color ? 'is-' + color : '',
  size ? 'is-' + size : '',
  rounded ? 'is-rounded' : '']"
  >
    <slot v-if="!icon"></slot>
    <i v-else :class="icon" class="icon" aria-hidden="true"></i>
  </span>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped>
  @import "styles.scss";
</style>
