<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-mouse-pointer"></i>Button Default</h3>
      <div class="wireframe">
        <button-default
          :type="props.type.demo.value"
          :value="props.value.demo.value"
          :disabled="props.disabled.demo.value"
          :hollow="props.hollow.demo.value"
          :active="props.active.demo.value"
          :color="props.color.demo.value"
          :size="props.size.demo.value"
          :expanded="props.expanded.demo.value"
          :rounded="props.rounded.demo.value"
          :icon-left="props.iconLeft.demo.value"
          :icon-right="props.iconRight.demo.value"
          @click.native="props.active.demo.value = !props.active.demo.value">
          Button
        </button-default>
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
        <tab name="Slots" icon="fas fa-edit">
          <h4><i class="icon fas fa-edit"></i>Slots</h4>
          <vk-docs-slots :slots="slots"></vk-docs-slots>
        </tab>
     </tabs>
    </div>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'
import ButtonDefault from '../../../../2-Atoms/Buttons/ButtonDefault/ButtonDefault'

export default {
  data () {
    return {
      props: mergeProps(ButtonDefault.props, props),
      example,
      slots
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  value: {
    description: 'The value of the button usually used in combination with others components.',
    demo: {
      type: 'Overview'
    }
  },
  type: {
    description: 'The HTML button type.',
    demo: {
      type: 'Select',
      options: [
        { text: 'button', value: 'button' },
        { text: 'submit', value: 'submit' },
        { text: 'reset', value: 'reset' }
      ],
      value: 'button'
    }
  },
  active: {
    description: 'The initial state of the <code>active</code> local state.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  disabled: {
    description: 'Whether to present the button as disabled.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  expanded: {
    description: 'Expanded Size.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  hollow: {
    description: 'Hollow Style.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  rounded: {
    description: 'Rounded Style.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  color: {
    description: `The color modifier accepting as values <code>primary</code>, <code>secondary</code>,
      <code>highlight</code>, <code>success</code>, <code>info</code>, <code>warning</code> or <code>error</code>.`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'primary', value: 'primary' },
        { text: 'secondary', value: 'secondary' },
        { text: 'highlight', value: 'highlight' },
        { text: 'light', value: 'light' },
        { text: 'dark', value: 'dark' },
        { text: 'success', value: 'success' },
        { text: 'info', value: 'info' },
        { text: 'warning', value: 'warning' },
        { text: 'error', value: 'error' }
      ]
    }
  },
  size: {
    description: `The size modifier accepting as values <code>tiny</code>, <code>small</code> or <code>large</code>`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'tiny', value: 'tiny' },
        { text: 'small', value: 'small' },
        { text: 'large', value: 'large' }
      ]
    }
  },
  iconLeft: {
    description: `Icon Left position`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'flag', value: 'fas fa-flag' },
        { text: 'info', value: 'fas fa-info' },
        { text: 'warning', value: 'fas fa-exclamation-triangle' },
        { text: 'error', value: 'fas fa-times' },
        { text: 'success', value: 'fas fa-check' }
      ]
    }
  },
  iconRight: {
    description: `Icon Right position`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'flag', value: 'fa-flag' },
        { text: 'info', value: 'fa-info' },
        { text: 'warning', value: 'fa-warning' },
        { text: 'error', value: 'fa-times' },
        { text: 'success', value: 'fa-check' }
      ]
    }
  }
}

// -- SLOTS
const slots = {
  default: {
    description: 'The button inner text.'
  }
}

// -- EXAMPLE
const example =
`<button-default
  {attrs}>
  Button
</button-default>`
</script>
