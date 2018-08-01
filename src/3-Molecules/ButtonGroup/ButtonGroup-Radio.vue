<script>
import { each } from '../../1-Quarks/_js/helpers/utils'

export default {
  name: 'button-group-radio',
  props: {
    value: {},
    group: {
      type: Boolean,
      default: true
    }
  },
  render (h) {
    // override button props
    each(this.$slots.default, node => {
      if (node.componentOptions) {
        const button = node.componentOptions.propsData
        button.ariaType = 'checked'
        button.active = button.value === this.value
      }
    })
    return (
      <div class={{
        'button-group': this.group
      }}>{
        this.$slots.default
      }</div>
    )
  },
  mounted () {
    each(this.$children, button => {
      button.$el.addEventListener('click', () => this.$emit('change', button.value))
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "styles.scss";
</style>
