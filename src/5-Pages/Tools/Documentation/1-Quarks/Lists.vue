<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-list"></i>Lists</h3>
      <h3>Unordered</h3>
      <ul class="list">
        <li>List Item 1</li>
        <li>
          List Item 2
          <ul>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
            <li>Sub item 3</li>
          </ul>
        </li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ul>
      <code-highlight title="Markup">
      &lt;ul class="list"&gt;
        ...
      &lt;/ul&gt;
      </code-highlight>
      <h4>Horizontal</h4>
      <ul class="list-horizontal">
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ul>
      <code-highlight title="Markup">
      &lt;ul class="list-horizontal"&gt;
        ...
      &lt;/ul&gt;
      </code-highlight>
      <hr>

      <h3>Ordered</h3>
      <ol class="list-ordered">
        <li>List Item 1</li>
        <li>
          List Item 2
          <ol>
            <li>Sub item 1</li>
            <li>Sub item 2</li>
            <li>Sub item 3</li>
          </ol>
        </li>
        <li>List Item 3</li>
        <li>List Item 4</li>
        <li>List Item 5</li>
      </ol>
      <code-highlight title="Markup">
      &lt;ol class="list-ordered"&gt;
        ...
      &lt;/ol&gt;
      </code-highlight>
      <hr>

      <h3>Definition</h3>
      <dl class="list-definition">
        <dt>Definition Title</dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tempora quae eveniet recusandae omnis sapiente debitis obcaecati reiciendis quaerat doloremque eos similique veniam et. Obcaecati reiciendis sed nemo provident libero!
        </dd>

        <dt>Definition Title</dt>
        <dd>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum tempora quae eveniet recusandae omnis sapiente debitis obcaecati reiciendis quaerat doloremque eos similique veniam et. Obcaecati reiciendis sed nemo provident libero!
        </dd>
      </dl>
      <code-highlight title="Markup">
      &lt;dl class=&quot;list-definition&quot;&gt;
        &lt;dt&gt;Definition Title&lt;/dt&gt;
        &lt;dd&gt;
          ...
        &lt;/dd&gt;
        &lt;dt&gt;Definition Title&lt;/dt&gt;
        &lt;dd&gt;
          ...
        &lt;/dd&gt;
      &lt;/dl&gt;
      </code-highlight>

    </div>
  </div>
</template>

<script>
export default {

}
</script>
