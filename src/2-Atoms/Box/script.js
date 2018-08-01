import ButtonClose from '../Buttons/ButtonClose/ButtonClose'

export default {
  name: 'box',
  token: `<box size="{size}" color="{color}">...</box>`,
  description: 'Basic container.',
  props: {
    show: {
      type: Boolean,
      default: true,
      note: 'Show/Hide'
    },
    color: {
      type: String,
      default: '',
      note: 'Custom style'
    },
    size: {
      type: String,
      default: '',
      note: 'Component Size'
    },
    closable: {
      type: Boolean,
      default: false,
      note: 'Closable Box'
    }
  },
  components: {
    ButtonClose
  }
}
