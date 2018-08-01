<template>
  <nav class="post-nav" :class="fixed ? 'is-fixed' : ''">
    <router-link v-if="post.prev_post" tag="a" class="post-nav--btn prev" :to="{ name: 'Post', params: { slug: post.prev_post.post_name } }">
      <span class="post-nav--icon">
        <i class="icon fas fa-chevron-left is-3x"></i>
      </span>
      <div class="post-nav--content show-for-medium">
        <span>{{ post.prev_post.post_title }}</span>
        <img v-if="post.prev_post_thumbnail" :src="post.prev_post_thumbnail" alt="">
        <img v-else :src="this.placeholder" alt="">
      </div>
    </router-link>

    <router-link v-if="post.next_post" tag="a" class="post-nav--btn next" :to="{ name: 'Post', params: { slug: post.next_post.post_name } }">
      <span class="post-nav--icon">
        <i class="icon fas fa-chevron-right is-3x"></i>
      </span>
      <div class="post-nav--content show-for-medium">
        <img v-if="post.next_post_thumbnail" :src="post.next_post_thumbnail" alt="">
        <img v-else :src="this.placeholder" alt="">
        <span>{{ post.next_post.post_title }}</span>
      </div>
    </router-link>
  </nav>
</template>

<script>
import placeholder from '../../assets/img/layout/placeholder-200x200.png'

export default {
  props: {
    post: {},
    fixed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      placeholder: placeholder
    }
  }
}
</script>

<style lang="scss">
@import 'styles.scss';
</style>
