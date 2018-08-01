<style lang="scss">
//////////////////////////////////////////////////////////
//  CUSTOM POST ITEM
//////////////////////////////////////////////////////////
$custompost-item--border-radius: $global-radius;
$custompost-item--box-shadow: $global-box-shadow;
$custompost-item--transition-duration: .35s;

@mixin _base-custompost-item {
  figure {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    figcaption {
      &::before,
      &::after {
        pointer-events: none;
      }

      &,
      > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      > a {
        z-index: 1000;
        font-size: 0;
        opacity: 0;
      }
    }
  }
}

.custompost-item {
  @include _base-custompost-item;
  border-radius: $global-radius;
  box-shadow: $global-box-shadow;
  overflow: hidden;
  margin-top: -1px;

  figure {
    height: rhythm(12);
    background-size: cover;
    background-position: center center;

    // Hack for Background Cover hover scale
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: inherit;
      transition: transform $custompost-item--transition-duration ease;
    }

    // Mask
    &::after {
      content: '';
      position: absolute;
      top: 0; right: 0;
      bottom: 0; left: 0;
      background: linear-gradient(135deg, $secondary-color 0%, $highlight-color 100%);
      opacity: 0;
      transition: opacity $custompost-item--transition-duration ease;
    }

    figcaption {
      padding: rhythm(1);
      z-index: 1;
      text-align: center;

      h3 {
        opacity: 0;
        // transform: translateY(-20px);
        transition: transform .3s ease, opacity .6s linear;
      }

      p {
        // position: absolute;
        // bottom: rhythm(1);
        // right: rhythm(1);
        // left: rhythm(1);
        // text-align: right;
        opacity: 0;
        transform: translateY(10px);
        transition: transform .25s ease, opacity .3s linear;
        transition-delay: .1s;
      }
    }

    &:hover {
      &::before {
        transform: scale(1.1);
      }
      &::after {
        opacity: .75;
      }

      figcaption {
        h3,
        p {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }

  // Content
  &--content {
    position: absolute;
    @include center(xy);
    width: 75%;
  }
}
</style>

<template>
  <article class="custompost-item">
    <figure :style="'background-image: url(' + post.featured_image_src + ')'" >
      <router-link :to="{ name: 'CustomPost', params: { slug: post.slug } }">
        <figcaption>
          <section class="custompost-item--content">
            <h3 class="like-h4">{{ post.title.rendered }}</h3>
            <p class="custompost-item--excerpt" v-html="post.excerpt.rendered"></p>
          </section>
        </figcaption>
      </router-link>
    </figure>
    <!--<span>{{post.date_gmt}}</span>-->
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
