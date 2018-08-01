<template>
  <section class="post-list">

    <loader fixed v-if="loading"></loader>

    <!--
    <div class="row align-center small-up-1 medium-up-2 large-up-3">
      <transition appear name="fade-in-up" mode="out-in" v-for="post in posts" :key="post.id">
        <post-item :post="post" class="column"></post-item>
      </transition>
    </div>
  -->

    <ul class="row align-center small-up-1 medium-up-2 large-up-3">
      <li v-for="post in posts" :key="post.id" class="column">
        <transition appear name="fade-in-up" mode="out-in">
          <post-item v-if="!loading" :post="post"></post-item>
        </transition>
      </li>
    </ul>

    <!--
    <transition-group name="fade-in-up" mode="out-in" tag="div" class="row align-center small-up-1 medium-up-2 large-up-3">
      <post-item v-if="!loading" v-for="post in posts" :key="post.id" :post="post" class="column"></post-item>
    </transition-group>
  -->


    <pagination v-if="this.pagination.totalPages > 2"
      :pagination="pagination"
      @prev="--postsData.page; getPosts();"
      @next="postsData.page++; getPosts();">
    </pagination>
  </section>
</template>

<script>
import axios from 'axios'
import PostItem from '../Post-Item/PostItem'

export default {
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      loading: true,
      postsUrl: window.config.baseUrl + '/wp-json/wp/v2/posts',
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
      this.loading = true

      axios.get(this.postsUrl, {params: this.postsData})
      .then((response) => {
        setTimeout(function () {
          this.posts = response.data
        }.bind(this), 1000)
        this.configPagination(response.headers)

        setTimeout(function () {
          this.loading = false
        }.bind(this), 1000)
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
  },
  components: {
    PostItem
  }
}
</script>

<style lang="scss">
$post-per-page: 6;

// Cascading transition-delay
@for $i from 1 to $post-per-page + 1 {

  .column:nth-child(#{$i}) .post-item {
    transition-delay: $i * 0.25s;
  }

  //.column:nth-child(#{$i}) {
  //  transition-delay: $i * 0.25s;
  //}

  // .post-item:nth-child(#{$i}) {
  //   transition-delay: $i * .25s;
  // }
}
</style>
