export default {
  name: 'button-icon',
  props: {
    value: {},
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    hollow: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
