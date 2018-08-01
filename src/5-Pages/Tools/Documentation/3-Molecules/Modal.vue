<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon far fa-window-maximize"></i>Modal</h3>
      <h4>Default</h4>
      <button-default @click.native="showModal = true">Open Modal</button-default>
      <modal v-if="showModal" @close="showModal = false" :centered="props.centered.demo.value">
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </modal>

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
import Modal from '../../../../3-Molecules/Modal/Modal'

export default {
  data () {
    return {
      showModal: false,
      showModalBox: false,
      props: mergeProps(Modal.props, props),
      example,
      slots
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  centered: {
    description: 'XY Centered Style.',
    demo: {
      type: 'Boolean',
      value: false
    }
  }
}

// -- SLOTS
const slots = {
  default: {
    description: 'Modal Content'
  }
}

// -- EXAMPLE
const example =
`<!-- Action button -->
<button-default @click.native="showModal = true">Open Modal</button-default>

<!-- Modal -->
<modal v-if="showModal" @close="showModal = false"
  {attrs}>
  ...
</modal>`
</script>

<style lang="scss" scoped>

</style>
