/* ====================================================
  BADGE
====================================================== */
export default {
  name: 'Badge',
  token: `<badge color="{color}" size="{size}" icon="{icon-name}" [rounded]>...</badge>`,
  description: 'The badge is a basic component that displays a number or icon.',
  props: {
    color: {
      type: String,
      default: '',
      values: ['primary', 'secondary', 'highlight'],
      note: 'Color style'
    },
    size: {
      type: String,
      default: '',
      note: 'Badge Size'
    },
    icon: {
      type: String,
      default: '',
      note: 'Add a custom icon'
    },
    rounded: {
      type: Boolean,
      default: false,
      note: 'Rounded style'
    }
  }
}
