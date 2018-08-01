<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-times"></i>Button Close</h3>
      <div class="box panel">
        <button-close></button-close>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, delectus. Eveniet fuga non cum debitis, vitae error esse repudiandae eaque fugit architecto provident ad a mollitia odit. Numquam harum, unde!</p>
      </div>
      <div class="row">
        <div class="column">
          <div class="box panel is-light">
            <button-close></button-close>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, delectus. Eveniet fuga non cum debitis, vitae error esse repudiandae eaque fugit architecto provident ad a mollitia odit. Numquam harum, unde!</p>
          </div>
        </div>
        <div class="column">
          <div class="box panel is-dark">
            <button-close></button-close>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, delectus. Eveniet fuga non cum debitis, vitae error esse repudiandae eaque fugit architecto provident ad a mollitia odit. Numquam harum, unde!</p>
          </div>
        </div>
      </div>

      <code-highlight lang="html" title="Markup">
        {{ code }}
      </code-highlight>
    </div>
  </div>
</template>

<script>
import { mergeProps } from '../../../../1-Quarks/tools/Documentation/mergeProps'
import mixin from '../../../../1-Quarks/tools/Documentation/documentation'
import ButtonClose from '../../../../2-Atoms/Buttons/ButtonClose/ButtonClose'

export default {
  data () {
    return {
      showBox: true,
      props: mergeProps(ButtonClose.props, props),
      example
    }
  },
  mixins: [mixin]
}

// -- PROPS
const props = {

}

// -- EXAMPLE
const example =
`<button-close
  {attrs}>
</button-close>`
</script>
