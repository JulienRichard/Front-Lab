<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon far fa-flag"></i>Icons</h3>
      <h4>Fonts</h4>
      <div class="row">
        <div class="column small-12 medium-6">
          <h5>FontAwesome</h5>
          <i class="icon far fa-flag"></i>
          <i class="icon fas fa-link"></i>
          <i class="icon far fa-clock"></i>
          <i class="icon fas fa-phone"></i>
          <i class="icon fas fa-tags"></i>
          <i class="icon fas fa-star"></i>
          <br><br>
          <code-highlight type="html" title="Markup">
          &lt;i class="icon [far / fas / fab] fa-{icon-name}"&gt;&lt;/i&gt;
          </code-highlight>
        </div>
        <div class="column small-12 medium-6">
          <h5>Dripicons</h5>
          <i class="icon di-flag"></i>
          <i class="icon di-link"></i>
          <i class="icon di-clock"></i>
          <i class="icon di-phone"></i>
          <i class="icon di-tags"></i>
          <i class="icon di-star"></i>
          <br><br>
          <code-highlight type="html" title="Markup">
          &lt;i class="icon di-{icon-name}"&gt;&lt;/i&gt;
          </code-highlight>
        </div>
      </div>
      <hr>

      <h4>Sizes</h4>
      <i class="icon di-flag is-align-left"></i><br>
      <i class="icon fas fa-link is-lg is-align-left"></i><br>
      <i class="icon di-clock is-2x is-align-left"></i><br>
      <i class="icon fas fa-phone is-3x is-align-left"></i><br>
      <code-highlight type="html" title="Markup">
      &lt;i class="icon {icon-class} [is-lg / is-2x / is-3x]"&gt;&lt;/i&gt;
      </code-highlight>
      <hr>

      <h4>Fixed Width</h4>
      <div class="row">
        <div class="column">
          <ul>
            <li><i class="icon di-home is-fw"></i>Item 1</li>
            <li><i class="icon di-tags is-fw"></i>Item 2</li>
            <li><i class="icon di-warning is-fw"></i>Item 3</li>
            <li><i class="icon di-cloud is-fw"></i>Item 4</li>
            <li><i class="icon di-ticket is-fw"></i>Item 5</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li><i class="icon di-home is-fw is-2x"></i>Item 1</li>
            <li><i class="icon di-tags is-fw is-2x"></i>Item 2</li>
            <li><i class="icon di-warning is-fw is-2x"></i>Item 3</li>
          </ul>
        </div>
      </div>
      <code-highlight type="html" title="Markup">
      &lt;i class="icon {icon-class} is-fw"&gt;&lt;/i&gt;
      </code-highlight>
      <hr>

      <h4>Transformations</h4>
      <ul>
        <li><i class="icon fas fa-feather-alt is-fw"></i>normal</li>
        <li><i class="icon fas fa-feather-alt is-fw is-rotate-90"></i>is-rotate-90</li>
        <li><i class="icon fas fa-feather-alt is-fw is-rotate-180"></i>is-rotate-180</li>
        <li><i class="icon fas fa-feather-alt is-fw is-rotate-270"></i>is-rotate-270</li>
        <li><i class="icon fas fa-feather-alt is-fw is-flip-horizontal"></i>is-flip-horizontal</li>
        <li><i class="icon fas fa-feather-alt is-fw is-flip-vertical"></i>is-flip-vertical</li>
      </ul>
      <code-highlight type="html" title="Markup">
      &lt;i class="icon {icon-class} [is-rotate-90 | is-rotate-180 | is-rotate-270 | is-flip-horizontal | is-flip-vertical]"&gt;&lt;/i&gt;
      </code-highlight>
      <hr>

      <h4>Animations</h4>
      <h5>Spin</h5>
      <p>
        <i class="icon fas fa-spinner is-spin is-2x"></i>
        <i class="icon fas fa-cog is-spin is-2x"></i>
        <i class="icon far fa-star is-spin is-2x"></i>
      </p>

      <h5>Pulse</h5>
      <p>
        <i class="icon fas fa-spinner is-pulse is-2x"></i>
      </p>
      <code-highlight type="html" title="Markup">
      &lt;i class="icon {icon-class} [is-spin | is-pulse]"&gt;&lt;/i&gt;
      </code-highlight>
      <hr>

      <h4>Pull</h4>
      <h5>Left</h5>
      <p>
        <small>
          <i class="icon far fa-flag is-2x is-pull-left"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </small>
      </p>
      <p>
        <i class="icon far fa-flag is-3x is-pull-left"></i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="lead">
        <i class="icon far fa-flag is-4x is-pull-left"></i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <h5>Right</h5>
      <p class="text-right">
        <small>
          <i class="icon far fa-flag is-2x is-pull-right"></i>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </small>
      </p>
      <p class="text-right">
        <i class="icon far fa-flag is-3x is-pull-right"></i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p class="lead text-right">
        <i class="icon far fa-flag is-4x is-pull-right"></i>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <code-highlight type="html" title="Markup">
      &lt;p&gt;
        &lt;i class="icon {icon-class} [is-pull-left | is-pull-right]"&gt;&lt;/i&gt;
        ...
      &lt;/p&gt;
      </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
