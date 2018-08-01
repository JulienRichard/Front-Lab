<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-cog"></i>Visibility</h3>
      <h4>Show by Screen Size</h4>
      <tag icon="far fa-eye" class="show-for-medium"><strong>medium screen or larger</strong>.</tag>
      <tag icon="far fa-eye" class="show-for-large"><strong>large screen or larger</strong>.</tag>
      <tag icon="far fa-eye" class="show-for-xlarge"><strong>x-large screen or larger</strong>.</tag>
      <tag icon="far fa-eye" class="show-for-xxlarge"><strong>xx-large screen or larger</strong>.</tag>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;show-for-medium&quot;&gt; Visible on a medium screen or larger. &lt;/div&gt;
      &lt;div class=&quot;show-for-large&quot;&gt; Visible on a large screen or larger. &lt;/div&gt;
      </code-highlight>
      <h5>Show on only screen size</h5>
      <tag icon="far fa-eye" class="show-for-small-only"><strong>small</strong> screen.</tag>
      <tag icon="far fa-eye" class="show-for-medium-only"><strong>medium</strong> screen.</tag>
      <tag icon="far fa-eye" class="show-for-large-only"><strong>large</strong> screen.</tag>
      <tag icon="far fa-eye" class="show-for-xlarge-only"><strong>x-large</strong> screen.</tag>
      <tag icon="far fa-eye" class="show-for-xxlarge-only"><strong>xx-large</strong> screen.</tag>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;show-for-small-only&quot;&gt; Visible only on a small screen.&lt;/div&gt;
      &lt;div class=&quot;show-for-medium-only&quot;&gt; Visible only on a medium screen.&lt;/div&gt;
      &lt;div class=&quot;show-for-large-only&quot;&gt; Visible only on a large screen.&lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Hide by Screen Size</h4>
      <tag icon="far fa-eye-slash" class="hide-for-medium"><strong>medium screen or larger</strong>.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-large"><strong>large screen or larger</strong>.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-xlarge"><strong>x-large screen or larger</strong>.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-xxlarge"><strong>xx-large screen or larger</strong>.</tag>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;hide-for-medium&quot;&gt; Hide on a medium screen or larger. &lt;/div&gt;
      &lt;div class=&quot;hide-for-large&quot;&gt; Hide on a large screen or larger. &lt;/div&gt;
      </code-highlight>

      <h5>Hide on only screen size</h5>
      <tag icon="far fa-eye-slash" class="hide-for-small-only"><strong>small</strong> screen.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-medium-only"><strong>medium</strong> screen.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-large-only"><strong>large</strong> screen.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-xlarge-only"><strong>x-large</strong> screen.</tag>
      <tag icon="far fa-eye-slash" class="hide-for-xxlarge-only"><strong>xx-large</strong> screen.</tag>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;hide-for-small-only&quot;&gt; Visible only on a small screen.&lt;/div&gt;
      &lt;div class=&quot;hide-for-medium-only&quot;&gt; Visible only on a medium screen.&lt;/div&gt;
      &lt;div class=&quot;hide-for-large-only&quot;&gt; Visible only on a large screen.&lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Orientation Detection</h4>
      <tag class="show-for-landscape">Landscape orientation.</tag>
      <tag class="show-for-portrait">Portrait orientation.</tag>
      <br>
      <code-highlight type="html" title="Markup">
      &lt;div class=&quot;show-for-landscape&quot;&gt; Landscape orientation.&lt;/div&gt;
      &lt;div class=&quot;show-for-portrait&quot;&gt; Portrait orientation.&lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Accessibility</h4>
      <h5>Show for Screen Readers Only</h5>
      <code-highlight type="html" title="Markup">
      &lt;p class=&quot;show-for-sr&quot;&gt; This text can only be read by a screen reader.&lt;/p&gt;
      </code-highlight>
      <h5>Hide for Screen Readers Only</h5>
      <code-highlight type="html" title="Markup">
      &lt;p aria-hidden=&quot;true&quot;&gt; This text can be seen, but won't be read by a screen reader.&lt;/p&gt;
      </code-highlight>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
