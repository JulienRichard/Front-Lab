<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-cog"></i>Images Loaded</h3>
    <p><span class="lead">Vue.js 2.0 directive to detect images loading</span> - from <a class="link" href="https://github.com/David-Desmaisons/Vue.ImagesLoaded">Vue ImagesLoaded</a></p>

    <!-- Isotope Layout -->
    <h4>Use with Isotope</h4>
    <p>Init Masonry layout only when images is loaded.</p>
    <isotope ref="cpt" :options='isotopeOptions' v-images-loaded:on.progress="masonryLayout" :list="list">
      <div v-for="element in list" :key="element.id"  @click="selected=element" class="isotope-imageloaded-item">
        <img :src="'https://placeimg.com/500/500/any/'+element.id" alt=""/>
      </div>
    </isotope>
    <code-highlight type="html" title="Markup">
    &lt;isotope ref=&quot;cpt&quot;
      :options='isotopeOptions'
      v-images-loaded:on.progress=&quot;masonryLayout&quot;
      :list=&quot;list&quot;&gt;
      &lt;div v-for=&quot;element in list&quot;
      :key=&quot;element.id&quot; @click=&quot;selected=element&quot;
      class=&quot;isotope-imageloaded-item&quot;&gt;
          &lt;img :src=&quot;'https://placeimg.com/500/500/any/'+element.id&quot; alt=&quot;&quot;/&gt;
      &lt;/div&gt;
    &lt;/isotope&gt;
    </code-highlight>

  </div>
</template>

<script>
import imagesLoaded from 'vue-images-loaded'

export default {
  data () {
    return {
      list: [
        { id: 1, name: 'Image 1' },
        { id: 2, name: 'Image 2' },
        { id: 3, name: 'Image 3' },
        { id: 4, name: 'Image 4' },
        { id: 5, name: 'Image 5' },
        { id: 6, name: 'Image 6' },
        { id: 7, name: 'Image 7' },
        { id: 8, name: 'Image 8' }
      ],
      isotopeOptions: {
        itemSelector: '.isotope-imageloaded-item',
        layoutMode: 'masonry'
      }
    }
  },
  directives: {
    imagesLoaded
  },
  methods: {
    masonryLayout () {
      this.$refs.cpt.layout('masonry')
    }
  }
}
</script>

<style lang="scss">
.isotope-imageloaded-item {
  position: relative;
  float: left;
  width: 50%;

  @include breakpoint(large) {
    width: 25%;
  }
}
</style>
