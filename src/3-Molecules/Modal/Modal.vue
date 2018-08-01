<template lang="html">
  <transition name="modal">
    <div class="modal" :class="[centered ? 'is-centered' : '']" @click="$emit('close')" :style="'border-color:' + this.color + ''">
      <div class="modal--wrapper">
        <button-close @click.native="$emit('close')"></button-close>

        <div class="modal--content wrapper" @click.stop>
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
