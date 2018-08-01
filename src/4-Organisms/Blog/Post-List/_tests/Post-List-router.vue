<template>
  <div class="post-list">
    <!--
    <loader v-if="loading"></loader>
    <div v-else>
      <div v-if="fetchedPosts && fetchedPosts.length > 0">
        <div class="row align-center small-up-1 medium-up-2 large-up-3">
          <transition appear name="show-content" mode="in-out" v-for="post in fetchedPosts">
            <post-item :post="post" class="column"></post-item>
          </transition>
        </div>
      </div>
    </div>
    -->
    <loading v-if="loading"></loading>
    <div v-else>
      <div v-if="fetchedPosts && fetchedPosts.length > 0">
        <div class="row align-center small-up-1 medium-up-2 large-up-3">
          <transition appear name="fade-in-up" mode="in-out" v-for="post in fetchedPosts" :key="post.id">
            <post-item :post="post" class="column"></post-item>
          </transition>
        </div>
      </div>
    </div>
    <pagination-numbers v-if="this.pagination.totalPage > 1" :initialPage="this.pagination.initialPage" :pageCount="this.pagination.totalPage" :click-handler="pageChanged"></pagination-numbers>
  </div>
</template>

<script type="text/javascript">
import PostItem from '../Post-Item/PostItem'

export default {
  data () {
    return {
      loading: true,
      posts: [],
      pagination: {
        currentPage: 1,
        initialPage: 1
      }
    }
  },
  props: {
    perPage: {
      type: Number,
      default: 3,
      note: 'Number of posts per Page'
    }
  },
  computed: {
    fetchedPosts () {
      return this.posts
    }
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts () {
      this.loading = true

      return this.$http.get('/wp-json/wp/v2/posts?per_page=' + this.perPage + '&page=' + this.pagination.currentPage).then(response => {
        this.posts = response.data
        this.pagination.totalPage = response.headers.get('X-WP-TotalPages')
        this.loading = false
        // setTimeout(function () {
        //   this.loading = false
        // }.bind(this), 500)
      })
    },
    pageChanged (pageNum) {
      this.pagination.currentPage = pageNum
      this.$router.push('/Blog/' + pageNum)
      this.fetchPosts()
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
  .post-item:nth-child(#{$i}) {
    transition-delay: $i * 0.25s;
  }
}
</style>
