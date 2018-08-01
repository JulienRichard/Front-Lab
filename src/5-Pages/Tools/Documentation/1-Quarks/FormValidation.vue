<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-cog"></i>Form Validation</h3>
    <p>from <a class="link" href="https://baianat.github.io/vee-validate/">Vee-Validate</a></p>

    <form @submit.prevent="validateBeforeSubmit">
      <div class="row small-up-1 medium-up-2 xxlarge-up-3 collapse-y">
        <!-- Name Field -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('nom') }">
            <input id="nom" name="nom" type="text" class="form-input-field" placeholder="Nom" v-model="nom" v-validate="'required|alpha|min:2'"/>
            <label for="nom" class="form-input-label"><i class="icon fas fa-user is-align-left"></i>Nom</label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('nom')">{{ errors.first('nom') }}</span>
            </transition>
          </div>
        </div>

        <!-- Email Field -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('email') }">
            <input id="email" name="email" type="text" class="form-input-field" placeholder="exemple@domaine.fr" v-model="email" v-validate="'required|email'"/>
            <label for="email" class="form-input-label"><i class="icon fas fa-envelope is-align-left"></i>Email</label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </transition>
          </div>
        </div>

        <!-- Phone Field -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('telephone') }">
            <input id="telephone" name="telephone" type="text" class="form-input-field" placeholder=" " v-model="telephone" v-validate="'numeric'"/>
            <label for="telephone" class="form-input-label"><i class="icon fas fa-phone is-align-left"></i>Téléphone</label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('telephone')">{{ errors.first('telephone') }}</span>
            </transition>
          </div>
        </div>

        <!-- Url Field -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('url') }">
            <input id="url" name="url" type="text" class="form-input-field" placeholder="http://www.site.com" v-model="url" v-validate="'url'"/>
            <label for="url" class="form-input-label"><i class="icon fas fa-link is-align-left"></i>Url</label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
            </transition>
          </div>
        </div>

        <!-- Password Field -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('password') }">
            <input id="password" name="password" type="password" ref="password" class="form-input-field" placeholder=" " v-model="password" v-validate="'required|min:6'"/>
            <label for="password" class="form-input-label"><i class="icon fas fa-lock is-align-left"></i>Mot de passe</label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('password')">{{ errors.first('password') }}</span>
            </transition>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="column">
          <div class="form-input" :class="{ 'has-error': errors.has('password_confirmation') }">
            <input id="password_confirmation" name="password_confirmation" type="password" class="form-input-field" placeholder="Confirmer le mot de passe" v-validate="'required|confirmed:password'" data-vv-as="password"/>
            <label for="password_confirmation" class="form-input-label"><i class="icon fas fa-lock is-align-left"></i>Mot de passe <small>(Confirmation)</small></label>
            <div class="form-input-bar"></div>
            <transition name="fade">
              <span class="form-error" v-show="errors.has('password_confirmation')">{{ errors.first('password_confirmation') }}</span>
            </transition>
          </div>
        </div>
      </div>

      <div class="form-input" :class="{ 'has-error': errors.has('message') }">
        <textarea id="message" name="message" class="form-input-field" placeholder="Message..." v-validate="'required'" ></textarea>
        <label for="message" class="form-input-label"><i class="icon fas fa-comment-dots is-align-left"></i>Message</small></label>
        <div class="form-input-bar"></div>
        <transition name="fade">
          <span class="form-error" v-show="errors.has('message')" v-html="errors.first('message')"></span>
        </transition>
      </div>

      <div class="form-checkbox">
        <label>
          <input type="checkbox" name="terms" v-validate="'required'"/><i></i>I agree to the terms and conditions.
        </label>
        <transition name="fade">
          <span class="form-error" v-show="errors.has('terms')" v-html="errors.first('terms')"></span>
        </transition>
      </div>

      <button class="button float-right is-hollow is-light" type="submit">Submit</button>
    </form>

    <!-- MODAL SUBMIT -->
    <modal v-show="successModal" @close="successModal = false" centered>
      <div class="text-center">
        <i class="icon is-5x far fa-check-circle"></i>
        <h3>Success</h3>
      </div>
    </modal>
    <modal v-show="errorModal" @close="errorModal = false" centered>
      <div class="text-center">
        <i class="icon is-5x far fa-times-circle"></i>
        <h3>Error</h3>
        <p class="lead">Le formulaire contient des erreurs.</p>
      </div>
    </modal>

  </div>
</template>

<script>
import autosize from 'autosize'

export default {
  data: () => ({
    successModal: false,
    errorModal: false,
    email: '',
    nom: '',
    telephone: '',
    url: '',
    password: '',
    password_confirmation: ''
  }),
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.successModal = true
          return
        }

        this.errorModal = true
      })
    }
  },
  mounted () {
    autosize(document.querySelectorAll('textarea'))
  }
}
</script>
