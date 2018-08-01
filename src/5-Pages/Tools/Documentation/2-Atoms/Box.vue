<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-square"></i>Box</h3>
      <box>
        <h1>H1 Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
      </box>
      <div class="row">
        <div class="column">
          <box>
            <h2>H2 Title</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
          </box>
        </div>
        <div class="column">
          <box>
            <h3>H3 Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
          </box>
        </div>
        <div class="column">
          <box>
            <h4>H4 Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
          </box>
        </div>
      </div>

      <box
        :size="props.size.demo.value"
        :color="props.color.demo.value"
        :closable="props.closable.demo.value">
        <h2>H2 Title</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur ex delectus in, perferendis accusantium nemo labore et excepturi, fuga laborum modi id, facilis!</p>
        <h3>H3 Title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo reprehenderit ipsam a ducimus repellat, laudantium amet, quam, excepturi in nobis rem quisquam repellendus corporis. Animi facere repellendus laudantium iusto voluptatem.</p>
        <h4>H4 Title</h4>
        <h5>H5 Title</h5>
        <h6>H6 Title</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </box>
      <code-highlight title="Markup">{{ code }}</code-highlight>
      <tabs>
        <tab name="Props">
          <h4><icon name="fa-cog"></icon>Props</h4>
          <vk-docs-props
            :props="props"
            @change="props[arguments[0]].demo.value = arguments[1]">
          </vk-docs-props>
        </tab>
        <tab name="Slots">
          <h4><icon name="fa-cog"></icon>Slots</h4>
          <vk-docs-slots :slots="slots"></vk-docs-slots>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'

import Box from '../../../../2-Atoms/Box/Box'

export default {
  data () {
    return {
      props: mergeProps(Box.props, props),
      example,
      slots
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  closable: {
    description: 'Closable',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  size: {
    description: `The size modifier accepting as values <code>small</code> or <code>large</code>`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'small', value: 'small' },
        { text: 'large', value: 'large' }
      ]
    }
  },
  color: {
    description: `The color modifier accepting as values <code>light</code> or <code>dark</code>`,
    demo: {
      type: 'Select',
      value: '',
      options: [
        { text: '--', value: '' },
        { text: 'light', value: 'light' },
        { text: 'dark', value: 'dark' }
      ]
    }
  }
}

// -- SLOTS
const slots = {
  default: {
    description: 'The Box Content.'
  }
}

// -- EXAMPLE
const example =
`<box
  {attrs}>
  Content
</box>`
</script>
