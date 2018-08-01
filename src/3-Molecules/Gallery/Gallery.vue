<template>
  <div class="blueimp-gallery blueimp-gallery-controls" :id="id" :class="{'blueimp-gallery-carousel': carousel}">
    <div class="slides"></div>
    <h3 class="title"></h3>
    <a class="prev"></a>
    <a class="next"></a>
    <a v-if="!carousel" class="close">×</a>
    <ol v-if="!carousel" class="indicator"></ol>
    <a v-if="carousel" class="play-pause"></a>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
