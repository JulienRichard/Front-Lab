/*
This component listens for specific event emissions
in order to show & hide the global loading dialog.
*/
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false
    },
    static: {
      type: Boolean,
      default: false
    }
  }
}
