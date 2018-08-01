export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    open () {
      this.show = true
      document.body.classList.add('no-scroll')
    },
    close () {
      this.show = false
      document.body.classList.remove('no-scroll')
    }
  },
  created () {
    window.addEventListener('keydown', (e) => {
      if (this.show === true && e.keyCode === 27) {
        this.$emit('close')
        console.log('Esc key pressed.')
      }
    })
  },
  mounted () {
    this.open()
  },
  destroyed () {
    this.close()
  }
}
