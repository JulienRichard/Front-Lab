<template lang="html">
  <div class="dev-tools">

    <div :class="{'show-baseline' : showBaseline}">
      <div :class="{'show-global-grid' : showGlobalGrid }">
        <div :class="{'show-wrapper-grid' : showWrapperGrid }">
          <div class="devtools--site-content">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>

    <div class="dev-panel">
      <button-group-check :group="false" class="dev-panel--buttons" style="z-index: 999999999;">
        <button-icon
          title="Global Grid" v-tippy="{ position : 'top' }"
          icon="fas fa-th-large"
          size="tiny"
          color="darken"
          rounded
          :class="{ 'is-active' : showGlobalGrid }"
          @click.prevent.native="toggleGlobalGrid">
        </button-icon>
        <button-icon
          title="Wrapped Grid" v-tippy="{ position : 'top' }"
          icon="fas fa-th"
          size="tiny"
          color="darken"
          rounded
          :class="{ 'is-active' : showWrapperGrid }"
          @click.prevent.native="toggleWrapperGrid">
        </button-icon>
        <button-icon
          title="Vertical Rhythm" v-tippy="{ position : 'top' }"
          icon="fas fa-ruler-vertical"
          size="tiny"
          color="darken"
          rounded
          :class="{ 'is-active' : showBaseline }"
          @click.prevent.native="toggleBaseline">
        </button-icon>
      </button-group-check>

      <div class="dev-panel--screen-sizes">
        <span class="show-for-small-only">
          <tag rounded>Small screen</tag>
        </span>
        <span class="show-for-medium-only">
          <tag rounded>Medium screen</tag>
        </span>
        <span class="show-for-large-only">
          <tag rounded>Large screen</tag>
        </span>
        <span class="show-for-xlarge-only">
          <tag rounded>x-Large screen</tag>
        </span>
        <span class="show-for-xxlarge-only">
          <tag rounded>xx-Large screen</tag>
        </span>
      </div>
    </div>

  </div>
</template>

<script src="./script.js"></script>

<style lang="scss">
  /* global styles */
  @import "styles.scss";
</style>

<style lang="scss" scoped>
  /* local styles */
</style>
