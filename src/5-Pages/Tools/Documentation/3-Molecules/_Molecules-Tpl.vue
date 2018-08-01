<template>
  <div id="template-documentation--molecules">

    <div class="wrapper">
      <h2 class="is-underlined">
        <svg class="icon is-svg" version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="-247 163.2 100 100" style="enable-background:new -247 163.2 100 100;" xml:space="preserve">
        <g id="XMLID_53_">
        	<g id="XMLID_54_">
        		<path id="XMLID_56_" class="st0" d="M-155.8,186.6c2.1-4,1.5-9.1-1.9-12.5c-3.4-3.4-8.5-4-12.5-1.9c-7.9-5.2-17.1-8-26.8-8
        			c-13.2,0-25.5,5.2-34.8,14.5c-19.2,19.2-19.2,50.4,0,69.6c9.3,9.3,21.7,14.4,34.8,14.4s25.5-5.1,34.8-14.4s14.4-21.7,14.4-34.8
        			C-147.8,203.8-150.6,194.5-155.8,186.6z M-168.2,242.3c-7.7,7.7-17.9,12-28.8,12s-21.1-4.2-28.8-11.9c-15.9-15.9-15.9-41.8,0-57.7
        			c7.6-7.8,17.9-12,28.8-12c7.7,0,15.1,2.2,21.5,6.2c-1,3.6-0.1,7.5,2.7,10.3s6.8,3.7,10.3,2.7c4,6.4,6.2,13.8,6.2,21.5
        			C-156.2,224.4-160.5,234.6-168.2,242.3z"/>
        		<circle id="XMLID_48_" class="st0" cx="-197" cy="213.5" r="15"/>
        	</g>
        </g>
        </svg>
        Molecules
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
  created () {
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
