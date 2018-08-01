<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-arrows-alt-h"></i>Wrapper</h3>
    </div>
    <div class="wrapper wireframe">
      <span class="show-for-small-only">
        <tag color="primary">Small screen</tag>
        <tag>12 columns / 12</tag>
      </span>
      <span class="show-for-medium-only">
        <tag color="primary">Medium screen</tag>
        <tag>11 columns / 12</tag>
      </span>
      <span class="show-for-large-only">
        <tag color="primary">Large screen</tag>
        <tag>10 columns / 12</tag>
      </span>
      <span class="show-for-xlarge-only">
        <tag color="primary">x-Large screen</tag>
        <tag>9 columns / 12</tag>
      </span>
      <span class="show-for-xxlarge-only">
        <tag color="primary">xx-Large screen</tag>
        <tag>8 columns / 12</tag>
      </span>
    </div>
    <br />
    <div class="wrapper">
      <code-highlight type="scss" title="Settings">
      $wrapper-sizes: (
        small: 12,
        medium: 11,
        large: 10,
        xlarge: 9,
        xxlarge: 8
      );
      </code-highlight>
      <p>Wrapper Sizes (columns / 12)</p>
      <code-highlight type="html" title="Markup">
      &lt;div class="wrapper"&gt;
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
