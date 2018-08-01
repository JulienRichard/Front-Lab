/*
  From rhythmer https://github.com/ten1seven/rhythmer
*/

var Rhythmer = function (obj) {
  this.image = obj.image
  this.rhythm = obj.rhythm

  if (this.image && this.rhythm) this.init()
}

Rhythmer.prototype = {
  init: function () {
    ['setup'].forEach(this.fire.bind(this))
  },

  fire: function (fn) {
    this[fn]()
  },

  currentWidth: null,

  variables: function () {
    this.originalHeight = this.preloader.height
    this.originalWidth = this.preloader.width
    this.ratio = this.originalHeight / this.originalWidth
  },

  setup: function () {
    this.preloader = document.createElement('img')
    this.preloader.onload = function () {
      this.variables()
      this.resize()
    }.bind(this)
    this.preloader.src = this.image.getAttribute('src')
  },

  resize: function () {
    if (this.image.width !== this.currentWidth) {
      this.image.style.height = 'auto'
      this.currentWidth = this.image.width

      var newHeight = this.currentWidth * this.ratio
      var clippedHeight = Math.floor(newHeight / this.rhythm) * this.rhythm

      this.image.style.height = clippedHeight + 'px'
    }
  },

  updateRyhthm: function (rhythm) {
    this.rhythm = rhythm
    this.currentWidth = null

    this.resize()
  }
}

var RhythmerJs = {
  install: function install (Vue) {
    Vue.directive('rhythmer', function () {
      // Debounce
      var debounce = function (func, wait, immediate) {
        var timeout
        return function () {
          var context = this, args = arguments
          var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
          }
          var callNow = immediate && !timeout
          clearTimeout(timeout)
          timeout = setTimeout(later, wait)
          if (callNow) func.apply(context, args)
        }
      }

      // Rhythm config
      var vertRhythm = function (condition) {
        return (condition) ? 27 : 24
      }

      var mq = window.matchMedia('(min-width: 600px)')
      var verticalRhythm = vertRhythm(mq.matches)
      var imagesArray = []
      var images = document.querySelectorAll('[v-rhythmer]')

      for (var i = 0, len = images.length; i < len; i++) {
        imagesArray.push(new Rhythmer(
          {
            'image': images[i],
            'rhythm': verticalRhythm
          }
        ))
      }

      // Resize
      var resizeImages = debounce(function () {
        imagesArray.map(function (image) {
          image.resize()
        })
      }, 200)
      window.addEventListener('resize', resizeImages)
      mq.addListener(function (changed) {
        var verticalRhythm = vertRhythm(changed.matches)
        imagesArray.map(function (image) {
          image.updateRyhthm(verticalRhythm)
        })
      })
    })
  }
}

module.exports = RhythmerJs
