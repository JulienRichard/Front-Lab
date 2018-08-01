<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-cog"></i>Parallax</h3>
      <p>from <a class="link" href="https://github.com/jsnanigans/vue-parallax-js">Vue-Parallax-Js</a></p>

      <div class="row" style="margin-bottom: 3rem;">
        <div class="column">
          <div v-parallax=".25">
            <div class="box panel">
              <p>.25</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-parallax=".1">
            <div class="box panel">
              <p>.10</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div>
            <div class="box panel">
              <p>Static</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-parallax="-.1">
            <div class="box panel">
              <p>-.10</p>
            </div>
          </div>
        </div>
        <div class="column">
          <div v-parallax="-.25">
            <div class="box panel">
              <p>-.25</p>
            </div>
          </div>
        </div>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div v-parallax="{value}"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h3><i class="icon fas fa-cog"></i>Section Parallax</h3>
      <h4>Default</h4>
      <p>from <a class="link" href="https://github.com/vuetifyjs/vuetify/blob/dev/src/components/VParallax/VParallax.js">Vuetify</a></p>
      <section-parallax src="https://placeimg.com/1600/1900/any/1" style="margin-bottom: 1.5rem">

      </section-parallax>
      <code-highlight type="html" title="Markup">
      &lt;section-parallax src="https://placeimg.com/1900/1200/any"&gt;
        ...
      &lt;/section-parallax&gt;
      </code-highlight>
      <hr>

      <h4>Custom height</h4>

      <section-parallax src="https://placeimg.com/1900/1900/any/2" height="216" style="margin-bottom: 1.5rem">

      </section-parallax>
      <code-highlight type="html" title="Markup">
      &lt;section-parallax src="https://placeimg.com/1900/1900/any/2" height="{value in px}"&gt;
        ...
      &lt;/section-parallax&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
