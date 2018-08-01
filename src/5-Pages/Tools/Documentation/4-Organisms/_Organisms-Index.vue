<template lang="html">
  <div class="wrapper">

    <div class="row small-up-1 medium-up-2 large-up-3">
      <div class="column">
        <h4><i class="icon fas fa-puzzle-piece"></i>Template Parts</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-TopBar' }">
              <i class="icon is-fw is-align-left fas fa-window-maximize"></i>
              Top-Bar
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-SideBar' }">
              <i class="icon is-fw is-align-left fas fa-ellipsis-v"></i>
              Side-Bar
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Footer' }">
              <i class="icon is-fw is-align-left fas fa-window-minimize"></i>
              Footer
            </router-link>
          </li>
        </ul>
      </div>
      <div class="column">
        <h4><i class="icon di-article"></i>Blog</h4>
        <ul class="menu is-vertical doc-components-menu">
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-Post-List' }">
              <i class="icon is-fw is-align-left di-blog"></i>
              Post List
            </router-link>
          </li>
          <li class="menu-item">
            <router-link :to="{ name: 'Doc-CustomPost-List' }">
              <i class="icon is-fw is-align-left di-photo-group"></i>
              Custom Post List
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
