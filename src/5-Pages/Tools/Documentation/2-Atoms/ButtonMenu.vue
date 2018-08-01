<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-bars"></i>Button Menu</h3>
      <div class="wireframe">
        <button-menu :active="props.active.demo.value"></button-menu>
      </div>
      <code-highlight lang="html" title="Markup">
        {{ code }}
      </code-highlight>
      <tabs>
        <tab name="Props" icon="fas fa-cogs">
          <h4><i class="icon fas fa-cogs"></i>Props</h4>
          <vk-docs-props
            :props="props"
            @change="props[arguments[0]].demo.value = arguments[1]">
          </vk-docs-props>
        </tab>
     </tabs>
    </div>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'
import ButtonMenu from '../../../../2-Atoms/Buttons/ButtonMenu/ButtonMenu'

export default {
  data () {
    return {
      props: mergeProps(ButtonMenu.props, props),
      example
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  active: {
    description: 'The initial state of the <code>active</code> local state.',
    demo: {
      type: 'Boolean',
      value: false
    }
  }
}

// -- EXAMPLE
const example =
`<button-menu
  {attrs}>
</button-menu>`
</script>
