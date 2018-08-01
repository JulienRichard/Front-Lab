/* ====================================================
  TAG
====================================================== */
import ButtonClose from '../Buttons/ButtonClose/ButtonClose'

export default {
  props: {
    color: {
      type: String,
      default: '',
      note: 'Color Style'
    },
    icon: {
      type: String,
      default: '',
      note: 'Add a custom icon'
    },
    rounded: {
      type: Boolean,
      default: false,
      note: 'Border radius style'
    },
    closable: {
      type: Boolean,
      default: false,
      note: 'Add a button close'
    }
  },
  components: {
    ButtonClose
  },
  data () {
    return {
      show: true
    }
  },
  methods: {
    handleClose (event) {
      this.show = false
    }
  }
}
