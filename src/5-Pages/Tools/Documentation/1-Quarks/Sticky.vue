<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-cog"></i>Sticky</h3>
      <p>from <a class="link" href="https://github.com/rguanghui/vue-sticky">Vue-Sticky</a></p>

      <div class="row">
        <div class="column small-12 medium-4 wireframe">
          <div class="box panel is-light" v-sticky="stickyConfig">
            Sticky
          </div>
          <!--<img v-sticky="stickyConfig" src="https://placeimg.com/640/480/any/1">-->
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="column small-12 medium-4 wireframe">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
          <div class="box panel is-light" v-sticky="stickyConfig">
            Sticky
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
        </div>
        <div class="column small-12 medium-4 wireframe">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
          <div class="box panel is-light" v-sticky="stickyConfig">
            Sticky
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae qui porro rem, quia voluptatem, fugiat sed incidunt ad dicta cumque deleniti neque! Nobis commodi minima dolorem non, cum totam adipisci?</p>
        </div>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;!-- Container --&gt;
      &lt;div&gt;
        &lt;!-- Sticky --&gt;
        &lt;div v-sticky&gt;
          ...
        &lt;/div&gt;
      &lt;/div&gt;
      </code-highlight>
      <code-highlight type="javascript" title="Script">
      stickyConfig: {
        zIndex: 100,
        stickyTop: 1.5 /* rem */
      }
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stickyConfig: {
        stickyTop: 1.5,
        zIndex: 100
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
