<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-font"></i>Typography</h3>
      <h4>Styles</h4>
      <h5>Default text</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero voluptates tempore incidunt asperiores error labore reprehenderit non voluptatem perferendis, ipsam commodi modi neque eius eos consequuntur enim molestias architecto soluta.</p>
      <hr>
      <h5>Small Text</h5>
      <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in sit rem repellendus quidem consequatur dignissimos, beatae praesentium doloremque dolor dolorum sint unde veritatis quos porro incidunt, quaerat perferendis officiis!</small></p>
      <code-highlight type="html" title="Markup">
      &lt;small&gt; ... &lt;/small&gt;
      </code-highlight>
      <h5>Lead Text</h5>
      <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, iure ullam voluptate repellendus sint blanditiis neque enim velit impedit eius, placeat officiis commodi maiores nostrum. Doloribus tempora, provident saepe iusto!</p>
      <code-highlight type="html" title="Markup">
      &lt;p class=&quot;lead&quot;&gt; ... &lt;/p&gt;
      </code-highlight>
      <h5>Italic</h5>
      <p><em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga repudiandae voluptas odio laboriosam facilis vero autem, quidem quaerat tempore, nisi ipsa natus magnam inventore odit ipsam aliquid. Sequi, officia, natus!</em></p>
      <code-highlight type="html" title="Markup">
      &lt;em&gt; ... &lt;/em&gt;
      &lt;i&gt; ... &lt;/i&gt;
      </code-highlight>
      <h5>Strong</h5>
      <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, natus cumque esse accusamus? Optio laboriosam atque fuga, vitae ipsa aperiam iure eligendi laudantium sed est modi exercitationem, adipisci necessitatibus delectus.</strong></p>
      <code-highlight type="html" title="Markup">
      &lt;strong&gt; ... &lt;/strong&gt;
      &lt;b&gt; ... &lt;/b&gt;
      </code-highlight>
      <h5>Strong + Lead</h5>
      <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, natus cumque esse accusamus? Optio laboriosam atque fuga, vitae ipsa aperiam iure eligendi laudantium sed est modi exercitationem, adipisci necessitatibus delectus.</strong></p>
      <code-highlight type="html" title="Markup">
      &lt;p class="lead"&gt;
        &lt;strong&gt; ... &lt;/strong&gt;
      &lt;/p&gt;
      </code-highlight>
      <hr>

      <h4>Alignments</h4>
      <h5>Align Left</h5>
      <p class="text-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h5>Align Right</h5>
      <p class="text-right">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h5>Align Center</h5>
      <p class="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h5>Justify</h5>
      <p class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <code-highlight type="html" title="Markup">
      &lt;p class=&quot;text-left&quot;&gt; ... &lt;/p&gt;
      &lt;p class=&quot;text-right&quot;&gt; ... &lt;/p&gt;
      &lt;p class=&quot;text-center&quot;&gt; ... &lt;/p&gt;
      &lt;p class=&quot;text-justify&quot;&gt; ... &lt;/p&gt;
      </code-highlight>
      <hr>

      <h4>Anchors</h4>
      <h5>Default</h5>
      <p>
        Lorem ipsum dolor sit amet, <a class="link" href="#">consectetur adipisicing elit</a>, sed do eiusmod tempor <a class="link" href="#">incididunt</a> ut labore et dolore magna aliqua.
      </p>
      <code-highlight type="html" title="Markup">
      &lt;a class="link"&gt; ... &lt;/a&gt;
      </code-highlight>
      <hr>

      <h4>Underline</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur <span class="is-underlined">adipisicing</span> elit. Esse quia ipsum corporis quas vel saepe fugit reiciendis non iusto, error similique <span class="is-underlined">reprehenderit</span> veniam, quo labore.
      </p>
      <code-highlight type="html" title="Markup">
      &lt;p&gt; &lt;span class="is-underlined"&gt; ... &lt;/span&gt; &lt;/p&gt;
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
