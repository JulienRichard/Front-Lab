<template id="styleguide-page">
  <section>
    <div class="wrapper">
      <h1><i class="icon di-brush"></i>StyleGuide</h1>
    </div>

    <tabs centered wrapped>
      <!-- LOGOTYPE -->
      <tab name="Logotype" icon="di-jewel">
        <div class="wrapper">
          <h2><i class="icon di-jewel"></i>Logotype & Branding</h2>
          <div class="row align-middle align-center small-up-1 medium-up-2">
            <div class="column">
              <img src="../../assets/img/logo.svg" alt="" style="max-width: 80%; margin: 0 auto;">
            </div>
            <div class="column">
              <div class="box panel is-dark">
                <img src="../../assets/img/logo.svg" alt="" style="max-width: 80%; margin: 0 auto;">
              </div>
            </div>
          </div>
          <br>
          <div class="row align-middle align-center small-up-1 medium-up-2">
            <div class="column">
              <img src="../../assets/img/logo-large.svg" alt="" style="max-width: 80%; margin: 0 auto;">
            </div>
            <div class="column">
              <div class="box panel is-dark">
                <img src="../../assets/img/logo-large.svg" alt="" style="max-width: 80%; margin: 0 auto;">
              </div>
            </div>
          </div>
        </div>
      </tab>

      <!-- COLORS -->
      <tab name="Colors" icon="fas fa-palette">
        <div class="wrapper">
          <h2><i class="icon fas fa-palette"></i>Colors</h2>
          <h3>Base Palette</h3>
          <div class="row small-up-1 medium-up-3 align-center">
            <div class="column">
              <div class="panel is-primary">
                <strong>$primary-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-secondary">
                <strong>$secondary-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-highlight">
                <strong>$highlight-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-light">
                <strong>$white</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-dark">
                <strong>$black</strong>
              </div>
            </div>
          </div>
          <hr>

          <h3>Full Palette</h3>
          <div class="row small-up-1 medium-up-3">
            <div class="column">
              <div class="panel is-primary-lighten">
                <span>$primary-color-lighten</span>
              </div>
              <div class="panel is-primary">
                <strong>$primary-color</strong>
              </div>
              <div class="panel is-primary-darken">
                <span>$primary-color-darken</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-secondary-lighten">
                <span>$secondary-color-lighten</span>
              </div>
              <div class="panel is-secondary">
                <strong>$secondary-color</strong>
              </div>
              <div class="panel is-secondary-darken">
                <span>$secondary-color-darken</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-highlight-lighten">
                <span>$highlight-color-lighten</span>
              </div>
              <div class="panel is-highlight">
                <strong>$highlight-color</strong>
              </div>
              <div class="panel is-highlight-darken">
                <span>$highlight-color-darken</span>
              </div>
            </div>
          </div>

          <div class="row small-up-1 medium-up-5">
            <div class="column">
              <div class="panel is-light">
                <span>$white</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-light-gray">
                <span>$light-gray</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-medium-gray">
                <span>$medium-gray</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-dark-gray">
                <span>$dark-gray</span>
              </div>
            </div>
            <div class="column">
              <div class="panel is-dark">
                <span>$black</span>
              </div>
            </div>
          </div>
          <hr>

          <h3>Social Palette</h3>
          <div class="row small-up-1 medium-up-3 align-center">
            <div class="column">
              <div class="panel is-facebook">
                <strong>$facebook-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-twitter">
                <strong>$twitter-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-google">
                <strong>$google-color</strong>
              </div>
            </div>
          </div>
          <hr>

          <h3>Helpers Palette</h3>
          <div class="row small-up-1 medium-up-3 align-center">
            <div class="column">
              <div class="panel is-success">
                <strong>$success-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-warning">
                <strong>$warning-color</strong>
              </div>
            </div>
            <div class="column">
              <div class="panel is-error">
                <strong>$error-color</strong>
              </div>
            </div>
          </div>

        </div>
      </tab>

      <!-- TYPOGRAPHY -->
      <tab name="Typography" icon="fas fa-font">
        <div class="wrapper">
          <h2><i class="icon fas fa-font"></i>Typography</h2>
          <h1>[h1] Header 1 <small>subtitle</small></h1>
          <h2>[h2] Header 2 <small>subtitle</small></h2>
          <h3>[h3] Header 3 <small>subtitle</small></h3>
          <h4>[h4] Header 4 <small>subtitle</small></h4>
          <h5>[h5] Header 5 <small>subtitle</small></h5>
          <br>
          <p class="lead">[p.lead] Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>[p] Lorem ipsum dolor sit amet, adipisicing elit. Veniam tenetur mollitia fuga blanditiis atque, a, odio, recusandae ea voluptate itaque natus quis perspiciatis, maiores nemo at delectus incidunt earum.</p>
          <p><small>[small] Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam similique cumque vel recusandae in veritatis rerum nemo expedita libero ab neque fuga eos atque earum qui, rem eum, voluptas. Neque.</small></p>
          <a href="" class="link">[a.link] consectetur</a>
        </div>
      </tab>

      <!-- LAYOUT -->
      <tab name="Layout" icon="fas fa-crop">
        <div class="wrapper">
          <h2><i class="icon fas fa-crop"></i>Layout</h2>
          <div class="box panel">
            <h3>Default Style</h3>
            <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo voluptatibus porro aperiam cum deleniti est, quae velit. Nisi possimus aperiam animi aliquid ea eveniet minima neque praesentium autem debitis.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatum, vero accusamus voluptates earum ea numquam alias illo suscipit itaque impedit quia ex exercitationem magnam doloremque ad ratione ipsum iure?</p>
          </div>

          <div class="box panel is-primary">
            <h3>Primary Style</h3>
            <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo voluptatibus porro aperiam cum deleniti est, quae velit. Nisi possimus aperiam animi aliquid ea eveniet minima neque praesentium autem debitis.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatum, vero accusamus voluptates earum ea numquam alias illo suscipit itaque impedit quia ex exercitationem magnam doloremque ad ratione ipsum iure?</p>
          </div>

          <div class="box panel is-secondary">
            <h3>Secondary Style</h3>
            <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo voluptatibus porro aperiam cum deleniti est, quae velit. Nisi possimus aperiam animi aliquid ea eveniet minima neque praesentium autem debitis.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatum, vero accusamus voluptates earum ea numquam alias illo suscipit itaque impedit quia ex exercitationem magnam doloremque ad ratione ipsum iure?</p>
          </div>

          <div class="box panel is-light">
            <h3>Light Style</h3>
            <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo voluptatibus porro aperiam cum deleniti est, quae velit. Nisi possimus aperiam animi aliquid ea eveniet minima neque praesentium autem debitis.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatum, vero accusamus voluptates earum ea numquam alias illo suscipit itaque impedit quia ex exercitationem magnam doloremque ad ratione ipsum iure?</p>
          </div>

          <div class="box panel is-dark">
            <h3>Dark Style</h3>
            <p class="lead"><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa nemo voluptatibus porro aperiam cum deleniti est, quae velit. Nisi possimus aperiam animi aliquid ea eveniet minima neque praesentium autem debitis.</strong></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum voluptatum, vero accusamus voluptates earum ea numquam alias illo suscipit itaque impedit quia ex exercitationem magnam doloremque ad ratione ipsum iure?</p>
          </div>
        </div>
      </tab>


    </tabs>
  </section>
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

<style lang="scss" scoped>

</style>
