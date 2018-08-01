<template>
  <section class="post-list">

    <loader v-if="loading"></loader>

    <ul class="post-list--list row align-center small-up-1 medium-up-2 large-up-3">
      <li v-for="post in posts" :key="post.id" class="column">
        <transition appear name="fade-in-up" mode="out-in">
          <post-item v-if="!loading" :post="post"></post-item>
        </transition>
      </li>
    </ul>

    <footer class="post-list--footer">
      <pagination v-if="this.pagination.totalPages > 2"
        :pagination="pagination"
        @prev="--postsData.page; getPosts();"
        @next="postsData.page++; getPosts();">
      </pagination>
    </footer>

  </section>
</template>

<script>
import axios from 'axios'

export default {
  mounted () {
    this.getPosts()
  },
  data () {
    return {
      loading: true,
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
      this.loading = true

      axios.get(this.postsUrl, {params: this.postsData})
      .then((response) => {
        // Delay = Posts per page * Cascading Transition-delay
        setTimeout(function () {
          this.posts = response.data
        }.bind(this), (this.postsData.per_page * 100) * 2)

        this.configPagination(response.headers)

        // Delay = Posts per page * Transition-delay
        setTimeout(function () {
          this.loading = false
        }.bind(this), (this.postsData.per_page * 100) * 2)
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

<style lang="scss">
$post-per-page: 6;

// Cascading transition-delay
@for $i from 1 to $post-per-page + 1 {
  .column:nth-child(#{$i}) .post-item {
    transition-delay: $i * .2s;
  }
}

// List
.post-list--list {
  min-height: 400px;
}

// List Header & Footer
.post-list--header,
.post-list--footer {
  position: relative;
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    background-color: rgba($white, .25);
    height: 1px;
  }
}

// List Header
.post-list--header {
  margin-bottom: rhythm(1);
  padding-bottom: rhythm(1);

  &::before {
    bottom: 0;
  }
}

// List Footer
.post-list--footer {
  padding-top: rhythm(1);

  &::before {
    top: 0;
  }
}
</style>
