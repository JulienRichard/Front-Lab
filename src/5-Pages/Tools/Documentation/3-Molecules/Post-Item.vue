<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon di-document"></i>Post Item</h3>
      <div class="wireframe">
        <post-item v-if="post" :post="post"></post-item>
      </div>
      <code-highlight title="Markup">
        &lt;post-item :post="fetchedPost"&gt;&lt;/post-item&gt;
      </code-highlight>
    </div>
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
    this.getPost()
  },
  methods: {
    getPost () {
      axios.get(window.config.baseUrl + '/wp-json/wp/v2/posts/92?_embed')
      .then((response) => {
        this.post = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
