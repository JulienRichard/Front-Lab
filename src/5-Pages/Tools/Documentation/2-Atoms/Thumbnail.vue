<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon far fa-image"></i>Thumbnail</h3>
      <div class="wireframe">
        <thumbnail :image="props.image.demo.value">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis eligendi, eius unde.
        </thumbnail>
      </div>
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
import Thumbnail from '../../../../2-Atoms/Thumbnail/Thumbnail'

export default {
  data () {
    return {
      props: mergeProps(Thumbnail.props, props),
      example,
      slots
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  image: {
    description: 'Image Src',
    demo: {
      type: 'Select',
      value: 'https://placeimg.com/600/450/any',
      options: [
        { text: 'Placeholder 600x450', value: 'https://placeimg.com/600/450/any' },
        { text: 'Placeholder 600x900', value: 'https://placeimg.com/600/900/any/2' },
        { text: 'Placeholder 900x300', value: 'https://placeimg.com/900/300/any/3' }
      ]
    }
  }
}

// -- SLOTS
const slots = {
  default: {
    description: 'The Figcaption inner text.'
  }
}

// -- EXAMPLE
const example =
`<thumbnail
  {attrs}>
  Figcaption Content
</thumbnail>`
</script>
