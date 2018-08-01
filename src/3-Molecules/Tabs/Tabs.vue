<template>
  <div class="tabs-container">
    <ul role="tablist" class="tabs"
      :class="[
      centered ? 'is-centered' : '',
      expanded ? 'is-expanded' : '',
      wrapped ? 'wrapper' : '' ]">
      <li v-for="tab in tabs" :class="{ 'is-active': tab.isActive }" class="tab" role="presentation" v-show="tab.isVisible">
        <a :aria-controls="tab.hash" :aria-selected="tab.isActive" @click="selectTab(tab.hash, $event)" :href="tab.hash" role="tab">
          <i v-if="tab.icon" class="icon is-align-left" :class="tab.icon"></i>
          {{ tab.name }}
        </a>
      </li>
    </ul>
    <div class="tabs-panels">
      <slot></slot>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
