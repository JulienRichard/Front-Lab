export default {
  name: 'Notification',
  props: {
    'content': {
      type: Object,
      default: {
        title: '',
        text: ''
      },
      note: 'Content of Notification'
    },
    'options': {
      type: Object,
      default: function () { return {} },
      note: 'Options'
    },
    'show': {
      type: Boolean,
      default: false
    },
    'type': {
      type: String,
      default: '',
      note: 'Type of Notification'
    },
    'size': {
      type: String,
      default: '',
      note: 'Size of Notification'
    },
    'position': {
      type: String,
      default: 'bottom',
      note: 'Position of Notification'
    }
  },
  data () {
    return {
      timers: [],
      barControl: '',
      notifOptions: this.options,
      notifShow: this.show
    }
  },
  computed: {
    setTime () {
      return {
        transition: `all ${(this.notifOptions.showTime / 1000) || 3}s linear`
      }
    }
  },
  methods: {
    countdown () {
      if (this.notifOptions.autoClose) {
        if (this.notifOptions.countdownBar) {
          setTimeout(() => {
            this.barControl = 'count-leave'
          }, 10)
        }
        const t = setTimeout(() => {
          this.close()
        }, this.notifOptions.showTime || 3000)
        this.timers.push(t)
      }
    },
    close () {
      this.$emit('close') // should to emit to change parent components status
      this.notifOptions = {}
    }
  },
  watch: {
    options () {
      this.notifOptions = this.options
      this.barControl = ''
      this.timers.forEach((timer) => {
        window.clearTimeout(timer)
      })
      this.timers = []
      this.countdown()
    },
    show (val) {
      this.notifShow = val
    }
  }
}
