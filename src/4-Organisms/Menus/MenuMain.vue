<template>
  <nav id="main-menu">
    <ul class="menu">
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
  </nav>
</template>

<script>
import api from '../../_api'

export default {
  data () {
    return {
      items: null
    }
  },
  mounted () {
    // this.fetchMenu()
  },

  methods: {
    /*
    Fetch the main menu for the website.
    */
    fetchMenu () {
      // this.EventHolder.$emit('startLoading')
      return this.$http.get(api.MAIN_MENU).then(({
        data: response
      }) => {
        this.items = response.items
        // this.EventHolder.$emit('stopLoading')
      })
    },

    /*
    Activate page parent in the navigation menu
    if one of it's children is the current page.
    */
    hasChildOfType (types) {
      return types.includes(this.$route.name)
    }
  }
}
</script>

<style lang="scss">

</style>
