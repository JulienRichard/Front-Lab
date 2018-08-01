<template>
  <div>
    <div class="wrapper">
      <h3><icon name="di-blog"></icon>Post List</h3>
      <div class="wireframe">
        <post-list :perPage="3"></post-list>
      </div>

      <code-highlight title="Markup">
        &lt;post-list :perPage="3"&gt;&lt;/post-list&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
