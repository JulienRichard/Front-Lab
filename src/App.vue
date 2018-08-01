<template lang="html">
  <off-canvas id="app-wrapper">
    <!-- Page OffCanvas -->
    <div id="page-offcanvas" slot="offcanvas">
      <sidebar-main></sidebar-main>
    </div>

    <!-- Page Wrapper -->
    <div id="page-wrapper" slot="maincontent">
      <devtools></devtools>
      <main id="page">
        <!-- Header -->
        <header id="main-header" class="page-header">
          <topbar-main></topbar-main>
        </header>

        <!-- Content -->
        <section id="main-content" class="page-content section">
          <breadcrumbs class="wrapper"></breadcrumbs>
          <transition name="fade" mode="out-in" appear>
            <router-view ref="routerview" id="main-router-view"></router-view>
          </transition>
        </section>

        <!-- Footer -->
        <footer-main id="main-footer"></footer-main>
      </main>

      <!-- Preloader -->
      <pre-loader></pre-loader>
    </div>

  </off-canvas>
</template>

<script>
export default {
  created () {
    this.documentTitle()
  },
  mounted () {
    this.preloading()
  },
  props: {
    root: {
      type: String,
      default: 'Front-Lab',
      note: ''
    }
  },
  methods: {
    // App PreLoader
    preloading () {
      this.EventHolder.$emit('startPreLoading')
      setTimeout(function () {
        this.EventHolder.$emit('stopPreLoading')
      }.bind(this), 1500)
    },
    // Change Document Meta Title
    documentTitle () {
      var title = (this.root || 'Home')
      var r = (this.$route.path).split('/')
      var m = (this.$route.matched[0].meta.crumbs || '').split('/')

      for (var i = 1; i < r.length; i++) {
        var name = (m[i] || r[i]); if (r[i] === '') continue
        title += ' | ' + name
      }
      window.document.title = title
    }
  },
  watch: {
    // Call Methods on route change
    $route (to, from) {
      this.documentTitle()
    }
  }
}
</script>

<style lang="scss">
// -- GLOBAL LAYOUT
// Sticky Footer
#page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .page-content {
    flex: 1;
  }
}

// -- GLOBAL STYLES
#page-wrapper {
  background: $app-background-image, $app-background-gradient;
  background-size: 100%;
  border: $app-border;
}

// -- GLOBAL HELPERS
// ROUTER VIEW TRANSITION
// + Smooth height hack
.routerTransition {
  &-enter {
    // max-height: 0px;
    opacity: 0;
  }

  &-enter-active {
    transition: all .3s linear;
  }

  &-enter-to {
    // max-height: 1000px;
    opacity: 1;
  }

  &-leave {
    opacity: 1;
    // max-height: 1000px;
  }

  &-leave-active {
    transition: all .3s linear;
  }

  &-leave-to {
    opacity: 0;
    // max-height: 0px;
  }
}
</style>
