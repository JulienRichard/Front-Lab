<template lang="html">
  <div class="wrapper">
    <h3><i class="icon fas fa-cog"></i>Scroll To</h3>
    <p>from <a class="link" href="https://rigor789.github.io/vue-scrollto/#/docs">VueScrollTo</a></p>
    <ul class="menu">
      <li class="menu-item">
        <a href="#" v-scroll-to="'#section1'">Section 1</a>
      </li>
      <li class="menu-item">
        <a href="#" v-scroll-to="'#section2'">Section 2</a>
      </li>
      <li class="menu-item">
        <a href="#" v-scroll-to="'#section3'">Section 3</a>
      </li>
    </ul>
    <section class="section is-full wireframe" id="section1">
      <h4>Section 1</h4>
    </section>
    <section class="section is-full wireframe" id="section2">
      <h4>Section 2</h4>
    </section>
    <section class="section is-full wireframe" id="section3">
      <h4>Section 3</h4>
    </section>
    <code-highlight type="html" title="Markup">
    &lt;a v-scroll-to="#section"&gt; ... &lt;/a&gt;
    </code-highlight>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
