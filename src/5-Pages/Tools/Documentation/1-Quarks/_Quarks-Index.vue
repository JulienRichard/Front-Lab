<template lang="html">
  <div class="wrapper">

    <!-- Tools Menu -->
    <h3><i class="icon is-fw fas fa-cogs"></i>Tools</h3>
    <div class="row small-up-1 medium-up-3">
      <div class="column">
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-AOS' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Animate On Scroll
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ScrollTo' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Scroll To
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Sticky' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Sticky
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ImagesLoaded' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              ImagesLoaded
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Isotope' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Isotope
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-FormValidation' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Form Validation
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Tooltip' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Tooltip
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Parallax' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Parallax
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <hr>

    <!-- Base Styles Menu -->
    <h3><i class="icon is-fw fas fa-crop"></i>Base Style</h3>
    <div class="row small-up-1 medium-up-3 large-up-4">
      <div class="column">
        <h4><i class="icon is-fw is-align-left fas fa-cogs is-align-left"></i>Helpers</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Visibility' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              Visibility
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-MediaQueries' }">
              <i class="icon is-fw is-align-left fas fa-cog" aria-hidden="true"></i>
              MediaQueries
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon is-fw is-align-left fas fa-crop is-align-left" aria-hidden="true"></i>Layout</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Sections' }">
              <i class="icon is-fw is-align-left far fa-square is-align-left" aria-hidden="true"></i>
              Sections
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Wrapper' }">
              <i class="icon is-fw is-align-left fas fa-arrows-alt-h is-align-left" aria-hidden="true"></i>
              Wrapper
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-FlexGrid' }">
              <i class="icon is-fw is-align-left fas fa-th-large is-align-left" aria-hidden="true"></i>
              FlexGrid
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Box' }">
              <i class="icon is-fw is-align-left far fa-square" aria-hidden="true"></i>
              Box
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Panels' }">
              <i class="icon is-fw is-align-left fas fa-square is-align-left" aria-hidden="true"></i>
              Panels
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon is-fw is-align-left fas fa-font is-align-left" aria-hidden="true"></i>Typography</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Typography' }">
              <i class="icon is-fw is-align-left fas fa-font"></i>
              Global
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Headings' }">
              <i class="icon is-fw is-align-left fas fa-heading"></i>
              Headings
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon is-fw is-align-left fas fa-puzzle-piece is-align-left"></i>Components</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Icons' }">
              <i class="icon is-fw is-align-left fas fa-flag-checkered" aria-hidden="true"></i>
              Icons
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Forms' }">
              <i class="icon is-fw is-align-left fas fa-i-cursor" aria-hidden="true"></i>
              Forms
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Lists' }">
              <i class="icon is-fw is-align-left fas fa-list" aria-hidden="true"></i>
              Lists
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Tables' }">
              <i class="icon is-fw is-align-left fas fa-table" aria-hidden="true"></i>
              Tables
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Menu' }">
              <i class="icon is-fw is-align-left fas fa-bars" aria-hidden="true"></i>
              Menus
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
