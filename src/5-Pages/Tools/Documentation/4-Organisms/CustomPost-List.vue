<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon di-photo-group"></i>Custom Post List</h3>
      <div class="wireframe">
        <custompost-list :perPage="3"></custompost-list>
      </div>

      <code-highlight title="Markup">
        &lt;custompost-list :perPage="3"&gt;&lt;/custompost-list&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
