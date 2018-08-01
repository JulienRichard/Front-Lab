export default {
  data: function () {
    return {
      showGlobalGrid: false,
      showWrapperGrid: false,
      showBaseline: false
    }
  },
  methods: {
    // Toogle Global Grid Layout
    toggleGlobalGrid: function () {
      this.showGlobalGrid = !this.showGlobalGrid
      console.log('Toogle Global Grid :' + this.showGlobalGrid)
    },
    // Toogle Wrapper Grid Layout
    toggleWrapperGrid: function () {
      this.showWrapperGrid = !this.showWrapperGrid
      console.log('Toogle Wrapper Grid :' + this.showWrapperGrid)
    },
    // Toogle Baseline Layout
    toggleBaseline: function () {
      this.showBaseline = !this.showBaseline
      console.log('Toogle Baseline :' + this.showBaseline)
    }
  }
}
