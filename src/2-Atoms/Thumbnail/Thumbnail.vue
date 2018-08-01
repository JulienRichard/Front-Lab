<!-- - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  THUMBNAIL
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
<template lang="html">
  <figure class="thumbnail">
    <img :src="image" alt="">
    <figcaption v-if="this.$slots.default">
      <slot></slot>
    </figcaption>
  </figure>
</template>

<script src="./script.js"></script>
