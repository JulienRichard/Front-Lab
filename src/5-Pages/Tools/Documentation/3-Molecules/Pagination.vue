<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-arrows-alt-h"></i>Pagination</h3>
      <ul class="row align-center small-up-1 medium-up-2 large-up-3">
        <li v-for="post in posts" :key="post.id" class="column">
          <div class="box"><p class="lead text-center">{{ post.title.rendered }}</p></div>
        </li>
      </ul>
      <div class="wireframe">
        <pagination v-if="this.pagination.totalPages > 2"
          :pagination="pagination"
          @prev="--postsData.page; getPosts();"
          @next="postsData.page++; getPosts();">
        </pagination>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;pagination v-if=&quot;this.pagination.totalPages > 2&quot; :pagination=&quot;pagination&quot; @prev=&quot;--postsData.page; getPosts();&quot; @next=&quot;postsData.page++; getPosts();&quot;&gt;
      &lt;/pagination&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      postsUrl: window.config.baseUrl + '/wp-json/wp/v2/posts?_embed',
      posts: [],
      postsData: {
        per_page: 3,
        page: 1
      },
      pagination: {
        prevPage: '',
        nextPage: '',
        totalPages: '',
        from: '',
        to: '',
        total: ''
      }
    }
  },
  methods: {
    getPosts () {
      axios.get(this.postsUrl, {params: this.postsData})
      .then((response) => {
        this.posts = response.data
        this.configPagination(response.headers)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    configPagination (headers) {
      this.pagination.total = +headers['x-wp-total']
      this.pagination.totalPages = +headers['x-wp-totalpages']
      this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' '
      this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page
      this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : ''
      this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : ''
    }
  }
}
</script>
