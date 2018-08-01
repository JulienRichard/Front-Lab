<template>
  <button :type="type" class="button" :class="[
  color ? 'is-' + color : '',
  size ? 'is-' + size : '',
  hollow ? 'is-hollow' : '',
  rounded ? 'is-rounded' : '',
  expanded ? 'is-expanded' : '',
  disabled ? 'is-disabled' : '',
  active ? 'is-active' : '']">
    <i v-if="iconLeft" :class="iconLeft" class="icon is-align-left" aria-hidden="true"></i>
    <slot></slot>
    <i v-if="iconRight" :class="iconRight" class="icon right" aria-hidden="true"></i>
  </button>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
