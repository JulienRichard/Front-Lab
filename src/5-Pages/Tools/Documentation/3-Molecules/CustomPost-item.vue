<template>
  <div>
    <div class="wrapper">
      <h3><icon name="di-photo-group"></icon>CustomPost Item</h3>
      <div class="wireframe">
        <custompost-item v-if="post" :post="post"></custompost-item>
      </div>
      <code-highlight title="Markup">
        &lt;custompost-item :post="fetchedPost"&gt;&lt;/custompost-item&gt;
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
      axios.get(window.config.baseUrl + '/wp-json/wp/v2/customposttype/7?_embed')
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
