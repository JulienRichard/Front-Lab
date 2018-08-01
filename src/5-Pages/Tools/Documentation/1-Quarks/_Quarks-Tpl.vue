<template>
  <div id="template-documentation--quarks">

    <div class="wrapper">
      <h2 class="is-underlined">
        <svg class="icon is-svg" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="-247 163.2 100 100" style="enable-background:new -247 163.2 100 100;" xml:space="preserve">
          <g id="XMLID_31_">
            <g id="XMLID_32_">
              <path id="XMLID_29_" class="st0" d="M-170.3,218.3c0.5,1.4,1.8,2.3,3.3,2.3h15.8c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6h-13.2
                l-7.2-19.2c-0.5-1.4-1.8-2.3-3.2-2.3c-1.5,0-2.8,0.8-3.4,2.2l-6.4,15.1l-8.4-31.1c-0.4-1.6-1.9-2.7-3.6-2.6
                c-1.7,0.1-3.1,1.3-3.4,2.9l-10.1,51.8l-7.1-28c-0.4-1.5-1.7-2.6-3.3-2.7s-3,0.8-3.5,2.3l-5,13.7h-13.6c-2,0-3.6,1.6-3.6,3.6
                s1.6,3.6,3.6,3.6h16c1.5,0,2.8-0.9,3.3-2.3l2-5.3l8.3,32.5c0.4,1.6,1.8,2.7,3.4,2.7h0.1c1.7,0,3.1-1.2,3.4-2.9l10.1-52.5l7.1,26.1
                c0.4,1.5,1.7,2.5,3.2,2.6c1.5,0.1,2.9-0.8,3.5-2.1l7-16.3L-170.3,218.3z"/>
            </g>
          </g>
        </svg>
        Quarks
      </h2>
    </div>

    <transition name="routerTransition" mode="out-in">
      <loader v-if="loading" static></loader>
      <router-view v-else></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true
    }
  },
  mounted () {
    this.preload()
  },
  watch: {
    '$route': 'preload'
  },
  methods: {
    preload () {
      setTimeout(function () {
        this.loading = false
      }.bind(this), 800)
    }
  }
}
</script>
