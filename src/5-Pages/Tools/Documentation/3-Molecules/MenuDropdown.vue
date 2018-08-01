<template>
  <div>
    <div class="wrapper">
      <h3><icon name="fa-bars"></icon>Menu basic</h3>
      <menu-foundation>
        <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Four</menu-foundation-item>
      </menu-foundation>
      <code-highlight type="html" title="Markup">
      &lt;menu-foundation&gt;
        &lt;menu-foundation-item to="/one"&gt;One&lt;/menu-foundation-item&gt;
        &lt;menu-foundation-item to="/two"&gt;Two&lt;/menu-foundation-item&gt;
        &lt;menu-foundation-item to="/three"&gt;Three&lt;/menu-foundation-item&gt;
        &lt;menu-foundation-item to="/four"&gt;Four&lt;/menu-foundation-item&gt;
      &lt;/menu-foundation&gt;
      </code-highlight>

    <h4>Menu text</h4>
    <menu-foundation>
      <menu-foundation-item>Menu Text</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation&gt;
      &lt;menu-foundation-item&gt;Menu Text&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/one"&gt;One&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/two"&gt;Two&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/three"&gt;Three&lt;/menu-foundation-item&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>

    <h4>Alignments</h4>
    <menu-foundation align="center">
      <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Four</menu-foundation-item>
    </menu-foundation>
    <menu-foundation align="right">
      <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Four</menu-foundation-item>
    </menu-foundation>
    <menu-foundation align="expanded">
      <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Four</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation align="center | right | expanded"&gt;
      ...
    &lt;/menu-foundation&gt;
    </code-highlight>

    <h4>Vertical</h4>
    <menu-foundation vertical>
      <menu-foundation-item to="/Blog/1">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Four</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation vertical&gt;
      ...
    &lt;/menu-foundation&gt;
    </code-highlight>

    <h4>Icons</h4>
    <menu-foundation>
      <menu-foundation-item to="/Blog/1" icon-left="fa-home">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-left="fa-user">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-left="fa-comments">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-left="fa-cog">Four</menu-foundation-item>
    </menu-foundation>
    <menu-foundation align="right">
      <menu-foundation-item to="/Blog/1" icon-right="fa-home">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-right="fa-user">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-right="fa-comments">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-right="fa-cog">Four</menu-foundation-item>
    </menu-foundation>
    <menu-foundation align="center">
      <menu-foundation-item to="/Blog/1" icon-top="fa-home">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-user">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-comments">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-cog">Four</menu-foundation-item>
    </menu-foundation>
    <menu-foundation align="expanded">
      <menu-foundation-item to="/Blog/1" icon-top="fa-home">One</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-user">Two</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-comments">Three</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-cog">Four</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation&gt;
      &lt;menu-foundation-item to="/Blog/1" icon-left="{icon-name}"&gt;...&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/Blog/1" icon-right="{icon-name}"&gt;...&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/Blog/1" icon-top="{icon-name}"&gt;...&lt;/menu-foundation-item&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>
    <hr>

    <!-- Menu Dropdown -->
    <h3><icon name="fa-bars"></icon>Menu Dropdown</h3>
    <menu-foundation type="dropdown">
      <menu-foundation-item to="/Blog/1">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <menu-foundation-item to="/Blog/1">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Item 4</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation type="dropdown"&gt;
      &lt;menu-foundation-item to="/Blog/1"&gt;Item 1&lt;/menu-foundation-item&gt;
      &lt;menu-foundation title="Item 2"&gt;
        &lt;menu-foundation-item to="/Blog/1"&gt;Item 2A&lt;/menu-foundation-item&gt;
        &lt;menu-foundation title="Item 2B"&gt;
          &lt;!-- ... --&gt;
        &lt;/menu-foundation&gt;
        &lt;menu-foundation-item to="/Blog/1"&gt;Item 2A&lt;/menu-foundation-item&gt;
        &lt;menu-foundation-item to="/Blog/1"&gt;Item 2A&lt;/menu-foundation-item&gt;
        &lt;menu-foundation-item to="/Blog/1"&gt;Item 2A&lt;/menu-foundation-item&gt;
      &lt;/menu-foundation&gt;
      &lt;menu-foundation-item to="/Blog/1"&gt;Item 3&lt;/menu-foundation-item&gt;
      &lt;menu-foundation-item to="/Blog/1"&gt;Item 4&lt;/menu-foundation-item&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>
    <hr>

    <h4>Vertical</h4>
    <div class="row">
      <div class="column small-12 medium-3">
        <menu-foundation type="dropdown" vertical>
          <menu-foundation-item to="/Blog/1">Item 1</menu-foundation-item>
          <menu-foundation title="Item 2">
            <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
            <menu-foundation title="Item 2B">
              <menu-foundation-item to="/Blog/1">Item 2B 1</menu-foundation-item>
              <menu-foundation-item to="/Blog/1">Item 2B 2</menu-foundation-item>
              <menu-foundation-item to="/Blog/1">Item 2B 3</menu-foundation-item>
              <menu-foundation-item to="/Blog/1">Item 2B 4</menu-foundation-item>
            </menu-foundation>
            <menu-foundation-item to="/Blog/1">Item 2C</menu-foundation-item>
            <menu-foundation-item to="/Blog/1">Item 2D</menu-foundation-item>
            <menu-foundation-item to="/Blog/1">Item 2E</menu-foundation-item>
          </menu-foundation>
          <menu-foundation-item to="/Blog/1">Item 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 4</menu-foundation-item>
        </menu-foundation>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation type="dropdown" vertical&gt;
      &lt;!-- ... --&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>
    <hr>

    <h4>Alignments</h4>
    <menu-foundation type="dropdown" align="center">
      <menu-foundation-item to="/Blog/1">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <menu-foundation-item to="/Blog/1">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1">Item 2C</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2D</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2E</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Item 4</menu-foundation-item>
    </menu-foundation>

    <menu-foundation type="dropdown" align="right">
      <menu-foundation-item to="/Blog/1">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <menu-foundation-item to="/Blog/1">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1">Item 2C</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2D</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2E</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Item 4</menu-foundation-item>
    </menu-foundation>

    <menu-foundation type="dropdown" align="expanded">
      <menu-foundation-item to="/Blog/1">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <menu-foundation-item to="/Blog/1">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <menu-foundation-item to="/Blog/1">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1">Item 2C</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2D</menu-foundation-item>
        <menu-foundation-item to="/Blog/1">Item 2E</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1">Item 4</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation type="dropdown" align="[ center | right | expanded ]"&gt;
      &lt;!-- ... --&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>
    <hr>

    <h4>Icons</h4>
    <menu-foundation type="dropdown">
      <menu-foundation-item to="/Blog/1" icon-left="fa-home">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <icon slot="beforetitle" name="fa-user" class="is-align-left"></icon>
        <menu-foundation-item to="/Blog/1" icon-left="fa-home">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <icon slot="beforetitle" name="fa-cog" class="is-align-left"></icon>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1" icon-left="fa-comments">Item 2C</menu-foundation-item>
        <menu-foundation-item to="/Blog/1" icon-left="fa-cog">Item 2D</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1" icon-left="fa-comments">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-left="fa-cog">Item 4</menu-foundation-item>
    </menu-foundation>
    <menu-foundation type="dropdown" align="expanded">
      <menu-foundation-item to="/Blog/1" icon-top="fa-home">Item 1</menu-foundation-item>
      <menu-foundation title="Item 2">
        <icon slot="beforetitle" name="fa-user" class="is-align-top"></icon>
        <menu-foundation-item to="/Blog/1" icon-left="fa-home">Item 2A</menu-foundation-item>
        <menu-foundation title="Item 2B">
          <icon slot="beforetitle" name="fa-cog" class="is-align-left"></icon>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 1</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 2</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 3</menu-foundation-item>
          <menu-foundation-item to="/Blog/1" icon-left="fa-angle-right">Item 2B 4</menu-foundation-item>
        </menu-foundation>
        <menu-foundation-item to="/Blog/1" icon-left="fa-comments">Item 2C</menu-foundation-item>
        <menu-foundation-item to="/Blog/1" icon-left="fa-cog">Item 2D</menu-foundation-item>
      </menu-foundation>
      <menu-foundation-item to="/Blog/1" icon-top="fa-comments">Item 3</menu-foundation-item>
      <menu-foundation-item to="/Blog/1" icon-top="fa-cog">Item 4</menu-foundation-item>
    </menu-foundation>
    <code-highlight type="html" title="Markup">
    &lt;menu-foundation type="dropdown"&gt;
      &lt;menu-foundation title="{Item Title}"&gt;
        &lt;icon slot="beforetitle" name="{icon-name}" class="[ is-align-left | is-align-right | is-align-top ]"&gt;&lt;/icon&gt;
        &lt;!-- ... --&gt;
      &lt;/menu-foundation&gt;
      &lt;!-- ... --&gt;
    &lt;/menu-foundation&gt;
    </code-highlight>

    </div>
  </div>
</template>

<script>
export default {

}
</script>
