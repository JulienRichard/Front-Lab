<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-th-large"></i>FlexGrid</h3>
    <h4>Flexible & Responsive</h4>
    <div class="row">
      <div class="column small-12 medium-6 large-2">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-10">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-3">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-9">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-4">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-8">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-5">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-7">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-6">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-6">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-7">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-5">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-8">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-4">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-9">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-3">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-10">
        <div class="box panel"></div>
      </div>
      <div class="column small-12 medium-6 large-2">
        <div class="box panel"></div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class="row"&gt;
      &lt;div class="column small-{size} medium-{size} large-{size}"&gt;
        ...
      &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Auto-Sizing</h4>
    <div class="row">
      <div class="small-12 medium-3 column">
        <div class="box panel">3 columns</div>
      </div>
      <div class="column">
        <div class="box panel">Auto Sizing</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column small-{size} medium-{size} large-{size}&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Shrink Column</h4>
    <div class="row">
      <div class="column shrink">
        <div class="box panel">Shrink!</div>
      </div>
      <div class="column">
        <div class="box panel">Auto Sizing</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column shrink&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Automatic Stacking</h4>
    <div class="row large-unstack">
      <div class="column">
        <div class="box panel">Large Unstack</div>
      </div>
      <div class="column">
        <div class="box panel">Large Unstack</div>
      </div>
      <div class="column">
        <div class="box panel">Large Unstack</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row {breakpoint}-unstack&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Block Grids</h4>
    <div class="row small-up-1 medium-up-2 large-up-3">
      <div class="column">
        <div class="box panel">small-up-1</div>
      </div>
      <div class="column">
        <div class="box panel">medium-up-2</div>
      </div>
      <div class="column">
        <div class="box panel">large-up-3</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row {breakpoint}-up-{columns/row}&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Columns Expand</h4>
    <div class="row">
      <div class="column small-12 medium-expand">
        <div class="box panel">Expanded on medium or larger</div>
      </div>
      <div class="column small-12 medium-expand">
        <div class="box panel">Expanded on medium or larger</div>
      </div>
      <div class="column small-12 large-expand">
        <div class="box panel">Expanded on large or larger</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column small-{size} {breakpoint}-expand&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Horizontal Alignment</h4>
    <div class="row align-center">
      <div class="column small-4">
        <div class="box panel">Center</div>
      </div>
      <div class="column small-4">
        <div class="box panel">Center</div>
      </div>
    </div>
    <div class="row align-right">
      <div class="column small-4">
        <div class="box panel">Right</div>
      </div>
      <div class="column small-4">
        <div class="box panel">Right</div>
      </div>
    </div>
    <div class="row align-justify">
      <div class="column small-4">
        <div class="box panel">Justify</div>
      </div>
      <div class="column small-4">
        <div class="box panel">Justify</div>
      </div>
    </div>
    <div class="row align-spaced">
      <div class="column small-4">
        <div class="box panel">Spaced</div>
      </div>
      <div class="column small-4">
        <div class="box panel">Spaced</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row [align-center / align-right / align-justify / align-spaced]&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Vertical Alignment</h4>
    <div class="row align-middle">
      <div class="column">
        <div class="box panel">Align Middle</div>
      </div>
      <div class="column">
        <div class="box panel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit non risus gravida sollicitudin. Suspendisse et pulvinar dolor. Nulla facilisi. Aenean faucibus tellus a tellus interdum faucibus. Maecenas iaculis velit ac urna vestibulum, sit
          amet convallis sem tincidunt. Nulla molestie eros vitae ligula pellentesque convallis.</div>
      </div>
    </div>
    <div class="row align-bottom">
      <div class="column">
        <div class="box panel">Align Bottom</div>
      </div>
      <div class="column">
        <div class="box panel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit non risus gravida sollicitudin. Suspendisse et pulvinar dolor. Nulla facilisi. Aenean faucibus tellus a tellus interdum faucibus. Maecenas iaculis velit ac urna vestibulum, sit
          amet convallis sem tincidunt. Nulla molestie eros vitae ligula pellentesque convallis.</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row [align-middle / align-bottom]&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Horizontal + Vertical Alignment</h4>
    <div class="row align-center align-middle">
      <div class="column small-12 medium-4">
        <div class="box panel">Align Center + Middle</div>
      </div>
      <div class="column small-12 medium-4">
        <div class="box panel">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec elit non risus gravida sollicitudin. Suspendisse et pulvinar dolor. Nulla facilisi. Aenean faucibus tellus a tellus interdum faucibus. Maecenas iaculis velit ac urna vestibulum, sit
          amet convallis sem tincidunt. Nulla molestie eros vitae ligula pellentesque convallis.</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row align-center align-middle&quot;&gt;
      &lt;div class=&quot;column small-12 medium-4&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column small-12 medium-4&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Individual Alignment</h4>
    <div class="row">
      <div class="column align-self-top">
        <div class="box panel">Align top</div>
      </div>
      <div class="column align-self-middle">
        <div class="box panel">Align middle</div>
      </div>
      <div class="column align-self-bottom">
        <div class="box panel">Align bottom</div>
      </div>
      <div class="column">
        <div class="box panel">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum laborum cum voluptate vel, eius adipisci similique dignissimos nobis at excepturi incidunt fugit molestiae quaerat, consequuntur porro temporibus. Nisi, ex?</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column align-self-top&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column align-self-middle&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column align-self-bottom&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Collapse Rows</h4>
    <h5>Normal</h5>
    <div class="row small-up-2 medium-up-3">
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
    </div>
    <h5>Collapse Y</h5>
    <div class="row collapse-y small-up-2 medium-up-3">
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
    </div>
    <br/>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row is-collapse-y&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <h5>Collapse XY</h5>
    <div class="row is-collapse small-up-2 medium-up-3">
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
      <div class="column">
        <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">No Gutters</div>
      </div>
    </div>
    <br/>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row is-collapse&quot;&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Nested</h4>
    <div class="row">
      <div class="column small-12 medium-6 large-4">
        <div class="box" style="padding: 0px;">
          <span>column</span>
          <div class="row">
            <div class="column small-12 medium-6">
              <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12 medium-6">
              <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12">
              <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column small-12 medium-6 large-4">
        <div class="box" style="padding: 0px;">
          <span>column</span>
          <div class="row collapse">
            <div class="column small-12 medium-6">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12 medium-6">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
          </div>
        </div>
      </div>
      <div class="column small-12 medium-6 large-4">
        <div class="box" style="padding: 0px;">
          <span>column</span>
          <div class="row collapse-y">
            <div class="column small-12 medium-6">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12 medium-6">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
            <div class="column small-12">
               <div class="box panel" style="box-shadow: inset 0px 0px 0px 1px #B3B3B3;">Nested</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column&quot;&gt;
        &lt;div class=&quot;row&quot;&gt;
          &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4>Offsets</h4>
    <div class="row">
      <div class="column small-6 medium-3 large-offset-2">
        <div class="box panel has-wireframe">Offset 2 on large and larger</div>
      </div>
      <div class="column small-6 medium-3 medium-offset-2">
        <div class="box panel has-wireframe">Offset 2 on medium and larger</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column {breakpoint}-offset-{size}&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <div class="row">
      <div class="column small-12 medium-6 small-order-2 medium-order-1">
        <div class="box has-wireframe"><strong>1.</strong> Second on small | First on medium and larger</div>
      </div>
      <div class="column small-12 medium-6 small-order-1 medium-order-2">
        <div class="box has-wireframe"><strong>2.</strong> First on small | Second on medium and larger.</div>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;column {breakpoint}-order-{order}&quot;&gt; ... &lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
  margin-bottom: 0;
}
</style>
