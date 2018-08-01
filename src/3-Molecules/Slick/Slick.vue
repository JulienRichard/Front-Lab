<template>
  <div :class="[
  type === 'slider' ? 'is-slider' : '',
  type === 'carousel' ? 'is-carousel' : ''
  ]">
    <slot></slot>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
