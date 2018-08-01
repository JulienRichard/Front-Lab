// ---------------------------------------------------- //
//    VUE ROUTER
// ---------------------------------------------------- //
import Vue from 'vue'
import VueRouter from 'vue-router'

// -- DEFAULT PAGES
import Home from './5-Pages/Home'
import Blog from './5-Pages/Blog'
import Post from './5-Pages/Post'
import Page from './5-Pages/Page'
import CustomPosts from './5-Pages/CustomPosts'
import CustomPost from './5-Pages/CustomPost'

// -- TOOLS
import DevTests from './5-Pages/Tools/DevTests'
import StyleGuide from './5-Pages/Tools/StyleGuide'

// -- DOCUMENTATION
import docTpl from './5-Pages/Tools/Documentation/_Documentation-Tpl'
import docIndex from './5-Pages/Tools/Documentation/_Documentation-Index'

// Quarks
import docQuarksTpl from './5-Pages/Tools/Documentation/1-Quarks/_Quarks-Tpl'
import docQuarksIndex from './5-Pages/Tools/Documentation/1-Quarks/_Quarks-Index'

import docIcons from './5-Pages/Tools/Documentation/1-Quarks/Icons'
import docTypography from './5-Pages/Tools/Documentation/1-Quarks/Typography'
import docHeadings from './5-Pages/Tools/Documentation/1-Quarks/Headings'
import docFlexGrid from './5-Pages/Tools/Documentation/1-Quarks/FlexGrid'
import docWrapper from './5-Pages/Tools/Documentation/1-Quarks/Wrapper'
import docSections from './5-Pages/Tools/Documentation/1-Quarks/Sections'
import docPanels from './5-Pages/Tools/Documentation/1-Quarks/Panels'
import docLists from './5-Pages/Tools/Documentation/1-Quarks/Lists'
import docForms from './5-Pages/Tools/Documentation/1-Quarks/Forms'
import docTables from './5-Pages/Tools/Documentation/1-Quarks/Tables'
import docMenu from './5-Pages/Tools/Documentation/1-Quarks/Menu'
import docBox from './5-Pages/Tools/Documentation/1-Quarks/Box'

import docVisibility from './5-Pages/Tools/Documentation/1-Quarks/Visibility'
import docMediaQueries from './5-Pages/Tools/Documentation/1-Quarks/MediaQueries'

import docSticky from './5-Pages/Tools/Documentation/1-Quarks/Sticky'
import docIsotope from './5-Pages/Tools/Documentation/1-Quarks/Isotope'
import docRhythm from './5-Pages/Tools/Documentation/1-Quarks/Rhythm'
import docParallax from './5-Pages/Tools/Documentation/1-Quarks/Parallax'
import docAOS from './5-Pages/Tools/Documentation/1-Quarks/AOS'
import docScrollTo from './5-Pages/Tools/Documentation/1-Quarks/ScrollTo'
import docTooltip from './5-Pages/Tools/Documentation/1-Quarks/Tooltip'
import docFormValidation from './5-Pages/Tools/Documentation/1-Quarks/FormValidation'
import docImagesLoaded from './5-Pages/Tools/Documentation/1-Quarks/ImagesLoaded'

// Atoms
import docAtomsTpl from './5-Pages/Tools/Documentation/2-Atoms/_Atoms-Tpl'
import docAtomsIndex from './5-Pages/Tools/Documentation/2-Atoms/_Atoms-Index'

import docTag from './5-Pages/Tools/Documentation/2-Atoms/Tag'
import docBadge from './5-Pages/Tools/Documentation/2-Atoms/Badge'
import docButtonDefault from './5-Pages/Tools/Documentation/2-Atoms/ButtonDefault'
import docButtonIcon from './5-Pages/Tools/Documentation/2-Atoms/ButtonIcon'
import docButtonMenu from './5-Pages/Tools/Documentation/2-Atoms/ButtonMenu'
import docButtonClose from './5-Pages/Tools/Documentation/2-Atoms/ButtonClose'
import docThumbnail from './5-Pages/Tools/Documentation/2-Atoms/Thumbnail'

// Molecules
import docMoleculesTpl from './5-Pages/Tools/Documentation/3-Molecules/_Molecules-Tpl'
import docMoleculesIndex from './5-Pages/Tools/Documentation/3-Molecules/_Molecules-Index'

import docButtonGroup from './5-Pages/Tools/Documentation/3-Molecules/ButtonGroup'
import docTabs from './5-Pages/Tools/Documentation/3-Molecules/Tabs'
import docGallery from './5-Pages/Tools/Documentation/3-Molecules/Gallery'
import docBreadcrumbs from './5-Pages/Tools/Documentation/3-Molecules/Breadcrumbs'
import docMenuDropdown from './5-Pages/Tools/Documentation/3-Molecules/MenuDropdown'
import docModal from './5-Pages/Tools/Documentation/3-Molecules/Modal'
import docNotification from './5-Pages/Tools/Documentation/3-Molecules/Notification'
import docSlick from './5-Pages/Tools/Documentation/3-Molecules/Slick'
import docPostItem from './5-Pages/Tools/Documentation/3-Molecules/Post-Item'
import docCustomPostItem from './5-Pages/Tools/Documentation/3-Molecules/CustomPost-Item'
import docPagination from './5-Pages/Tools/Documentation/3-Molecules/Pagination'
import docPostNavigation from './5-Pages/Tools/Documentation/3-Molecules/PostNavigation'

// Organisms
import docOrganismsTpl from './5-Pages/Tools/Documentation/4-Organisms/_Organisms-Tpl'
import docOrganismsIndex from './5-Pages/Tools/Documentation/4-Organisms/_Organisms-Index'

import docTopBar from './5-Pages/Tools/Documentation/4-Organisms/TopBar'
import docSideBar from './5-Pages/Tools/Documentation/4-Organisms/SideBar'
import docFooter from './5-Pages/Tools/Documentation/4-Organisms/Footer'

import docPostList from './5-Pages/Tools/Documentation/4-Organisms/Post-List'
import docCustomPostList from './5-Pages/Tools/Documentation/4-Organisms/CustomPost-List'

// Pages
import docPagesTpl from './5-Pages/Tools/Documentation/5-Pages/_Pages-Tpl'
import docPagesIndex from './5-Pages/Tools/Documentation/5-Pages/_Pages-Index'

// -----------------------
//   DOCUMENTATION ROUTES
// -----------------------
const docRoutes = {
  name: 'Documentation',
  path: '/Documentation',
  component: docTpl,
  children: [
    {
      name: 'DocumentationIndex',
      path: '',
      component: docIndex
    },
    // -- Quarks
    {
      name: 'Quarks',
      path: '1-Quarks',
      component: docQuarksTpl,
      children: [
        {
          name: 'QuarksIndex',
          path: '',
          component: docQuarksIndex
        },
        {
          name: 'Doc-Icons',
          path: 'Icons',
          component: docIcons
        },
        {
          name: 'Doc-Typography',
          path: 'Typography',
          component: docTypography
        },
        {
          name: 'Doc-Headings',
          path: 'Headings',
          component: docHeadings
        },
        {
          name: 'Doc-FlexGrid',
          path: 'FlexGrid',
          component: docFlexGrid
        },
        {
          name: 'Doc-Wrapper',
          path: 'Wrapper',
          component: docWrapper
        },
        {
          name: 'Doc-Sections',
          path: 'Sections',
          component: docSections
        },
        {
          name: 'Doc-Panels',
          path: 'Panels',
          component: docPanels
        },
        {
          name: 'Doc-Visibility',
          path: 'Visibility',
          component: docVisibility
        },
        {
          name: 'Doc-MediaQueries',
          path: 'MediaQueries',
          component: docMediaQueries
        },
        {
          name: 'Doc-Rhythm',
          path: 'Rhythm',
          component: docRhythm
        },
        {
          name: 'Doc-Sticky',
          path: 'Sticky',
          component: docSticky
        },
        {
          name: 'Doc-Isotope',
          path: 'Isotope',
          component: docIsotope
        },
        {
          name: 'Doc-Parallax',
          path: 'Parallax',
          component: docParallax
        },
        {
          name: 'Doc-AOS',
          path: 'AnimateOnScroll',
          component: docAOS
        },
        {
          name: 'Doc-FormValidation',
          path: 'FormValidation',
          component: docFormValidation
        },
        {
          name: 'Doc-ImagesLoaded',
          path: 'ImagesLoaded',
          component: docImagesLoaded
        },
        {
          name: 'Doc-ScrollTo',
          path: 'ScrollTo',
          component: docScrollTo
        },
        {
          name: 'Doc-Tooltip',
          path: 'Tooltip',
          component: docTooltip
        },
        {
          name: 'Doc-Forms',
          path: 'Forms',
          component: docForms
        },
        {
          name: 'Doc-Lists',
          path: 'Lists',
          component: docLists
        },
        {
          name: 'Doc-Tables',
          path: 'Tables',
          component: docTables
        },
        {
          name: 'Doc-Menu',
          path: 'Menu',
          component: docMenu
        },
        {
          name: 'Doc-Box',
          path: 'Box',
          component: docBox
        }
      ]
    },
    // -- Atoms
    {
      name: 'Atoms',
      path: '2-Atoms',
      component: docAtomsTpl,
      children: [
        {
          name: 'AtomsIndex',
          path: '',
          component: docAtomsIndex
        },
        {
          name: 'Doc-Tag',
          path: 'Tag',
          component: docTag
        },
        {
          name: 'Doc-Badge',
          path: 'Badge',
          component: docBadge
        },
        {
          name: 'Doc-ButtonDefault',
          path: 'Button-Default',
          component: docButtonDefault
        },
        {
          name: 'Doc-ButtonIcon',
          path: 'Button-Icon',
          component: docButtonIcon
        },
        {
          name: 'Doc-ButtonMenu',
          path: 'Button-Menu',
          component: docButtonMenu
        },
        {
          name: 'Doc-ButtonClose',
          path: 'Button-Close',
          component: docButtonClose
        },
        {
          name: 'Doc-Thumbnail',
          path: 'Thumbnail',
          component: docThumbnail
        }
      ]
    },
    // -- Molecules
    {
      name: 'Molecules',
      path: '3-Molecules',
      component: docMoleculesTpl,
      children: [
        {
          name: 'MoleculesIndex',
          path: '',
          component: docMoleculesIndex
        },
        {
          name: 'Doc-ButtonGroup',
          path: 'Button-Group',
          component: docButtonGroup
        },
        {
          name: 'Doc-Tabs',
          path: 'Tabs',
          component: docTabs
        },
        {
          name: 'Doc-Gallery',
          path: 'Gallery',
          component: docGallery
        },
        {
          name: 'Doc-Breadcrumbs',
          path: 'Breadcrumbs',
          component: docBreadcrumbs
        },
        {
          name: 'Doc-Pagination',
          path: 'Pagination',
          component: docPagination
        },
        {
          name: 'Doc-PostNavigation',
          path: 'PostNavigation',
          component: docPostNavigation
        },
        {
          name: 'Doc-MenuDropdown',
          path: 'MenuDropdown',
          component: docMenuDropdown
        },
        {
          name: 'Doc-Modal',
          path: 'Modal',
          component: docModal
        },
        {
          name: 'Doc-Notification',
          path: 'Notification',
          component: docNotification
        },
        {
          name: 'Doc-Slick',
          path: 'Slick',
          component: docSlick
        },
        {
          name: 'Doc-Post-Item',
          path: 'Post-Item',
          component: docPostItem
        },
        {
          name: 'Doc-CustomPost-Item',
          path: 'CustomPost-Item',
          component: docCustomPostItem
        }
      ]
    },
    // -- Organisms
    {
      name: 'Organisms',
      path: '4-Organisms',
      component: docOrganismsTpl,
      children: [
        {
          name: 'OrganismsIndex',
          path: '',
          component: docOrganismsIndex
        },
        {
          name: 'Doc-Post-List',
          path: 'Post-List',
          component: docPostList
        },
        {
          name: 'Doc-CustomPost-List',
          path: 'CustomPost-List',
          component: docCustomPostList
        },
        {
          name: 'Doc-TopBar',
          path: 'TopBar',
          component: docTopBar
        },
        {
          name: 'Doc-SideBar',
          path: 'SideBar',
          component: docSideBar
        },
        {
          name: 'Doc-Footer',
          path: 'Footer',
          component: docFooter
        }
      ]
    },
    // -- Pages
    {
      name: 'Pages',
      path: '5-Pages',
      component: docPagesTpl,
      children: [
        {
          name: 'PagesIndex',
          path: '',
          component: docPagesIndex
        }
      ]
    }
  ]
}

// -------------------
//   INIT
// -------------------
Vue.use(VueRouter)

const routes = [
  // -- HOME
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  // -- WP Post List
  {
    name: 'Blog',
    path: '/Blog',
    component: Blog
  },
  // -- WP Post Single
  {
    name: 'Post',
    path: '/Blog/:slug',
    component: Post
  },
  // -- WP CustomPosts List
  {
    name: 'CustomPosts',
    path: '/CustomPosts',
    component: CustomPosts
  },
  // -- WP CustomPost Single
  {
    name: 'CustomPost',
    path: '/CustomPosts/:slug',
    component: CustomPost
  },
  // -- WP Pages
  {
    name: 'page',
    path: '/:slug',
    component: Page
  },
  // -- DEV TESTS
  {
    name: 'DevTests',
    path: '/DevTests',
    component: DevTests
  },
  // -- STYLEGUIDE
  {
    name: 'Styleguide',
    path: '/Styleguide',
    component: StyleGuide
  },
  // -- DOCUMENTATION
  docRoutes
]

// -----------------------
//   ROUTER CONFIG
// -----------------------
const router = new VueRouter({
  base: '/Front-Lab/',
  mode: 'history',
  routes
})

// Redirect to Home if 404
router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/')
  } else {
    next()
  }
})

export default router
