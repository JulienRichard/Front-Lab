<template lang="html">
  <div class="wrapper">

    <div class="row small-up-1 medium-up-2 large-up-4">
      <div class="column">
        <h4><i class="icon is-fw fas fa-mouse-pointer is-align-left"></i>Buttons</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ButtonDefault' }">
              <i class="icon is-fw is-align-left fas fa-mouse-pointer"></i>
              Buttons-Default
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ButtonIcon' }">
              <i class="icon is-fw is-align-left fas fa-mouse-pointer"></i>
              Button-Icon
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ButtonMenu' }">
              <i class="icon is-fw is-align-left fas fa-bars"></i>
              Button-Menu
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ButtonClose' }">
              <i class="icon is-fw is-align-left fas fa-times"></i>
              Button-Close
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon is-fw fas fa-puzzle-piece is-align-left"></i>Elements</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Badge' }">
              <i class="icon is-fw is-align-left fas fa-certificate"></i>
              Badge
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Tag' }">
              <i class="icon is-fw is-align-left fas fa-tag"></i>
              Tag
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Thumbnail' }">
              <i class="icon is-fw is-align-left far fa-image"></i>
              Thumbnail
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
