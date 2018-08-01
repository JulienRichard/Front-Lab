<template>
  <div class="notification-container" :class="[
  size ? 'is-' + this.size : '',
  position ? 'is-' + this.position : '']">
    <transition name="notification">
      <div class="notification fixed" v-if="notifShow"
        :class="[
        type ? 'is-' + this.type : ''
        ]">
        <i v-if="this.type === 'error'" class="icon is-fw fas fa-times"></i>
        <i v-else-if="this.type === 'warning'" class="icon is-fw fas fa-exclamation-triangle"></i>
        <i v-else-if="this.type === 'info'" class="icon is-fw fas fa-info"></i>
        <i v-else-if="this.type === 'success'" class="icon is-fw fas fa-check"></i>
        <i v-else class="icon is-fw fas fa-exclamation"></i>

        <p class="notification-title lead"><strong>{{ this.content.title }}</strong></p>
        <p class="notification-text">{{ this.content.text }}</p>

        {{ this.size }}

        <button-close v-if="!notifOptions.autoClose" @click.native="close()"></button-close>

        <div class="countdown"
             v-if="notifShow && notifOptions.autoClose && notifOptions.countdownBar"
             :style="setTime"
             :class="barControl"></div>
      </div>
    </transition>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped>
  @import "styles.scss";
</style>
