<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon far fa-square"></i>Sections</h3>
    </div>
    <div class="section wireframe">
      <div class="wrapper">
        <p>Default Section</p>
      </div>
      <div class="wrapper wireframe">
        <p>Wrapper</p>
        <code-highlight type="html" title="Markup">
        &lt;div class="section"&gt;
          &lt;div class="wrapper"&gt;
            ...
          &lt;/div&gt;
        &lt;/div&gt;
        </code-highlight>
      </div>
      <hr>
    </div>

    <div class="wrapper">
      <h4>Sizes</h4>
    </div>
    <div class="section wireframe is-small">
      <div class="wrapper">
        is-small
      </div>
    </div>
    <div class="section wireframe">
      <div class="wrapper">
        Default
      </div>
    </div>
    <div class="section wireframe is-large">
      <div class="wrapper">
        is-large
      </div>
    </div>
    <div class="section wireframe is-huge">
      <div class="wrapper">
        is-huge
      </div>
    </div>
    <div class="wrapper">
      <code-highlight type="html" title="Markup">
      &lt;div class="section is-{size}"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>
      <h4>Colors</h4>
    </div>

    <div class="section is-small is-primary">
      <div class="wrapper">
        <span>is-primary</span>
      </div>
    </div>
    <div class="section is-small is-secondary">
      <div class="wrapper">
        <span>is-secondary</span>
      </div>
    </div>
    <div class="section is-small is-highlight">
      <div class="wrapper">
        <span>is-highlight</span>
      </div>
    </div>
    <div class="section is-small is-dark">
      <div class="wrapper">
        <span>is-dark</span>
      </div>
    </div>
    <div class="section is-small is-light">
      <div class="wrapper">
        <span>is-light</span>
      </div>
    </div>
    <div class="wrapper">
      <code-highlight type="html" title="Markup">
      &lt;div class="section is-{color}"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>
      <h3><i class="icon fas fa-cog"></i>Section Parallax</h3>
      <p>from <a class="link" href="https://github.com/vuetifyjs/vuetify/blob/dev/src/components/VParallax/VParallax.js">Vuetify</a></p>
    </div>
    <section-parallax src="https://placeimg.com/1200/1600/any/1">

    </section-parallax>
    <div class="wrapper">
      <code-highlight type="html" title="Markup">
      &lt;section-parallax src="https://placeimg.com/1400/1800/any/1"&gt;
        ...
      &lt;/section-parallax&gt;
      </code-highlight>
      <hr>
      <h4>Custom height</h4>
    </div>
    <section-parallax src="https://placeimg.com/1400/1800/any/2" height="216">

    </section-parallax>
    <div class="wrapper">
      <code-highlight type="html" title="Markup">
      &lt;section-parallax src="https://placeimg.com/1200/1600/any/2" height="{value in px}"&gt;
        ...
      &lt;/section-parallax&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
