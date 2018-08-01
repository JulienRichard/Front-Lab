<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-ellipsis-h"></i>Tabs</h3>
    <p>from <a class="link" href="https://github.com/spatie/vue-tabs-component">Vue-Tabs-Component</a></p>
    <div class="wireframe">
      <tabs :centered="props.centered.demo.value" :expanded="props.expanded.demo.value" :wrapped="props.wrapped.demo.value">
        <tab name="Tab 1" icon="fas fa-home">
          <h4>Tab 1</h4>
        </tab>
        <tab name="Tab 2" icon="fas fa-user">
          <h4>Tab 2</h4>
        </tab>
        <tab name="Tab 3" icon="fas fa-comments">
          <h4>Tab 3</h4>
        </tab>
        <tab name="Tab 4" icon="fas fa-file-alt">
          <h4>Tab 4</h4>
        </tab>
        <tab name="Tab 5" icon="fas fa-cog">
          <h4>Tab 5</h4>
        </tab>
      </tabs>
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
   </tabs>

    <code-highlight title="Markup">
    &lt;tabs&gt;
      &lt;tab name="Tab 1" icon="{icon-name}"&gt;
        Tab Content
      &lt;/tab&gt;
      &lt;tab name="Tab 2" icon="{icon-name}"&gt;
        Tab Content
      &lt;/tab&gt;
      &lt;tab name="Tab 3" icon="{icon-name}"&gt;
        Tab Content
      &lt;/tab&gt;
    &lt;/tabs&gt;
    </code-highlight>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'
import Tabs from '../../../../3-Molecules/Tabs/Tabs'

export default {
  data () {
    return {
      props: mergeProps(Tabs.props, props),
      example
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {
  expanded: {
    description: 'Expanded tabs.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  centered: {
    description: 'Centered tabs.',
    demo: {
      type: 'Boolean',
      value: false
    }
  },
  wrapped: {
    description: 'Wrapped tabs.',
    demo: {
      type: 'Boolean',
      value: false
    }
  }
}

// -- EXAMPLE
const example =
`<tabs
  {attrs}>
  <tab name="Tab 1" icon="fas fa-home">
    <h4>Tab 1</h4>
  </tab>
  <tab name="Tab 2" icon="fas fa-user">
    <h4>Tab 2</h4>
  </tab>
  <tab name="Tab 3" icon="fas fa-comments">
    <h4>Tab 3</h4>
  </tab>
  <tab name="Tab 4" icon="fas fa-file-alt">
    <h4>Tab 4</h4>
  </tab>
  <tab name="Tab 5" icon="fas fa-cog">
    <h4>Tab 5</h4>
  </tab>
</tabs>`
</script>
