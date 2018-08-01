<template lang="html">
  <div class="wrapper">
    <h2><i class="icon fas fa-terminal"></i>Install</h2>
    <code-highlight title="node" type="javascript">
      $ npm install
    </code-highlight>
    <hr>

    <h2><i class="icon fas fa-terminal"></i>Dev Mode</h2>
    <div class="box panel">
      <p>Dev Server : localhost:3000</p>
      <p>Browsersync UI : localhost:3001</p>
      <p>Bundle Analyser Server : localhost:4000</p>
    </div>
    <p><tag>function.php</tag> Set source of <strong>theme_styles()</strong> and <strong>theme_js()</strong> functions</p>
    <code-highlight title="node" type="javascript">
      $ npm run dev
    </code-highlight>
    <hr>

    <h2><i class="icon fas fa-terminal"></i>Build</h2>
    <p><tag>webpack.config.js</tag> Configure buildPath</p>
    <p><tag>_router.js</tag> Defined routerRootPath</p>
    <p><tag>function.php</tag> Set source of theme_styles() and theme_js() functions</p>
    <code-highlight title="node" type="javascript">
      $ npm run build
    </code-highlight>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
