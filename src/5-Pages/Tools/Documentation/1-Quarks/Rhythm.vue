<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fa-cog"></i>Rhythm</h3>
      <h4>Images</h4>
<img v-rhythmer src="https://placeimg.com/800/400/any">
<br><br>
<div class="row">
  <div class="column">
    <img v-rhythmer src="https://placeimg.com/640/640/any">
  </div>
  <div class="column">
    <img v-rhythmer src="https://placeimg.com/640/640/any/2">
  </div>
</div>
<code-highlight type="html" title="Markup">
&lt;img class="keep-rhythm" src="..." alt=""/&gt;
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
