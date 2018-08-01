<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  OFF CANVAS LAYOUT
  From https://github.com/vouill/vue-slideout
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
<template lang="html">
  <Slideout ref="offcanvaslayout" menu="#offcanvas-panel" panel="#content-panel" :toggleSelectors="['.toggle-offcanvas-btn']" @on-beforeopen="beforeOpen" @on-beforeclose="beforeClose">
     <nav id="offcanvas-panel" class="panel is-primary">
       <button-close @click.native="toggleOffCanvas"></button-close>
       <slot name="offcanvas"></slot>
     </nav>
     <div id="content-panel">
        <transition name="fade">
          <div class="offcanvas-mask" v-if="isActive" @click="toggleOffCanvas"></div>
        </transition>
        <slot name="maincontent"></slot>
     </div>
   </Slideout>
</template>

<script>
import Slideout from 'vue-slideout'

export default {
  name: 'offCanvasLayout',
  data () {
    return {
      isActive: false
    }
  },
  components: {
    Slideout
  },
  methods: {
    toggleOffCanvas () {
      this.$children[0].slideout.toggle()
    },
    beforeOpen () {
      this.isActive = true
    },
    beforeClose () {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss">
 .slideout-menu {
   position: fixed;
   top: 0;
   bottom: 0;
   width: 256px;
   height: 100vh;
   overflow-y: scroll;
   -webkit-overflow-scrolling: touch;
   z-index: 0;
   display: none;
 }

 .slideout-menu-left {
   left: 0;
 }

 .slideout-menu-right {
   right: 0;
 }

 .slideout-panel {
   position: relative;
   z-index: 1;
   min-height: 100vh;
 }

 .slideout-open,
 .slideout-open body,
 .slideout-open .slideout-panel {
   overflow: hidden;
 }

 .slideout-open .slideout-menu {
   display: block;
 }

 .offcanvas-mask {
   position: fixed;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   background: linear-gradient(135deg, rgba(#16336e, .75) 0%, rgba(#632882, .75) 100%);
   z-index: 999999999;
 }
</style>
