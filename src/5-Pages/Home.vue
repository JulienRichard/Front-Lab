<template id="home-page">
  <div class="main-cartouche">
    <img src="../assets/img/logo-large.svg" alt="">
    <h2 class="text-center">VueJs + Wordpress + Ui Kit</h2>
    <p class="lead text-center">a <strong>Wordpress Theme</strong> with <strong>VueJs</strong> and <strong>Ui components</strong>, based on <strong>Atomic design</strong> system</p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main-cartouche {
  position: absolute;
  @include center(xy);
  width: 75%;

  img {
    max-width: 500px;
    margin: 0 auto;
  }
}
</style>
