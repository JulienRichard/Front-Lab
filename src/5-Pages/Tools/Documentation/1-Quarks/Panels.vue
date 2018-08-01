<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-square"></i>Panels</h3>
      <div class="panel wireframe">
        Default Panel
      </div>
      <br>
      <code-highlight type="html" title="Markup">
      &lt;div class="panel"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Sizes</h4>
      <div class="row">
        <div class="column small-12 medium-3">
          <div class="wireframe panel is-small">
            is-small
          </div>
        </div>
        <div class="column small-12 medium-3">
          <div class="wireframe panel">
            Default
          </div>
        </div>
        <div class="column small-12 medium-3">
          <div class="wireframe panel is-large">
            is-large
          </div>
        </div>
        <div class="column small-12 medium-3">
          <div class="wireframe panel is-huge">
            is-huge
          </div>
        </div>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div class="panel [is-small | is-large | is-huge]"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Colors</h4>
      <div class="row">
        <div class="column small-12 medium-4">
          <div class="panel is-primary-lighten">
            <span>is-primary-lighten</span>
          </div>
          <div class="panel is-primary">
            <span>is-primary</span>
          </div>
          <div class="panel is-primary-darken">
            <span>is-primary-darken</span>
          </div>
        </div>
        <div class="column small-12 medium-4">
          <div class="panel is-secondary-lighten">
            <span>is-secondary-lighten</span>
          </div>
          <div class="panel is-secondary">
            <span>is-secondary</span>
          </div>
          <div class="panel is-secondary-darken">
            <span>is-secondary-darken</span>
          </div>
        </div>
        <div class="column small-12 medium-4">
          <div class="panel is-highlight-lighten">
            <span>is-highlight-lighten</span>
          </div>
          <div class="panel is-highlight">
            <span>is-highlight</span>
          </div>
          <div class="panel is-highlight-darken">
            <span>is-highlight-darken</span>
          </div>
        </div>
      </div>
      <div class="row small-up-3 medium-up-5">
        <div class="column">
          <div class="panel is-light">
            <span>is-light</span>
          </div>
        </div>
        <div class="column">
          <div class="panel is-light-gray">
            <span>is-light-gray</span>
          </div>
        </div>
        <div class="column">
          <div class="panel is-medium-gray">
            <span>is-medium-gray</span>
          </div>
        </div>
        <div class="column">
          <div class="panel is-dark-gray">
            <span>is-dark-gray</span>
          </div>
        </div>
        <div class="column">
          <div class="panel is-dark">
            <span>is-dark</span>
          </div>
        </div>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div class="panel is-{color}"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
