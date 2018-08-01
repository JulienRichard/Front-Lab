<template>
<div>
  <router-link :to="{ name: getRoute, params: { slug: result.slug } }">{{ result.title.rendered }} <span>{{ this.fromNow(result.date) }}</span></router-link>
</div>
</template>

<script>
import TimeHelper from '../mixins/TimeHelper'

export default {
  props: ['result', 'type'],
  mixins: [TimeHelper],
  computed: {
    /*
    Get the route to use, this is required for redirecting to
    a specific search result page based on the type of result.
    */
    getRoute () {
      return this.type === 'Posts' ? 'post' : 'page'
    }
  }
}
</script>
