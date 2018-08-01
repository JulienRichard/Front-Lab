<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-arrows-alt-h"></i>Slick Slider</h3>
      <p>from <a class="link" href="https://github.com/staskjs/vue-slick">Vue-Slick</a></p>
    </div>
    <div class="wireframe">
      <slick ref="slick" :options="slickSliderOptions" type="slider">
        <div class="section is-primary">
          <div class="wrapper text-center">
            <h4>Slide 1</h4><br>
          </div>
        </div>
        <div class="section is-secondary">
          <div class="wrapper text-center">
            <h4>Slide 2</h4><br>
          </div>
        </div>
        <div class="section is-highlight">
          <div class="wrapper text-center">
            <h4>Slide 3</h4><br>
          </div>
        </div>
        <div class="section is-light">
          <div class="wrapper text-center">
            <h4>Slide 4</h4><br>
          </div>
        </div>
        <div class="section is-dark">
          <div class="wrapper text-center">
            <h4>Slide 5</h4><br>
          </div>
        </div>
      </slick>
    </div>
    <br>
    <div class="wrapper">
      <div class="wireframe">
        <slick ref="slick" :options="slickSliderOptions" type="slider">
          <img src="https://placeimg.com/800/400/any/2">
          <img src="https://placeimg.com/800/400/any/3">
          <img src="https://placeimg.com/800/400/any/4">
          <img src="https://placeimg.com/800/400/any/5">
          <img src="https://placeimg.com/800/400/any/6">
        </slick>
      </div>
      <code-highlight title="Markup">
        &lt;slick ref="slick" :options="slickSliderOptions" type="slider"&gt;
          &lt;div&gt;Slide 1&lt;/div&gt;
          &lt;div&gt;Slide 2&lt;/div&gt;
          &lt;div&gt;Slide 3&lt;/div&gt;
          ...
        &lt;/slick&gt;
      </code-highlight>
      <hr>

      <h3><icon name="fa-arrows-h"></icon>Slick Carousel</h3>
    </div>
    <div class="wireframe">
      <slick ref="slick" :options="slickCarouselOptions" type="carousel" class="is-collapse">
        <div class="panel is-primary">
          Item 1
        </div>
        <div class="panel is-secondary">
          Item 2
        </div>
        <div class="panel is-highlight">
          Item 3
        </div>
        <div class="panel is-primary">
          Item 4
        </div>
        <div class="panel is-secondary">
          Item 5
        </div>
        <div class="panel is-highlight">
          Item 6
        </div>
        <div class="panel is-primary">
          Item 7
        </div>
        <div class="panel is-secondary">
          Item 8
        </div>
        <div class="panel is-highlight">
          Item 9
        </div>
      </slick>
    </div>
    <br>
    <div class="wrapper">
      <div class="wireframe">
        <slick ref="slick" :options="slickCarouselOptions" type="carousel" class="is-collapse">
          <div class="panel is-primary">
            Item 1
          </div>
          <div class="panel is-secondary">
            Item 2
          </div>
          <div class="panel is-highlight">
            Item 3
          </div>
          <div class="panel is-primary">
            Item 4
          </div>
          <div class="panel is-secondary">
            Item 5
          </div>
          <div class="panel is-highlight">
            Item 6
          </div>
          <div class="panel is-primary">
            Item 7
          </div>
          <div class="panel is-secondary">
            Item 8
          </div>
          <div class="panel is-highlight">
            Item 9
          </div>
        </slick>
      </div>
      <br>
      <div class="wireframe">
        <slick ref="slick" :options="slickCarouselOptions" type="carousel">
          <img src="https://placeimg.com/400/400/any/2">
          <img src="https://placeimg.com/400/400/any/3">
          <img src="https://placeimg.com/400/400/any/4">
          <img src="https://placeimg.com/400/400/any/5">
          <img src="https://placeimg.com/400/400/any/6">
          <img src="https://placeimg.com/400/400/any/7">
          <img src="https://placeimg.com/400/400/any/8">
          <img src="https://placeimg.com/400/400/any/9">
        </slick>
      </div>
      <code-highlight title="Markup">
        &lt;slick ref="slick" class="[is-collapse]" :options="slickCarouselOptions" type="carousel"&gt;
          &lt;div&gt;Slide 1&lt;/div&gt;
          &lt;div&gt;Slide 2&lt;/div&gt;
          &lt;div&gt;Slide 3&lt;/div&gt;
          ...
        &lt;/slick&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slickCarouselOptions: {
        slidesToShow: 5,
        slidesToScroll: 2,
        dots: true,
        arrow: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon fas fa-angle-double-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon fas fa-angle-double-right"></i></button>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrow: false
            }
          }
        ]
      },
      slickSliderOptions: {
        slidesToShow: 1,
        dots: true,
        arrow: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="icon fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="icon fas fa-angle-right"></i></button>'
      }
    }
  },
  // All slick methods can be used too, example here
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    }
  }
}
</script>

<style lang="scss">
  .slick-slide {
    max-height: rhythm(20);
    overflow: hidden;
  }
</style>
