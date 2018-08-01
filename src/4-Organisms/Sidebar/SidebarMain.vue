<template lang="html">
  <div id="sidebar-main">
    <ul class="menu is-vertical">
      <li class="menu-item">
        <router-link :to="{ name: 'Blog' }"><i class="icon di-blog is-align-left" aria-hidden="true"></i>Blog</router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'CustomPosts' }"><i class="icon di-photo-group is-align-left" aria-hidden="true"></i>Custom Posts</router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'Styleguide' }"><i class="icon di-brush is-align-left" aria-hidden="true"></i>Styleguide</router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'DocumentationIndex' }"><i class="icon di-blog is-align-left" aria-hidden="true"></i>Documentation</router-link>
      </li>
      <li class="menu-item">
        <router-link :to="{ name: 'DevTests' }"><i class="icon fas fa-cogs is-align-left" aria-hidden="true"></i>Dev Tests</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
