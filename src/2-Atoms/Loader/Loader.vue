<template>
  <transition name="fade">
    <div class="loader" :class="[
      fixed ? 'is-fixed' : '',
      static ? 'is-static' : ''
    ]">
      <div class="spinner">
      	<div class="right-side">
      		<div class="bar"></div>
      	</div>
      	<div class="left-side">
      		<div class="bar"></div>
      	</div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped>
  // -- LOADER
  .loader {
    display: block;
    z-index: 999999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(.5);

    &.is-static {
      position: relative;
      margin: rhythm(2) auto;
      width: 100px;
      top: auto;
      left: auto;
      transform: translateY(0) translateX(0) scale(.5);
    }

    &.is-fixed {
      position: fixed;
    }
  }

  @import "spinner.scss";
</style>
