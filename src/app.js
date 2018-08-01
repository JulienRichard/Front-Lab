/// =======================================================
//  APP.js
/// =======================================================
// import jQuery from 'jquery'
import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './_router'
import App from './App.vue'

// DEV-TOOLS & DOCS
import DevTools from './1-Quarks/tools/Dev-Tools/Dev-Tools'
import CodeHighlight from './1-Quarks/tools/Documentation/Code-Highlight/Code-Highlight'

// QUARKS
// ----------------------------
// -- Directives
import VueStickyJs from './1-Quarks/_js/directives/sticky'
import VueParallaxJs from './1-Quarks/_js/directives/parallax'
import Tippy from 'v-tippy'
import VuePaginate from 'vue-paginate'
import VueScrollTo from 'vue-scrollto'
import imagesLoaded from 'vue-images-loaded'
import VeeValidateMessages from 'vee-validate/dist/locale/fr'
import VeeValidate, { Validator } from 'vee-validate'

// -- Components
import SectionParallax from './1-Quarks/tools/Parallax/SectionParallax'
import isotope from 'vueisotope'

// ATOMS
// ----------------------------
import Icon from './2-Atoms/Icon/Icon'
import Box from './2-Atoms/Box/Box'
import ButtonDefault from './2-Atoms/Buttons/ButtonDefault/ButtonDefault'
import ButtonIcon from './2-Atoms/Buttons/ButtonIcon/ButtonIcon'
import ButtonClose from './2-Atoms/Buttons/ButtonClose/ButtonClose'
import ButtonMenu from './2-Atoms/Buttons/ButtonMenu/ButtonMenu'
import Badge from './2-Atoms/Badge/Badge'
import Tag from './2-Atoms/Tag/Tag'
import Thumbnail from './2-Atoms/Thumbnail/Thumbnail'
import Loader from './2-Atoms/Loader/Loader'

// MOLECULES
// ----------------------------
import Dropdown from './3-Molecules/Dropdown/Dropdown'
import Droppler from './3-Molecules/Droppler/Droppler'
import Breadcrumbs from './3-Molecules/Breadcrumbs/Breadcrumbs'
import ButtonGroupCheck from './3-Molecules/ButtonGroup/ButtonGroup-Check'
import ButtonGroupRadio from './3-Molecules/ButtonGroup/ButtonGroup-Radio'
import Slick from './3-Molecules/Slick/Slick'
import Gallery from './3-Molecules/Gallery/Gallery'
import Modal from './3-Molecules/Modal/Modal'
import OffCanvas from './3-Molecules/OffCanvas/OffCanvas'
import Pagination from './3-Molecules/Pagination/Pagination'
import Tabs from './3-Molecules/Tabs/Tabs'
import Tab from './3-Molecules/Tabs/Tab'
import PostNavigation from './3-Molecules/PostNavigation/PostNavigation'
import Notification from './3-Molecules/Notification/Notification'
import PreLoader from './3-Molecules/PreLoader/PreLoader'

// ORGANISMS
// ----------------------------
import TopBarMain from './4-Organisms/TopBar/TopBarMain'
import MenuMain from './4-Organisms/Menus/MenuMain'
import SidebarMain from './4-Organisms/Sidebar/SidebarMain'
import FooterMain from './4-Organisms/Footer/FooterMain'
import PostList from './4-Organisms/Blog/Post-List/PostList'
import PostItem from './4-Organisms/Blog/Post-Item/PostItem'
import PostListCustom from './4-Organisms/Blog/Post-List/PostListCustom'
import PostItemCustom from './4-Organisms/Blog/Post-Item/PostItemCustom'

// APP SCSS (this imports other assets)
// ----------------------------
// Global Styles
import './app.scss'

// Aos animations
import 'aos/src/sass/aos.scss'

/// =======================================================
//  REGISTER TOOLS
/// =======================================================
// -- jQuery
// window.jQuery = jQuery
// window.$ = jQuery

// -- Motion UI
// require('motion-ui')

// -- What Input
// require('what-input')

// -- Foundation
// * Import All Foundation JS
// require('foundation-sites/dist/js/foundation') // all Modules

// require('foundation-sites/dist/js/plugins/foundation.core')
// require('foundation-sites/dist/js/plugins/foundation.util.keyboard')
// require('foundation-sites/dist/js/plugins/foundation.util.box')
// require('foundation-sites/dist/js/plugins/foundation.util.nest')

// * Or Import plugins individually
// Dropdown Menu
// require('foundation-sites/dist/js/plugins/foundation.dropdownMenu')

// -- Vue Use
Vue.use(VueRouter)
Vue.use(VueStickyJs)
Vue.use(VueParallaxJs)
Vue.use(VuePaginate)

// VeeValidate (Form validation)
Validator.localize({ 'fr': VeeValidateMessages })
Vue.use(VeeValidate, { locale: 'fr' })

Vue.use(Tippy, {
  trigger: 'mouseenter focus',
  followCursor: false,
  dynamicTitle: false,
  interactive: false,
  interactiveBorder: 2,
  position: 'top',
  animation: 'shift-away',
  animateFill: false,
  arrow: true,
  theme: 'default'
}) // (https://atomiks.github.io/tippyjs/#all-options)

Vue.use(VueScrollTo, {
   container: 'body',
   duration: 900,
   easing: 'ease-out',
   offset: 0,
   cancelable: true,
   onStart: false,
   onDone: false,
   onCancel: false,
   x: false,
   y: true
 }) // (https://rigor789.github.io/vue-scrollto/#/docs)

Vue.component('isotope', isotope)

// Vue.directive(imagesLoaded)

/// =======================================================
//  VUE INIT
/// =======================================================
// DevTools
Vue.component('devtools', DevTools)
Vue.component('code-highlight', CodeHighlight)

Vue.component('section-parallax', SectionParallax)

// -- ATOMS
Vue.component('icon', Icon)
Vue.component('box', Box)
Vue.component('button-default', ButtonDefault)
Vue.component('button-icon', ButtonIcon)
Vue.component('button-close', ButtonClose)
Vue.component('button-menu', ButtonMenu)
Vue.component('badge', Badge)
Vue.component('tag', Tag)
Vue.component('thumbnail', Thumbnail)
Vue.component('loader', Loader)

// -- MOLECULES
Vue.component('dropdown', Dropdown)
Vue.component('droppler', Droppler)
Vue.component('breadcrumbs', Breadcrumbs)
Vue.component('button-group-check', ButtonGroupCheck)
Vue.component('button-group-radio', ButtonGroupRadio)
Vue.component('gallery', Gallery)
Vue.component('modal', Modal)
Vue.component('off-canvas', OffCanvas)
Vue.component('post-navigation', PostNavigation)
Vue.component('pagination', Pagination)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)
Vue.component('slick', Slick)
Vue.component('notification', Notification)
Vue.component('pre-loader', PreLoader)

// -- ORGANISMS
Vue.component('topbar-main', TopBarMain)
Vue.component('menu-main', MenuMain)
Vue.component('sidebar-main', SidebarMain)
Vue.component('footer-main', FooterMain)

// Blog
Vue.component('post-item', PostItem)
Vue.component('post-list', PostList)
Vue.component('custompost-list', PostListCustom)
Vue.component('custompost-item', PostItemCustom)

// VUE INSTANCE
// ----------------------------
// // A secondary Vue instance to communicate between components.
// (using by PreLoader)
var EventHolder = new Vue()
Vue.prototype.EventHolder = EventHolder

window.axios = require('axios')
window.Vue = Vue

new Vue({
  directives: {
    imagesLoaded
  },
  router,
  render: h => h(App)
}).$mount('#app')
