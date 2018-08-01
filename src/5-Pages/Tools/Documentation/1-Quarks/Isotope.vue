<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-square"></i>Isotope Layout</h3>
      <p>from <a class="link" href="https://github.com/David-Desmaisons/Vue.Isotope">Vue-Isotope</a></p>

      <!-- Filters -->
      <h4>Filters</h4>
      <h5>Category Filter</h5>
      <button-group-radio>
        <button class="button" :class="[filterOption==='showAll' ? 'is-active' : '']" @click="filter('showAll')">All</button>
        <button class="button" :class="[filterOption==='category1' ? 'is-active' : '']" @click="filter('category1')">Category 1</button>
        <button class="button" :class="[filterOption==='category2' ? 'is-active' : '']" @click="filter('category2')">Category 2</button>
        <button class="button" :class="[filterOption==='unclassified' ? 'is-active' : '']" @click="filter('unclassified')">Non Classé</button>
      </button-group-radio>

      <!-- Text Filter // Not compatible with VueJs 2 ? -->
      <!--
      <h5>Text Filter (Post Title)</h5>
      <div class="form-element form-input">
        <input id="filterText" v-model="filterText" @change="checkTextFilter()" @input="checkTextFilter()" name="filterText" type="text" class="form-element-field" placeholder=" "/>
        <label for="filterText" class="form-element-label"><i class="icon fas fa-search is-align-left"></i>Text Filter</label>
        <div class="form-element-bar"></div>
      </div>
      <button class="button" :class="[filterOption==='filterByText' ? 'is-active' : '']" @click="filter('filterByText')">Filter</button>
      <br><br>
      -->

      <!-- Sort -->
      <h4>Sort</h4>
      <button-group-radio>
        <button class="button" :class="[sortOption==='name' ? 'is-active' : '']" @click="sort('name')">Sort by name</button>
        <button class="button" :class="[sortOption==='date' ? 'is-active' : '']" @click="sort('date')">Older in First</button>
      </button-group-radio>

      <!-- Shuffle -->
      <h4>Shuffle</h4>
      <button class="button" @click="shuffle()"><i class="icon di-media-shuffle is-align-left"></i>Shuffle</button>

      <!-- Isotope - Masonry Layout -->
      <isotope id="root_isotope" class="row" ref="cpt"
        :list="posts"
        :options="option"
        v-images-loaded:on.progress="initLayout"
        @filter="filterOption=arguments[0]"
        @sort="sortOption=arguments[0]">
        <article v-for="post,index in posts" :key="index" class="isotope-item">
          <div class="box">
            <img :src="post.thumbnail_medium" alt="">
            <div class="panel">
              <h4 class="like-h5">{{ post.title.rendered }}</h4>
              <p><small>{{ post.dateFormat }}</small></p>
              <span v-for="category in post.cats"><tag>{{ category.name }}</tag></span>
            </div>
          </div>
        </article>
      </isotope>

      <!-- Loader -->
      <loader static v-if="!isLoaded"></loader>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import imagesLoaded from 'vue-images-loaded'

export default {
  data () {
    return {
      isLoaded: false,
      postsUrl: 'http://www.julienr.fr/Front-Lab/wp-json/wp/v2/posts?_embed',
      posts: [],
      selected: null,
      filterOption: null,
      // filterText: '',
      sortOption: null,
      option: {
        itemSelector: '.isotope-item',
        getFilterData: {
          /* // Not compatible with VueJs 2 ?
          filterByText: function (el) {
            return el.title.rendered.toLowerCase().includes(this.filterText.toLowerCase())
          },
          */
          showAll () {
            return true
          },
          category1 (el) {
            return el.cats.find(cat => cat.name === 'Category 1')
          },
          category2 (el) {
            return el.cats.find(cat => cat.name === 'Category 2')
          },
          unclassified (el) {
            return el.cats.find(cat => cat.name === 'Non classé')
          }
        },
        getSortData: {
          name (el) {
            return el.title.rendered.toLowerCase()
          },
          date (el) {
            return el.date
          }
        }
      }
    }
  },
  directives: {
    imagesLoaded
  },
  methods: {
    getPosts () {
      axios.get(this.postsUrl, {params: this.postsData})
      .then((response) => {
        this.posts = response.data
      })
    },
    initLayout () {
      this.$refs.cpt.layout('masonry')
      this.$refs.cpt.filter('showAll')
      this.isLoaded = true
    },
    filter (key) {
      if (this.filterOption === key) {
        key = null
      }
      this.$refs.cpt.filter(key)
      this.filterOption = key
    },
    sort (key) {
      this.$refs.cpt.sort(key)
      this.sortOption = key
    },
    /*
    checkTextFilter () {
      if (this.filterText !== '') {
        this.$refs.cpt.filter('showAll')
        this.filterOption = 'filterByText'
        this.$refs.cpt.filter('filterByText')
      } else {
        this.filterOption = 'showAll'
        this.$refs.cpt.filter('showAll')
        this.filterText = ''
      }
    }
    */
   shuffle () {
     this.$refs.cpt.shuffle()
   }
  },
  created () {
    this.getPosts()
  }
}
</script>

<style lang='scss'>
.isotope-item {
  position: relative;
  float: left;
  width: 100%;
  padding: 0 rhythm(.5);

  @include breakpoint(medium) {
    width: 50%;
  }

  @include breakpoint(large) {
    width: 33.33%;
  }
}

.isotope-item.alkali {
  background: #F00;
}

.isotope-item.alkaline-earth {
  background: #F80;
}

.isotope-item.lanthanoid {
  background: #FF0;
}

.isotope-item.actinoid {
  background: #0F0;
}

.isotope-item.transition {
  background: #0F8;
}

.isotope-item.post-transition {
  background: #0FF;
}

.isotope-item.metalloid {
  background: #08F;
}

.isotope-item.diatomic {
  background: #00F;
}

.isotope-item.halogen {
  background: #F0F;
}

.isotope-item.noble-gas {
  background: #F08;
}
</style>
