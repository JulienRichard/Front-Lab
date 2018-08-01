<template>
  <div>
    <paginate
      ref="paginator"
      name="postList"
      :list="posts"
      :per="this.perPage"
    >
      <transition-group name="post-list-item" tag="ul" class="row align-center small-up-1 medium-up-2 large-up-3">
        <li v-for="post in paginated('postList')" :key="post.id" class="column">
          <post-item :post="post"></post-item>
        </li>
      </transition-group>
    </paginate>

    <span v-if="$refs.paginator">
      Viewing {{$refs.paginator.pageItemsCount}} results
    </span>

    <paginate-links for="postList"
      :show-step-links="true"
      :limit="2">
    </paginate-links>
  </div>
</template>

<script type="text/javascript">
import PostItem from '../Post-Item/PostItem'

export default {
  data () {
    return {
      posts: [],
      paginate: ['postList']
    }
  },
  props: {
    perPage: {
      type: Number,
      default: 6,
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
      return this.$http.get('/wp-json/wp/v2/posts?per_page=100').then(response => {
        this.posts = response.data
      })
    }
  },
  components: {
    PostItem
  }
}
</script>

<style lang="scss">

</style>
