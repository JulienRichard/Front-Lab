<template lang="html">
  <div class="wrapper">

    <div class="row small-up-1 medium-up-2 large-up-4">
      <div class="column">
        <h4><i class="icon far fa-compass"></i>Navigation</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Breadcrumbs' }">
              <i class="icon is-fw is-align-left fas fa-ellipsis-h"></i>
              Breadcrumbs
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Pagination' }">
              <i class="icon is-fw is-align-left fas fa-arrows-alt-h"></i>
              Pagination
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-PostNavigation' }">
              <i class="icon is-fw is-align-left fas fa-arrows-alt-h"></i>
              Navigation
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-ButtonGroup' }">
              <i class="icon is-fw is-align-left fas fa-mouse-pointer"></i>
              Button group
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon far fa-square"></i>Containers</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Tabs' }">
              <i class="icon is-fw is-align-left fas fa-ellipsis-h"></i>
              Tabs
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Slick' }">
              <i class="icon is-fw is-align-left fas fa-arrows-alt-h"></i>
              Slick
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Gallery' }">
              <i class="icon is-fw is-align-left far fa-images"></i>
              Gallery
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Notification' }">
              <i class="icon is-fw is-align-left fas fa-exclamation-triangle"></i>
              Notification
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Modal' }">
              <i class="icon is-fw is-align-left fas fa-window-maximize"></i>
              Modal
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon di-article"></i>Posts</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Post-Item' }">
              <i class="icon is-fw is-align-left di-article"></i>
              Post Item
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-CustomPost-Item' }">
              <i class="icon is-fw is-align-left far fa-image"></i>
              CustomPost Item
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
