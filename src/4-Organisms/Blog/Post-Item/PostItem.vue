<style lang="scss">
//////////////////////////////////////////////////////////
//  POST ITEM
//////////////////////////////////////////////////////////
$post-item--border-radius: $global-radius;
$post-item--box-shadow: $global-box-shadow;

// Header
$post-item--header-background: rgba($white, .1);
$post-item--header-txt-color: $body-font-color;

// Footer
$post-item--footer-background: rgba($white, .1);
$post-item--footer-txt-color: $body-font-color;

// Sections
$post-item--section-background: rgba($white, .1);
$post-item--section-txt-color: $body-font-color;

$post-item--section-alt-background: rgba($white, .15);
$post-item--section-alt-txt-color: $white;

$post-item--section-divider-color: $light-gray;
$post-item--section-divider-height: 1px;

.post-item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: $post-item--border-radius;
  box-shadow: $post-item--box-shadow;
  transition: $global-transition;
  margin-top: -2px;

  // THUMBNAIL
  &--thumbnail {
    position: relative;
    display: block;
    background-size: cover;
    background-position: center center;
    min-height: rhythm(7);
    max-height: rhythm(7);
    overflow: hidden;
    transition: all .5s;

    // Hack for Background Cover hover scale
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      transition: inherit;
    }
  }

  // CATEGORY
  &--category {
    position: absolute;
    top: - rhythm(.5);
    right: rhythm(.5);
  }

  &--meta {
    small,
    i.icon {
      vertical-align: middle;
    }
  }

  // HEADER
  &--header {
    position: relative;
    flex: 0 1 auto;
    background: $post-item--header-background;
    color: $post-item--header-txt-color;
    padding: rhythm(.5) rhythm(1);

    &::before {
      content: '';
      display: block;
      height: $post-item--section-divider-height;
      position: absolute;
      left: rhythm(1);
      right: rhythm(1);
      bottom: 0;
      background-color: $post-item--section-divider-color;
    }
  }

  // FOOTER
  &--footer {
    padding: rhythm(.5) rhythm(1);
    flex: 0 1 auto;
    background: $post-item--footer-background;
    color: $post-item--footer-txt-color;

    &::before {
      top: 0;
    }
  }

  // SECTION
  &--section {
    padding: rhythm(.5) rhythm(1);
    flex: 1 0 auto;
    background: $post-item--section-background;
    color: $post-item--section-txt-color;
  }

  // SECTION ALT
  &--section-alt {
    padding: rhythm(.5) rhythm(1);
    flex: 0 1 auto;
    background: $post-item--section-alt-background;
    color: $post-item--section-alt-txt-color;
  }

  &--header,
  &--footer,
  &--section,
  &--section-alt {
    > :last-child {
      margin-bottom: 0;
    }
  }

  // -- STATES
  &:hover {
    .post-item--thumbnail::before {
      transform: scale(1.1);
    }
  }

  // -- SIZES
  &.is-small {
    .post-item--footer,
    .post-item--header,
    .post-item--section,
    .post-item--section-alt {
      padding: rhythm(.5);
    }
  }

  &.is-large {
    .post-item--section {
      padding: rhythm(1.5);
    }

    .post-item--footer,
    .post-item--header {
      padding: rhythm(1) rhythm(1.5);
    }

    .post-item--section-alt {
      padding: rhythm(1) rhythm(1.5);
    }
  }
}
</style>

<template>
  <article class="post-item">

    <!-- THUMBNAIL -->
    <!--
    <figure class="post-item--thumbnail">
      <img :src="post.thumbnail_medium" alt="">
    </figure>
    -->

    <router-link :to="{ name: 'Post', params: { slug: post.slug } }">
      <figure v-if="post.thumbnail_medium" class="post-item--thumbnail" :style="{ 'background-image': 'url(' + post.thumbnail_medium + ')' }"></figure>
      <figure v-else class="post-item--thumbnail" :style="{ 'background-image': 'url(' + this.placeholder + ')' }"></figure>
    </router-link>

    <!-- HEADER -->
    <header class="post-item--header">
      <div class="post-item--category">
        <span v-for="category in post.cats"><tag>{{ category.name }}</tag></span>
      </div>
      <router-link :to="{ name: 'Post', params: { slug: post.slug } }">
        <h3 class="like-h5">{{ post.title.rendered }}</h3>
      </router-link>
    </header>

    <!-- EXCERPT -->
    <section class="post-item--section">
      <p class="post-item--excerpt" v-html="post.excerptFormat"></p>
    </section>

    <!-- METAS -->
    <section class="post-item--section-alt post-item--metas">
      <div class="post-item--meta post-date">
        <i class="icon di-clock is-align-left"></i>
        <small>Posted {{ this.fromNow(post.date) }} ({{ post.dateFormat }})</small>
      </div>
      <div class="post-item--meta post-author">
        <i class="icon di-user is-align-left"></i>
        <small>by {{ post.author }}</small>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="post-item--footer">
      <router-link :to="{ name: 'Post', params: { slug: post.slug } }">
        <i class="icon fas fa-angle-right is-align-left"></i>View more...
      </router-link>
    </footer>
  </article>

</template>

<script>
import TimeHelper from '../../../1-Quarks/_js/mixins/TimeHelper'
import placeholder from '../../../assets/img/layout/placeholder-600x450.png'

export default {
  data () {
    return {
      placeholder: placeholder
    }
  },
  props: ['post'],
  mixins: [TimeHelper]
}
</script>
