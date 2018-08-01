<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-arrows-alt-h"></i>Post Navigation</h3>
    <div class="box panel">
      <p v-if="post" class="lead text-center">{{ post.title.rendered }}</p>
      <img v-if="post" class="thumbnail" :src="post.featured_image_src" alt="">
    </div>
    <div class="wireframe">
      <post-navigation v-if="post" :post="post"></post-navigation>
    </div>
    <post-navigation fixed v-if="post" :post="post"></post-navigation>
    <code-highlight title="Markup">
      &lt;post-navigation [fixed] :post="currentPost"&gt;&lt;/post-navigation&gt;
    </code-highlight>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    this.getPosts()
  },
  methods: {
    getPosts () {
      axios.get(window.config.baseUrl + '/wp-json/wp/v2/posts/92?_embed')
      .then((response) => {
        this.post = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  watch: {
    '$route' () {
      this.getPosts()
    }
  }
}
</script>
