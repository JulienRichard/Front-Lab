<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-cog"></i>MediaQueries</h3>
      <h4>Config</h4>
      <h5>Breakpoints</h5>
      <code-highlight type="scss" title="Scss">
      $breakpoints: (
        small: 0,
        medium: 640px,
        large: 1024px,
        xlarge: 1200px,
        xxlarge: 1440px
      );
      </code-highlight>
      <h5>Breakpoint Classes</h5>
      <code-highlight type="scss" title="Scss">
      $breakpoint-classes: (small medium large xlarge xxlarge);
      </code-highlight>
      <hr>

      <h4>Markup</h4>
      <h5>Columns Breakpoints</h5>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;row&quot;&gt;
        &lt;div class=&quot;column {breakpoint}-{size}&quot;&gt; ... &lt;/div&gt;
        &lt;div class=&quot;column {breakpoint}-{size}&quot;&gt; ... &lt;/div&gt;
        &lt;div class=&quot;column {breakpoint}-{size}&quot;&gt; ... &lt;/div&gt;
      &lt;/div&gt;
      </code-highlight>
      <h5>Block Grids Breakpoints</h5>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;row {breakpoint}-up-{columns}&quot;&gt;
        &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
        &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
        &lt;div class=&quot;column&quot;&gt; ... &lt;/div&gt;
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Sass Reference</h4>
      <span>Only affects {size} screens and larger</span>
      <code-highlight type="scss" title="Scss">
      @include breakpoint( {size} ) {
      	...
      }
      </code-highlight>
      <span>Only affects {size} screens and smaller</span>
      <code-highlight type="scss" title="Scss">
      @include breakpoint( {size} down ) {
      	...
      }
      </code-highlight>
      <span>Only affects {size} screens, not others</span>
      <code-highlight type="scss" title="Scss">
      @include breakpoint( {size} only ) {
      	...
      }
      </code-highlight>
      <span>This can be used to combine multiple media queries together.</span>
      <code-highlight type="scss" title="Scss">
      @media screen and #{breakpoint(medium)} and #{breakpoint(xlarge down)} {
        // Medium to extra large styles
      }
      </code-highlight>
      <h5>Orientation</h5>
      <code-highlight type="scss" title="Scss">
      @include breakpoint(landscape) {
        // CSS for landscape-oriented devices only
      }
      </code-highlight>
      <h5>Retina</h5>
      <code-highlight type="scss" title="Scss">
      @include breakpoint(retina) {
        // CSS for high-resolution displays only
      }
      </code-highlight>
      <hr>

      <h4>Javascript Reference</h4>
      <h5>Match Media</h5>
      <span>Define Breakpoints</span>
      <code-highlight type="javascript" title="Javascript">
      var mediumBreakpoint = '768px',
      		largeBreakpoint = '1024px';
      </code-highlight>
      <span>Small Screen</span>
      <code-highlight type="javascript" title="Javascript">
      if (window.matchMedia('(max-width:'+ mediumBreakpoint +')').matches) {
      	...
      }
      </code-highlight>
      <span>Medium Screen</span>
      <code-highlight type="javascript" title="Javascript">
      else if (window.matchMedia('(min-width: '+ mediumBreakpoint +') and (max-width: '+ largeBreakpoint +')').matches) {
      	...
      }
      </code-highlight>
      <span>Large Screen</span>
      <code-highlight type="javascript" title="Javascript">
      else if (window.matchMedia('(min-width: '+ largeBreakpoint +')').matches) {
      	...
      }
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
