<template id="single-custompost">
  <div class="wrapper">
    <loader fixed v-if="loading"></loader>

    <transition v-else appear name="fade" mode="out-in">
      <section ref="container">
        <article class="custompost">
          <header class="custompost--header">
            <h1 class="custompost--title like-h2">{{ fetchedPost.title.rendered }}</h1>
            <figure v-if="fetchedPost.featured_image_src" class="custompost--thumbnail" :style="{ 'background-image': 'url(' + fetchedPost.featured_image_src + ')' }"></figure>
            <figure v-else class="custompost--thumbnail" :style="{ 'background-image': 'url(' + this.placeholder + ')' }"></figure>
          </header>
        </article>
        <post-navigation :post="fetchedPost"></post-navigation>
      </section>
    </transition>

  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
import axios from 'axios'

import smoothHeight from 'vue-smooth-height'
import TimeHelper from '../1-Quarks/_js/mixins/TimeHelper'

Vue.use(VueResource)

export default {
  data () {
    return {
      loading: true,
      post: {}
    }
  },
  mixins: [smoothHeight, TimeHelper],
  computed: {
    fetchedPost () {
      return this.post[0]
    }
  },
  mounted () {
    this.fetchPost()
    this.$smoothElement({
      el: this.$refs.container
    })
  },
  methods: {
    fetchPost () {
      this.loading = true

      axios.get(window.config.baseUrl + '/wp-json/wp/v2/customposttype?slug=' + this.$route.params.slug)
      .then((response) => {
        this.post = response.data

        setTimeout(function () {
          this.loading = false
        }.bind(this), 600)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  watch: {
    '$route' () {
      this.fetchPost()
    }
  }
}
</script>

<style lang="scss">
//////////////////////////////////////////////////////////
//  CUSTOM POST
//////////////////////////////////////////////////////////
$custompost--border-radius: $global-radius;
$custompost--box-shadow: $global-box-shadow;

.custompost {
  &--header {
    position: relative;
    border-radius: $custompost--border-radius;
    box-shadow: $custompost--box-shadow;
    margin-bottom: rhythm(1);
    overflow: hidden;
  }

  &--title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: rhythm(2) rhythm(1) rhythm(.5) rhythm(1);
    background: linear-gradient(0, $black 0%, rgba($black, 0) 100%);
  }

  &--thumbnail {
    display: block;
    background-size: cover;
    background-position: center center;
    height: rhythm(12);

    @include breakpoint(medium) {
      height: rhythm(18);
    }
  }

  &--content {
    img {
      border-radius: $global-radius;
      box-shadow: $global-box-shadow;
    }
  }
}
</style>
