<template id="single-post">
  <div class="wrapper">
    <loader fixed v-if="loading"></loader>
    <transition v-else appear name="fade" mode="out-in">
      <section ref="container">
        <article class="post box">
          <header class="post--header">
            <figure v-if="fetchedPost.thumbnail_large" class="post--thumbnail" :style="{ 'background-image': 'url(' + fetchedPost.thumbnail_large + ')' }"></figure>
            <figure v-else class="post--thumbnail" :style="{ 'background-image': 'url(' + this.placeholder + ')' }"></figure>
            <h1 class="post--title like-h2">{{ fetchedPost.title.rendered }}</h1>
            <!--<p class="post-meta">Posted {{ this.fromNow(fetchedPost.date) }}</p>-->
            <div class="post--category">
              <span v-for="category in fetchedPost.cats"><tag>{{ category.name }}</tag></span>
            </div>
          </header>

          <section class="post--content wp-content-rendered panel" v-html="fetchedPost.content.rendered">
          </section>

          <footer class="post--footer panel">

          </footer>
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
import placeholder from '../assets/img/layout/placeholder-900x600.png'

Vue.use(VueResource)

export default {
  data () {
    return {
      loading: true,
      post: {},
      placeholder: placeholder
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
    /*
    Fetch a blog post based on it's slug.
    */
    fetchPost () {
      this.loading = true

      axios.get(window.config.baseUrl + '/wp-json/wp/v2/posts?slug=' + this.$route.params.slug)
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
  /*
  Watch for changes on the current route, this is necessary
  in order to update the current page should the slug change.
  */
  watch: {
    '$route' () {
      this.fetchPost()
    }
  }
}
</script>

<style lang="scss">
//////////////////////////////////////////////////////////
//  POST ITEM
//////////////////////////////////////////////////////////
$post--box-shadow: $global-box-shadow;

.post {
  &--header {
    position: relative;
    box-shadow: $post--box-shadow;
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

  &--category {
    position: absolute;
    top: rhythm(1);
    right: rhythm(1);
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
    padding-bottom: rhythm(1);

    img {
      border-radius: $global-radius;
      box-shadow: $global-box-shadow;
    }

    &::after {
      content: '';
      display: table;
      clear: both;
    }
  }
}
</style>
