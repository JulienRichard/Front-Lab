<template>
  <div>
    <div class="wrapper">
      <h3><i class="icon fas fa-bars"></i>Menu basic</h3>
      <ul class="menu">
        <li class="menu-item">
          <router-link to="/Blog">Item 1</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/Blog">Item 2</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/Blog">Item 3</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/Blog">Item 4</router-link>
        </li>
      </ul>
      <code-highlight type="html" title="Markup">
      &lt;ul class="menu"&gt;
        &lt;li class="menu-item"&gt;
          &lt;router-link to=""&gt;Item 1&lt;/router-link&gt;
        &lt;/li&gt;
        &lt;li class="menu-item"&gt;
          &lt;router-link to=""&gt;Item 1&lt;/router-link&gt;
        &lt;/li&gt;
        &lt;li class="menu-item"&gt;
          &lt;router-link to=""&gt;Item 2&lt;/router-link&gt;
        &lt;/li&gt;
        &lt;li class="menu-item"&gt;
          &lt;router-link to=""&gt;Item 3&lt;/router-link&gt;
        &lt;/li&gt;
        &lt;li class="menu-item"&gt;
          &lt;router-link to=""&gt;Item 4&lt;/router-link&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
      </code-highlight>

    <h4>Menu text</h4>
    <ul class="menu">
      <li class="menu-item">Menu Text</li>
      <li class="menu-item">
        <router-link to="/Blog">Item 1</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 2</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 3</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 4</router-link>
      </li>
    </ul>
    <code-highlight type="html" title="Markup">
    &lt;ul class="menu"&gt;
      &lt;li class="menu-item"&gt;
        Menu text
      &lt;/li&gt;
      ...
    &lt;/ul&gt;
    </code-highlight>

    <h4>Alignments</h4>
    <ul class="menu is-align-center">
      <li class="menu-item">
        <router-link to="/Blog">Item 1</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 2</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 3</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 4</router-link>
      </li>
    </ul>
    <ul class="menu is-align-right">
      <li class="menu-item">
        <router-link to="/Blog">Item 1</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 2</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 3</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 4</router-link>
      </li>
    </ul>
    <ul class="menu is-expanded">
      <li class="menu-item">
        <router-link to="/Blog">Item 1</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 2</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 3</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">Item 4</router-link>
      </li>
    </ul>
    <code-highlight type="html" title="Markup">
    &lt;ul class="menu is-align-center | is-align-right | is-expanded"&gt;
      ...
    &lt;/ul&gt;
    </code-highlight>

    <h4>Vertical</h4>
    <div class="row align-center">
      <div class="column small-12 medium-4 large-3">
        <ul class="menu is-vertical is-align-center">
          <li class="menu-item">
            <router-link to="/Blog">Item 1</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Blog">Item 2</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Blog">Item 3</router-link>
          </li>
          <li class="menu-item">
            <router-link to="/Blog">Item 4</router-link>
          </li>
        </ul>
      </div>
    </div>
    <code-highlight type="html" title="Markup">
    &lt;ul class="menu is-vertical is-align-center"&gt;
      ...
    &lt;/ul&gt;
    </code-highlight>

    <h4>Icons</h4>
    <ul class="menu">
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-left"></i>
          Item 1
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-left"></i>
          Item 2
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-left"></i>
          Item 3
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-left"></i>
          Item 4
        </router-link>
      </li>
    </ul>
    <ul class="menu align-right">
      <li class="menu-item">
        <router-link to="/Blog">
          Item 1
          <i class="icon fas fa-flag-checkered is-align-right"></i>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          Item 2
          <i class="icon fas fa-flag-checkered is-align-right"></i>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          Item 3
          <i class="icon fas fa-flag-checkered is-align-right"></i>
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          Item 4
          <i class="icon fas fa-flag-checkered is-align-right"></i>
        </router-link>
      </li>
    </ul>
    <ul class="menu align-center">
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 1
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 2
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 3
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 4
        </router-link>
      </li>
    </ul>
    <ul class="menu is-expanded">
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 1
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 2
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 3
        </router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Blog">
          <i class="icon fas fa-flag-checkered is-align-top"></i>
          Item 4
        </router-link>
      </li>
    </ul>
    <code-highlight type="html" title="Markup">
    &lt;ul class="menu"&gt;
      &lt;li class="menu-item"&gt;
        &lt;router-link to=""&gt;
          &lt;i class="icon {icon-name} [ is-align-left | is-align-right | is-align-top]"&gt;&lt;/i&gt;
        &lt;/router-link&gt;
      &lt;/li&gt;
    &lt;/ul&gt;
    </code-highlight>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
