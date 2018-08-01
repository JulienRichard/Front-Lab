<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  TAG
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
<template lang="html">
  <transition name="fade" mode="out-in">
    <span v-if="show" class="tag" :class="[
    color ? 'is-' + color : '',
    rounded ? 'is-rounded' : '',
    closable ? 'is-closable' : '']
    ">
      <i v-if="icon" :class="icon" class="icon is-align-left" aria-hidden="true"></i>
      <slot></slot>
      <button-close v-if="closable" @click.native.stop="handleClose" class="is-small"></button-close>
    </span>
  </transition>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped>
  @import "styles.scss";
</style>
