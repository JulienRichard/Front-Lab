<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-tag"></i>Tag</h3>
      <div class="wireframe">
        <tag
          :icon="props.icon.demo.value"
          :color="props.color.demo.value"
          :rounded="props.rounded.demo.value"
          :closable="props.closable.demo.value">
          Tag Content
        </tag>
      </div>
      <br><br>
      <code-highlight title="Markup">{{ code }}</code-highlight>
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
import Tag from '../../../../2-Atoms/Tag/Tag'

export default {
  data () {
    return {
      props: mergeProps(Tag.props, props),
      example,
      slots
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  icon: {
    description: 'Icon name',
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'fa-flag', value: 'fas fa-flag' },
        { text: 'fa-cog', value: 'fas fa-cog' },
        { text: 'fa-link', value: 'fas fa-link' },
        { text: 'fa-phone', value: 'fas fa-phone' },
        { text: 'fa-map-marker', value: 'fas fa-map-marker' },
        { text: 'fa-tags', value: 'fas fa-tags' },
        { text: 'fa-star', value: 'fas fa-star' },
        { text: 'fa-user', value: 'fas fa-user' },

        { text: 'di-flag', value: 'di-flag' },
        { text: 'di-gear', value: 'di-gear' },
        { text: 'di-link', value: 'di-link' },
        { text: 'di-clock', value: 'di-clock' },
        { text: 'di-phone', value: 'di-phone' },
        { text: 'di-location', value: 'di-location' },
        { text: 'di-tags', value: 'di-tags' },
        { text: 'di-star', value: 'di-star' },
        { text: 'di-user', value: 'di-user' },
        { text: 'di-pin', value: 'di-pin' }
      ]
    }
  },
  rounded: {
    description: 'Rounded Style',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  closable: {
    description: 'Closable',
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
  }
}

// -- SLOTS
const slots = {
  default: {
    description: 'The Tag inner text.'
  }
}

// -- EXAMPLE
const example =
`<tag
  {attrs}>
  ...
</tag>`
</script>
