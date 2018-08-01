<template>
  <div>
    <header class="content-header wrapper">
      <h1><i class="icon di-blog" aria-hidden="true"></i>Documentation</h1>
      <nav>
        <ul class="menu is-expanded">
          <li class="menu-item">
            <router-link :to="{ name: 'QuarksIndex' }">
              <img src="../../../assets/img/icons/quark.svg" alt="" class="icon is-svg is-align-top">
              Quarks
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'AtomsIndex' }">
              <img src="../../../assets/img/icons/atom.svg" alt="" class="icon is-svg is-align-top">
              Atoms
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'MoleculesIndex' }">
              <img src="../../../assets/img/icons/molecule.svg" alt="" class="icon is-svg is-align-top">
              Molecules
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'OrganismsIndex' }">
              <img src="../../../assets/img/icons/organism.svg" alt="" class="icon is-svg is-align-top">
              Organisms
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'PagesIndex' }">
              <img src="../../../assets/img/icons/template.svg" alt="" class="icon is-svg is-align-top">
              Pages
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <transition name="routerTransition" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
// VuikitDocs
import Vue from 'vue'
import VuikitDocs from 'vuikit-docs'

Vue.use(VuikitDocs)

export default {

}
</script>


<style lang="scss">
// DOCS VuikitDocs
.vk-docs-props {
  .uk-form-select > a {
    display: none;
  }

  .tm-docs-hidden-medium.uk-text-truncate {
    color: $white !important;
  }
}

.uk-table .m-docs-hidden-medium.uk-text-truncate {
  code {
    color: $white !important;
  }
}

.uk-hidden-large.uk-text-small.uk-text-muted {
  display: none;
}

// DOCS Tables > Checkbox
.vk-docs-props {
  input[type='checkbox'] {
    position: relative;
    margin: -4px 0 0 0;
    transform: translateY(5px);
    width: rhythm(1);
    height: rhythm(1);

    &::after {
      content: '';
      display: inline-block;
      width: rhythm(1);
      height: rhythm(1);
      border: 1px solid rgba($white, .75);
      background: $white;
      border-radius: rhythm(.125);
    }

    &::before {
      content: '';
      display: none;
      position: absolute;
      @include center(xy);
      width: rhythm(.5);
      height: rhythm(.5);
      background: $primary-color;
    }

    &:checked {
      &::before {
        display: block;
      }
    }
  }
}

// DOCS Wireframe
.wireframe {
  position: relative;
  outline: 1px dashed rgba($white, .5);
}

// Icon SVG
.icon.is-svg {
  fill: $white;
}

// Components Menus
.doc-components-menu {
  a.is-warning {
    color: $warning-color;
  }

  a.is-error {
    color: $error-color;
  }
}
</style>
