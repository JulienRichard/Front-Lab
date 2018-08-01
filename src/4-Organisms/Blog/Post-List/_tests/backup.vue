<template>
  <section class="post-list">

    <header class="post-list--header">

    </header>

    <div class="post-list--list">
      <loading v-if="loader"></loading>
      <div v-else>
        <ul class="row align-center small-up-2 medium-up-3">
          <transition appear :name="transitionName" mode="out-in" v-for="(post, index) in pagedItems" :key="post.id">
            <li class="column">
              <post-item :post="post"></post-item>
            </li>
          </transition>
        </ul>
      </div>
    </div>


    <footer class="post-list--navigation">
      <button class="button prev-btn is-hollow is-rounded is-small is-lighten" @click="handlePrevPage" v-if="page > 1">
        <i class="icon fa-chevron-left is-align-left"></i>Prev
      </button>
      <div class="post-list--infos">
        <tag rounded>{{ this.page }} / {{ this.totalPage }}</tag>
      </div>
      <button class="button next-btn is-hollow is-rounded is-small is-lighten" @click="handleNextPage" v-if="page < totalPage">
        Next<i class="icon fa-chevron-right is-align-right"></i>
      </button>
    </footer>

  </section>
</template>

<script type="text/javascript">
import PostItem from '../Post-Item/PostItem'

export default {
  data () {
    return {
      items: [],
      page: 1,
      perPage: this.perPage,
      transitionName: 'next',
      loading: true
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
      return this.items
    },
    pagedItems () {
      const begin = (this.page - 1) * this.perPage
      const end = begin + this.perPage
      return this.items.slice(begin, end)
    },
    totalPage () {
      return Math.ceil(this.items.length / this.perPage)
    }
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    fetchPosts () {
      this.loading = true

      return this.$http.get('/wp-json/wp/v2/posts?per_page=100&page=' + this.page).then(response => {
        this.items = response.data
        this.totalPosts = response.headers.get('X-WP-TotalPages')

        setTimeout(function () {
          this.loading = false
        }.bind(this), 1500)
      })
    },

    handleNextPage () {
      this.loading = true
      this.page = this.page + 1
      setTimeout(function () {
        this.loading = false
      }.bind(this), 1500)
    },

    handlePrevPage () {
      this.loading = true
      this.page = this.page - 1
      setTimeout(function () {
        this.loading = false
      }.bind(this), 1500)
    }
  },
  watch: {
    page (newVal, oldVal) {
      this.transitionName = newVal < oldVal ? 'prev' : 'next'
    }
  },
  created () {

  },
  components: {
    PostItem
  }
}
</script>

<style lang="scss" scoped>
// -- POST-LIST NAVIGATION
.post-list--navigation {
  display: block;
  position: relative;
  text-align: center;
  margin-bottom: rhythm(1);
  clear: both;
  overflow: hidden;

  .prev-btn {
    float: left;
  }

  .next-btn {
    float: right;
  }
}

.post-list--infos {
  position: absolute;
  @include center(x);
}

// -- TRANSITION
// Cascading transition-delay
$post-per-page: 8;

.post-list {
  @for $i from 1 to $post-per-page + 1 {
    .column:nth-child(#{$i}) {
      transition-delay: $i * 0.25s;
    }
  }
}

// Transition
.next-enter-active, .next-leave-active,
.prev-enter-active, .prev-leave-active{
  transition: all .3s ease;
}

.next-enter {
  opacity: 0;
  transform: translateX(20px);
}
.next-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.prev-enter {
  opacity: 0;
  transform: translateX(-20px);
}
.prev-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
