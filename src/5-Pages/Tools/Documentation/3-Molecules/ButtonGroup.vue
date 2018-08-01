<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-mouse-pointer"></i>Button Group</h3>
    <h4><i class="icon fas fa-check-square"></i>Check</h4>
    <div class="wireframe">
      <button-group-check :group="props.group.demo.value" :value="props.value.demo.value" @change="
           events.change.emited = true,
           props.value.demo.value = arguments[0]
         ">
        <button-default :value="1">Button 1</button-default>
        <button-default :value="2">Button 2</button-default>
        <button-default :value="3">Button 3</button-default>
      </button-group-check>
    </div>
    <div class="wireframe">
      <button-group-check :group="props.group.demo.value" :value="props.value.demo.value" @change="
          events.change.emited = true,
          props.value.demo.value = arguments[0]
        ">
        <button-icon icon="di-home" color="secondary" rounded :value="1"></button-icon>
        <button-icon icon="di-blog" rounded hollow color="light" :value="2"></button-icon>
        <button-icon hollow icon="di-user" color="light" rounded :value="3"></button-icon>
      </button-group-check>
    </div>
    <code-highlight title="Markup">{{ code }}</code-highlight>
    <tabs>
      <tab name="Props">
        <vk-docs-props :props="props" @change="props[arguments[0]].demo.value = arguments[1]">
        </vk-docs-props>
      </tab>
      <tab name="Events">
        <vk-docs-events :events="events"></vk-docs-events>
      </tab>
    </tabs>
    <hr>

    <h4><i class="icon fas fa-check-circle"></i>Radio</h4>
    <div class="wireframe">
      <button-group-radio :group="Radioprops.group.demo.value" :value="Radioprops.value.demo.value" @change="
            Radioevents.change.emited = true,
            Radioprops.value.demo.value = arguments[0]
          ">
        <button-default :value="1">Button 1</button-default>
        <button-default :value="2">Button 2</button-default>
        <button-default :value="3">Button 3</button-default>
      </button-group-radio>
    </div>
    <div class="wireframe">
      <button-group-radio :group="Radioprops.group.demo.value" :value="Radioprops.value.demo.value" @change="
           Radioevents.change.emited = true,
           Radioprops.value.demo.value = arguments[0]
         ">
        <button-icon icon="di-home" color="secondary" rounded :value="1"></button-icon>
        <button-icon hollow icon="di-blog" rounded color="light" rounded :value="2"></button-icon>
        <button-icon hollow icon="di-user" color="light" rounded :value="3"></button-icon>
      </button-group-radio>
    </div>
    <code-highlight title="Markup">{{ Radioexample }}</code-highlight>
    <tabs>
      <tab name="Props">
        <vk-docs-props :props="Radioprops" @change="Radioprops[arguments[0]].demo.value = arguments[1]">
        </vk-docs-props>
      </tab>
      <tab name="Events">
        <vk-docs-events :events="Radioevents"></vk-docs-events>
      </tab>
    </tabs>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'
import ButtonGroupCheck from '../../../../3-Molecules/ButtonGroup/ButtonGroup-Check'
import ButtonGroupRadio from '../../../../3-Molecules/ButtonGroup/ButtonGroup-Radio'

export default {
  data: () => ({
    tabsIndex: 0,
    props: mergeProps(ButtonGroupCheck.props, props),
    events,
    example,
    Radioprops: mergeProps(ButtonGroupRadio.props, Radioprops),
    Radioevents,
    Radioexample
  }),
  mixins: [mixin]
}

const props = {
  value: {
    description: 'The current value reflecting the selected button one.',
    demo: {
      type: 'Select',
      options: [
        { text: 'default', value: [] },
        { text: '[1]', value: [1] },
        { text: '[2]', value: [2] },
        { text: '[3]', value: [3] },
        { text: '[1, 2]', value: [1, 2] },
        { text: '[1, 3]', value: [1, 3] },
        { text: '[2, 3]', value: [2, 3] },
        { text: '[1, 2, 3]', value: [1, 2, 3] }
      ],
      value: []
    }
  },
  group: {
    description: 'Whether to display the buttons grouped together.',
    demo: {
      type: 'Boolean',
      value: true
    }
  }
}

const events = {
  change: {
    description: `Emited on the intention to change the selection passing as argument the resulting value.`,
    emited: false
  }
}
const example =
`<button-group-check {attrs}>
  <button-default :value="1">Button 1</button-default>
  <button-default :value="2">Button 2</button-default>
  <button-default :value="3">Button 3</button-default>
</button-group-check>`

const Radioprops = {
  value: {
    description: 'The current value reflecting the selected button one.',
    demo: {
      type: 'Select',
      options: [
        { text: 'default', value: [] },
        { text: '[1]', value: [1] },
        { text: '[2]', value: [2] },
        { text: '[3]', value: [3] }
      ],
      value: []
    }
  },
  group: {
    description: 'Whether to display the buttons grouped together.',
    demo: {
      type: 'Boolean',
      value: true
    }
  }
}

const Radioevents = {
  change: {
    description: `Emited on the intention to change the selection passing as argument the resulting value.`,
    emited: false
  }
}
const Radioexample =
`<button-group-radio {attrs}>
  <button-default :value="1">Button 1</button-default>
  <button-default :value="2">Button 2</button-default>
  <button-default :value="3">Button 3</button-default>
</button-group-radio>`
</script>
