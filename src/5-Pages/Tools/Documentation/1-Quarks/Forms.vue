<template>
  <div class="wrapper">
    <h3><i class="icon fas fa-i-cursor"></i>Forms</h3>
    <p>
      Form Validation with <a class="link" href="https://baianat.github.io/vee-validate/"><strong>Vee-Validate</strong></a><br>
      Automatically adjust textarea height with <a class="link" href="http://www.jacklmoore.com/autosize/"><strong>autosize</strong></a> script.
    </p>

    <h4><i class="icon fas fa-i-cursor"></i>Text Fields</h4>
    <!-- Default Field -->
    <h5>Default</h5>
    <form class="form">
      <div class="form-input">
        <input id="text_field" name="text_field" ref="text_field" type="text" class="form-input-field" placeholder=" "/>
        <label for="text_field" class="form-input-label">Default Text field</label>
        <div class="form-input-bar"></div>
      </div>
    </form>

    <h5>Types</h5>
    <form class="form">
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
            <input id="telephone" name="telephone" type="text" class="form-input-field" placeholder=" " v-model="telephone" v-validate="{ required: false, numeric }"/>
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
    </form>

    <!-- TextArea -->
    <h5>Textarea</h5>
    <form class="form">
      <div class="form-input" :class="{ 'has-error': errors.has('message') }">
        <textarea id="message" name="message" class="form-input-field" placeholder="Message..." v-validate="'required'"></textarea>
        <label for="message" class="form-input-label"><i class="icon fas fa-comment-dots is-align-left"></i>Message</small></label>
        <div class="form-input-bar"></div>
        <transition name="fade">
          <span class="form-error" v-show="errors.has('message')" v-html="errors.first('message')"></span>
        </transition>
      </div>
    </form>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;form-input&quot; :class=&quot;{ 'has-error': errors.has('field_name') }&quot;&gt;
      &lt;input id=&quot;{field_name}&quot; name=&quot;{field_name}&quot; ref=&quot;{field_name}&quot; type=&quot;text&quot; class=&quot;form-input-field&quot; placeholder=&quot; &quot; v-validate=&quot;'{validate_rules}'&quot;/&gt;
      &lt;label for=&quot;{field_name}&quot; class=&quot;form-input-label&quot;&gt;Text Field Name&lt;/label&gt;
      &lt;div class=&quot;form-input-bar&quot;&gt;&lt;/div&gt;
      &lt;transition name="fade"&gt;
        &lt;span class=&quot;form-error&quot; v-show=&quot;errors.has('field_name')&quot; v-html=&quot;errors.first('field_name')&quot; &gt;&lt;/span&gt;
      &lt;/transition&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4><i class="icon far fa-list-alt"></i>Select</h4>
    <h5>Default</h5><br>
    <form class="form">
      <div class="form-element form-input">
        <select id="select_field" name="select_field" ref="select_field" class="form-input-field">
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
        </select>
        <label for="select_field" class="form-input-label">Select</label>
        <div class="form-input-bar"></div>
      </div>
    </form>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;form-input&quot;&gt;
      &lt;select id=&quot;{field_name}&quot; name=&quot;{field_name}&quot; ref=&quot;{field_name}&quot; class=&quot;form-input-field&quot;&gt;
        &lt;option&gt;Value 1&lt;/option&gt;
        &lt;option&gt;Value 2&lt;/option&gt;
        &lt;option&gt;Value 3&lt;/option&gt;
      &lt;/select&gt;
      &lt;label for=&quot;{field_name}&quot; class=&quot;form-input-label&quot;&gt;Select Field Name&lt;/label&gt;
      &lt;div class=&quot;form-input-bar&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
    </code-highlight>
    <hr>

    <h4><i class="icon far fa-check-circle"></i>Checkbox & Radio</h4>
    <h5>CheckBox</h5>
    <div class="row small-up-1 medium-up-2">
      <div class="column">
        <h6>Vertical list</h6>
        <ul>
          <li class="form-checkbox">
            <label>
              <input type="checkbox" checked="checked"/><i></i>Check 1
            </label>
          </li>
          <li class="form-checkbox">
            <label>
              <input type="checkbox"/><i></i>Check 2
            </label>
          </li>
          <li class="form-checkbox">
            <label>
              <input type="checkbox"/><i></i>Check 3
            </label>
          </li>
        </ul>
      </div>
      <div class="column">
        <h6>Horizontal list</h6>
        <ul class="list-horizontal">
          <li class="form-checkbox">
            <label>
              <input type="checkbox" checked="checked"/><i></i>Check 1
            </label>
          </li>
          <li class="form-checkbox">
            <label>
              <input type="checkbox"/><i></i>Check 2
            </label>
          </li>
          <li class="form-checkbox">
            <label>
              <input type="checkbox"/><i></i>Check 3
            </label>
          </li>
        </ul>
      </div>
    </div>

    <h5>Radio</h5>
    <div class="row">
      <div class="column">
        <h6>Vertical list</h6>
        <ul>
          <li class="form-radio">
            <label>
              <input type="radio" name="radio" checked="checked"/><i></i>Choice 1
            </label>
          </li>
          <li class="form-radio">
            <label>
              <input type="radio" name="radio"/><i></i>Choice 2
            </label>
          </li>
          <li class="form-radio">
            <label>
              <input type="radio" name="radio"/><i></i>Choice 3
            </label>
          </li>
        </ul>
      </div>
      <div class="column">
        <h6>Horizontal list</h6>
        <ul class="list-horizontal">
          <li class="form-radio">
            <label>
              <input type="radio" name="radio2" checked="checked"/><i></i>Choice 1
            </label>
          </li>
          <li class="form-radio">
            <label>
              <input type="radio" name="radio2"/><i></i>Choice 2
            </label>
          </li>
          <li class="form-radio">
            <label>
              <input type="radio" name="radio2"/><i></i>Choice 3
            </label>
          </li>
        </ul>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;div class=&quot;[form-checkbox / form-radio]&quot;&gt;
      &lt;label&gt;
        &lt;input type="[checkbox / radio]" name=&quot;{field_name}&quot; ref=&quot;{field_name}&quot;/&gt;
      &lt;/label&gt;
    &lt;/div&gt;
    </code-highlight>
  </div>
</template>

<script>
import autosize from 'autosize'

export default {
  mounted () {
    autosize(document.querySelectorAll('textarea'))
  }
}
</script>

<style lang="scss">

</style>
