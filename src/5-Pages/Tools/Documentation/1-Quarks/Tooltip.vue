<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-cog"></i>Tooltip</h3>
      <p>from <a class="link" href="https://kabbouchi.github.io/vue-tippy/">Vue-Tippy</a></p>
      <h4>Default</h4>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy>Simple Tooltip</button-default>
      <code-highlight type="html" title="Markup">
      &lt;div title="..." v-tippy&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Click trigger</h4>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ trigger: 'click' }">Click to open</button-default>
      <code-highlight type="html" title="Markup">
      &lt;div title="..." v-tippy="{ trigger: 'click' }"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>

      <h4>Placement</h4>
      <h5>Top <small>(Default)</small></h5>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'top'}">Top</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'top-start'}">Top Start</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'top-end'}">Top End</button-default>
      <h5>Left</h5>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'left'}">Left</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'left-start'}">Left Start</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'left-end'}">Left End</button-default>
      <h5>Right</h5>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'right'}">Right</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'right-start'}">Right Start</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'right-end'}">Right End</button-default>
      <h5>Bottom</h5>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'bottom'}">Bottom</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'bottom-start'}">Bottom Start</button-default>
      <button-default title="Lorem ipsum dolor sit amet" v-tippy="{ position: 'bottom-end'}">Bottom End</button-default>
      <code-highlight type="html" title="Markup">
      &lt;div title="..." v-tippy="{ position: 'top | bottom | right | left | {side}-start | {side}-end' }"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Themes</h4>
      <button-default color="lighten" title="Light Theme" v-tippy="{ theme: 'light' }">Light Theme</button-default>
      <button-default color="darken" title="Dark Theme" v-tippy="{ theme: 'dark' }">Dark Theme</button-default>
      <hr>

      <h4>Animations</h4>
      <button-default title="Hello there!" v-tippy="{ animation: 'shift-away' }">shift-away</button-default>
      <button-default title="Hello there!" v-tippy="{ animation: 'shift-toward' }">shift-toward</button-default>
      <button-default title="Hello there!" v-tippy="{ animation: 'perspective' }">perspective</button-default>
      <button-default title="Hello there!" v-tippy="{ animation: 'fade' }">fade</button-default>
      <button-default title="Hello there!" v-tippy="{ animation: 'scale' }">scale</button-default>
      <code-highlight type="html" title="Markup">
      &lt;div title="..." v-tippy="{ animation: 'shift-away | shift-toward | perspective | fade | scale' }"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>
      <hr>

      <h4>Html content</h4>
      <p>Lorem ipsum dolor sit amet, consectetur <a class="link" v-tippy="{ html: '#contentpopup1' }">adipisicing</a> elit. Dolor, explicabo, saepe expedita voluptas repellendus et enim inventore porro, quasi ab <a class="link" v-tippy="{ html: '#contentpopup2' }">doloribus</a> sit esse quos ducimus vitae temporibus laboriosam quas. Fuga.</p>
      <div id="contentpopup1" style="display: none">
        <img src="https://placeimg.com/900/600/any" alt="">
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit at, iste sunt sed eaque quia. Quod provident libero, illo atque corporis aperiam quasi ipsum perferendis, eum, veritatis hic ut ducimus!</small>
      </div>
      <div id="contentpopup2" style="display: none">
        <img src="https://placeimg.com/900/600/any/2" alt="">
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</small>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div v-tippy="{ html: '#tooltip-content' }"&gt; ... &lt;/div&gt;
      &lt;div id="tooltip-content" style="display: none"&gt;
        ...
      &lt;/div&gt;
      </code-highlight>

      <h5>Interactive</h5>
      <button-default size="small" v-tippy="{ html: '#contentpopup3', interactive: true, position: 'bottom' }">Hover</button-default>
      <div id="contentpopup3" style="display: none">
        <button-icon icon="fa-facebook" size="small" color="light" hollow style="margin-bottom: 0;"></button-icon>
        <button-icon icon="fa-twitter" size="small" color="light" hollow style="margin-bottom: 0;"></button-icon>
        <button-icon icon="fa-google" size="small" color="light" hollow style="margin-bottom: 0;"></button-icon>
        <button-icon icon="fa-linkedin" size="small" color="light" hollow style="margin-bottom: 0;"></button-icon>
      </div>
      <button-default size="small" v-tippy="{ html: '#contentpopup4', trigger: 'click', interactive: true, position: 'bottom' }">Click</button-default>
      <div id="contentpopup4" style="display: none;">
        <input type="text" placeholder="Input" style="display: inline-block; max-width: 180px;">
        <button-icon icon="fa-send" style="margin-bottom: 0;"></button-icon>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;div v-tippy="{ html: '#content', interactive: true }"&gt; ... &lt;/div&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
