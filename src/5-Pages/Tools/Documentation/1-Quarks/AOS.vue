<template lang="html">
  <div class="wrapper">
    <h3><i class="icon fas fa-cog"></i>Animate On Scroll</h3>
    <p>from <a class="link" href="https://github.com/michalsnik/aos">Animate On Scroll library</a></p>
    <div>
      <div class="box panel" data-aos-duration="1000" data-aos="fade-up">1</div>
      <div class="box panel" data-aos-duration="1000" data-aos="fade-down">2</div>
      <div class="box panel" data-aos-duration="1000" data-aos="fade-right">3</div>
      <div class="box panel" data-aos-duration="1000" data-aos="fade-left">4</div>

      <div class="box panel" data-aos-duration="1000" data-aos="zoom-in">5</div>
      <div class="box panel" data-aos-duration="1000" data-aos="zoom-out">6</div>

      <div class="box panel" data-aos-duration="1000" data-aos="slide-up">7</div>

      <div class="box panel" data-aos-duration="1000" data-aos="flip-up">8</div>
      <div class="box panel" data-aos-duration="1000" data-aos="flip-down">9</div>
      <div class="box panel" data-aos-duration="1000" data-aos="flip-right">10</div>
      <div class="box panel" data-aos-duration="1000" data-aos="flip-left">11</div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div data-aos="{animation-name}" data-aos-duration="{animation-duration}" data-aos-delay="{animation-delay}"&gt; ... &lt;/div&gt;
    </code-highlight>
    <p>See all Options on <a href="https://github.com/michalsnik/aos" class="link">official page</a></p>
  </div>
</template>

<script>
import AOS from 'aos'

export default {
  mounted () {
    AOS.init()
  }
}
</script>

<style lang="scss">

</style>
