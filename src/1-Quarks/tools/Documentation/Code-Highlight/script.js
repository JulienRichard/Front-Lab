import hljs from '../../../../../node_modules/highlight.js'

export default {
  props: {
    type: '',
    title: ''
  },
  directives: {
    highlightjs: {
      bind: function (el, binding) {
        let targets = el.querySelectorAll('code')
        targets.forEach((target) => {
          if (binding.value) {
            target.innerHTML = binding.value
          }
          hljs.configure({
            tabReplace: '  ',
            useBr: true
          })
          hljs.highlightBlock(target)
        })
      }
    }
  }
}
