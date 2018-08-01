<script type="text/javascript">
import Translatable from './mixins'

export default {
  name: 'v-parallax',
  mixins: [Translatable],

  data () {
    return {
      isBooted: false
    }
  },

  props: {
    alt: String,
    height: {
      type: [String, Number],
      default: 405 /* rhythm(15) */
    },
    src: String
  },

  computed: {
    styles () {
      return {
        display: 'block',
        opacity: this.isBooted ? 1 : 0,
        transform: `translate(-50%, ${this.parallax}px)`
      }
    }
  },

  watch: {
    parallax () {
      this.isBooted = true
    }
  },

  mounted () {
    this.init()
  },

  methods: {
    init () {
      if (!this.$refs.img) return

      if (this.$refs.img.complete) {
        this.translate()
        this.listeners()
      } else {
        this.$refs.img.addEventListener('load', () => {
          this.translate()
          this.listeners()
        }, false)
      }
    },
    objHeight () {
      return this.$refs.img.naturalHeight
    },
    elOffsetTop () {
      return this.$el.offsetTop
    }
  },

  render (h) {
    const imgData = {
      staticClass: 'v-parallax__image',
      style: this.styles,
      attrs: {
        src: this.src
      },
      ref: 'img'
    }

    if (this.alt) imgData.attrs.alt = this.alt

    const container = h('div', {
      staticClass: 'v-parallax__image-container'
    }, [
      h('img', imgData)
    ])

    const content = h('div', {
      staticClass: 'v-parallax__content'
    }, this.$slots.default)

    return h('div', {
      staticClass: 'v-parallax',
      style: {
        height: `${this.normalizedHeight}px`
      },
      on: this.$listeners
    }, [container, content])
  }
}
</script>

<style lang="scss">
.v-parallax {
  position: relative;
  overflow: hidden;
  z-index: 0;

  &__image-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    contain: strict;
  }

  &__image {
    position: absolute;
    bottom: 0;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    display: none;
    transform: translate(-50%, 0);
    will-change: transform;
    transition: .3s opacity ease;
    z-index: 1;
  }

  &__content {
    color: #FFFFFF;
    height: 100%;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > * {
      margin-bottom: 0;
    }

    > .wrapper {
      position: absolute;
      @include center(xy);

      > * {
        margin-bottom: 0;
      }
    }
  }
}
</style>
