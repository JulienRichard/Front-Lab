<template>
  <div class="top-bar-container">
    <div class="top-bar">
      <div class="top-bar-title">
        <router-link :to="{ name: 'Home' }">
          <img src="../../assets/img/logo.svg" alt="" style="max-width: 160px; height: 3rem; margin-top: -4px;">
        </router-link>
      </div>
      <div class="top-bar-left show-for-large">
        <menu-main id="main-menu"></menu-main>
      </div>
      <div class="top-bar-right">
        <a href="https://github.com/JulienRichard/Front-Lab" title="Github" v-tippy="{ position: 'bottom' }" style="margin-right: 6px;">
          <i class="icon fab fa-github is-lg"></i>
        </a>
        <button-menu class="toggle-offcanvas-btn"></button-menu>
        <!--
        <a href="" title="View on Github" v-tippy>
          <i class="icon fa-github is-2x" aria-hidden="true"></i>
        </a>
      -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

  }
}
</script>

<style lang="scss" scoped>
$topbar-unstack-breakpoint: medium;
// $topbar-background: linear-gradient(33deg, $primary-color-lighten, $primary-color-darken);
$topbar-background: transparent;
$topbar-text-color: $white;
$topbar-title-spacing: 1.5rem;
$topbar-input-width: 200px;
$topbar-title-max-width: 200px;
$topbar-transition: all .3s ease;

// -- TOP-BAR STICKY STYLE
@mixin _top-bar-sticky {
  background: $topbar-sticky-background;
}

// CONTAINER
// ----------------------
.top-bar-container {
  position: relative;
  transition: $topbar-transition;
  @include padding-block(.5, 0, .5, 0);

  background: $topbar-background;
  color: $topbar-text-color;

  a {
    color: $topbar-text-color;
  }
}

// GLOBAL STYLES
// ----------------------
.top-bar {
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 rhythm(1);

  .top-bar-left {
    flex: 1 1 auto;
  }

  .top-bar-right {
    flex: 0 1 auto;
  }
}

// TOPBAR TITLE
// ----------------------
.top-bar-title {
  flex: 0 0 auto;
  margin-right: $topbar-title-spacing;

  svg {
    max-width: $topbar-title-max-width;
  }
}
</style>
