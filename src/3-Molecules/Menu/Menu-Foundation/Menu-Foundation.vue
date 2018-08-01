<template>
<div v-if="type == undefined && align == 'center'" :class="{'is-align-center': align == 'center'}">
  <ul v-if="!isSubmenu" class="menu" :class="{
    'is-dropdown': type == 'dropdown',
    'is-vertical': isVerticalMenu,
    'is-align-right': align == 'right',
    'is-align-center': align == 'center'
    }" v-bind="dataAttribute">
    <slot></slot>
  </ul>
  <li v-else>
    <router-link v-if="to" :to="to">{{title}}
      <slot name="title"></slot>
    </router-link>
    <a v-else>{{title}}<slot name="title"></slot></a>
    <ul class="menu" :class="{
      'is-nested': isSubmenu,
      'is-vertical': isVerticalMenu
      }">
      <slot></slot>
    </ul>
  </li>
</div>

<ul v-else-if="!isSubmenu" class="menu" :class="{
  'is-dropdown': type == 'dropdown',
  'is-vertical': isVerticalMenu,
  'is-align-right': align == 'right',
  'is-align-center': align == 'center',
  'is-expanded': align == 'expanded'
  }" v-bind="dataAttribute">
  <slot></slot>
</ul>

<li v-else>
  <router-link v-if="to" :to="to">
    <slot name="beforetitle"></slot>
    {{title}}
    <slot name="aftertitle"></slot>
  </router-link>
  <a v-else>
    <slot name="beforetitle"></slot>
    {{title}}
    <slot name="aftertitle"></slot>
  </a>
  <ul class="menu" :class="{
    'is-nested': isSubmenu,
    'is-vertical': isVerticalMenu
    }">
    <slot></slot>
  </ul>
</li>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import 'dropdown';
  @import 'accordion';
  @import 'drilldown';
</style>
