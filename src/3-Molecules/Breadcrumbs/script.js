export default {
  name: 'Breadcrumbs',
  props: {
    root: {
      type: String,
      default: 'Front-Lab',
      note: ''
    }
  },
  computed: {
    crumbs: function () {
      var path = '',
        title = (this.root || 'Home')
      var cs = [{name: title, path: '/'}]; if (!this.$route) return []
      var r = (this.$route.path).split('/')
      var m = (this.$route.matched[0].meta.crumbs || '').split('/')

      for (var i = 1; i < r.length; i++) {
        var name = (m[i] || r[i]); if (r[i] === '') continue
        path += '/' + name
        cs.push({ name: name, path: path })
      }
      return cs
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
