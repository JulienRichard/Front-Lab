<template>
  <button :type="type" class="button-icon" :class="[
  color ? 'is-' + color : '',
  size ? 'is-' + size : '',
  hollow ? 'is-hollow' : '',
  rounded ? 'is-rounded' : '',
  disabled ? 'is-disabled' : '',
  active ? 'is-active' : '']">
    <i :class="icon" class="icon" aria-hidden="true"></i>
  </button>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
