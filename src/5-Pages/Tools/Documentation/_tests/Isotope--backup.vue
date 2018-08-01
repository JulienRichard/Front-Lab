<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fa-square"></i>Isotope Layout</h3>

      <h4>Filter</h4>
      <div class="button-group">
        <button v-for="(val, key) in option.getFilterData" class="button" :class="[key===filterOption? 'is-checked' : '']" @click="filter(key)">{{key}}
        </button>
      </div>

      <h4>Sort</h4>
      <div class="button-group">
        <button class="button" :class="[sortOption==='original-order'? 'is-checked' : '']" @click="sort('original-order')">original order</button>
        <button v-for="(val, key) in option.getSortData" class="button" :class="[key===sortOption? 'is-checked' : '']" @click="sort(key)">{{key}}</button>
      </div>

      <h4>Layout</h4>
      <div>
        <button v-for="layout in layouts" :class="[layout===currentLayout? 'is-checked' : '']" class="button" @click="changeLayout(layout)">
          {{layout}}
        </button>
      </div>

      <isotope ref='cpt' id='root_isotope1' :item-selector="'element-item'" :list="list" :options="option" @filter="filterOption=arguments[0]" @sort="sortOption=arguments[0]" @layout="currentLayout=arguments[0]">
        <div v-for="element,index in list" :class="[element.category]"  :key="index">
          <h3 class="name">{{element.name}}</h3>
          <p class="symbol">{{element.symbol}}</p>
          <p class="number">{{element.number}}</p>
          <p class="weight">{{element.weight}}</p>
        </div>
      </isotope>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      layouts: [
        'masonry',
        'fitRows',
        'cellsByRow',
        'vertical',
        'packery',
        'masonryHorizontal',
        'fitColumns',
        'cellsByColumn',
        'horiz'
      ],
      list: [
        {
          name: 'Mercury',
          symbol: 'Hg',
          number: 80,
          weight: 200.59,
          category: 'transition',
          metal: true
        }, {
          name: 'Tellurium',
          symbol: 'Te',
          number: 52,
          weight: 127.6,
          category: 'metalloid'
        }, {
          name: 'Bismuth',
          symbol: 'Bi',
          number: 83,
          weight: 208.980,
          category: 'post-transition',
          metal: true
        }, {
          name: 'Lead',
          symbol: 'Pb',
          number: 82,
          weight: 207.2,
          category: 'post-transition',
          metal: true
        }, {
          name: 'Gold',
          symbol: 'Au',
          number: 79,
          weight: 196.967,
          category: 'transition',
          metal: true
        }, {
          name: 'Potassium',
          symbol: 'K',
          number: 19,
          weight: 39.0983,
          category: 'alkali',
          metal: true
        }, {
          name: 'Sodium',
          symbol: 'Na',
          number: 11,
          weight: 22.99,
          category: 'alkali',
          metal: true
        }, {
          name: 'Cadmium',
          symbol: 'Cd',
          number: 48,
          weight: 112.411,
          category: 'transition',
          metal: true
        }, {
          name: 'Calcium',
          symbol: 'Ca',
          number: 20,
          weight: 40.078,
          category: 'alkaline-earth',
          metal: true
        }, {
          name: 'Rhenium',
          symbol: 'Re',
          number: 75,
          weight: 186.207,
          category: 'transition',
          metal: true
        }, {
          name: 'Ytterbium',
          symbol: 'Yb',
          number: 70,
          weight: 173.054,
          category: 'lanthanoid'
        }
      ],
      currentLayout: 'masonry',
      selected: null,
      sortOption: 'original-order',
      filterOption: 'show all',
      option: {
        itemSelector: '.element-item',
        getFilterData: {
          'show all': function () {
            return true
          },
          metal: function (el) {
            return !!el.metal
          },
          transition: function (el) {
            return el.category === 'transition'
          },
          'alkali and alkaline-earth': function (el) {
            return el.category === 'alkali' || el.category === 'alkaline-earth'
          },
          'not transition': function (el) {
            return el.category !== 'transition'
          },

          'metal but not transition': function (el) {
            return !!el.metal && el.category !== 'transition'
          },
          'number > 50': function (el) {
            return el.number > 50
          },
          'name ends with ium': function (el) {
            return el.name.match(/ium$/)
          }
        },
        getSortData: {
          name: 'name',
          symbol: 'symbol',
          number: 'number',
          weight: 'weight',
          category: 'category'
        }
      }
    }
  },
  methods: {
    sort: function (key) {
      this.$refs.cpt.sort(key)
    },
    filter: function (key) {
      this.$refs.cpt.filter(key)
    },
    changeLayout: function (key) {
      this.$refs.cpt.layout(key)
    }
  }
}
</script>

<style lang='scss'>
.item {
  background-color: $light-gray;
  padding: 10px;
  height: 100px;
  box-sizing: border-box;
  font-family: monospace;
  color: #333;

  width: 50%;

  @include breakpoint(medium) {
    width: 33.33%;
  }

  @include breakpoint(large) {
    width: 25%;
  }

  @include breakpoint(xlarge) {
    width: 20%;
  }
}

.element-item {
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 5px;
  padding: 10px;
  background: #888;
  color: #262524;
}

.element-item .name {
  position: absolute;
  left: 10px;
  top: 60px;
  text-transform: none;
  letter-spacing: 0;
  font-size: 12px;
  font-weight: normal;
}

.element-item .symbol {
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 42px;
  font-weight: bold;
  color: white;
}

.element-item .number {
  position: absolute;
  right: 8px;
  top: 5px;
}

.element-item .weight {
  position: absolute;
  left: 10px;
  top: 76px;
  font-size: 12px;
}

.element-item.alkali {
  background: #F00;
}

.element-item.alkaline-earth {
  background: #F80;
}

.element-item.lanthanoid {
  background: #FF0;
}

.element-item.actinoid {
  background: #0F0;
}

.element-item.transition {
  background: #0F8;
}

.element-item.post-transition {
  background: #0FF;
}

.element-item.metalloid {
  background: #08F;
}

.element-item.diatomic {
  background: #00F;
}

.element-item.halogen {
  background: #F0F;
}

.element-item.noble-gas {
  background: #F08;
}


button {
  cursor: pointer;
  background: yellow;
}
</style>
