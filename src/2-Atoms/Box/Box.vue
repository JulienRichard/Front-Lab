<template lang="html">
  <div v-if="!closable" class="box" :class="[
  color ? 'is-' + color : '',
  size ? 'is-' + size : ''
  ]">
    <slot></slot>
  </div>

  <div v-else-if="closable" class="box" :class="[
  color ? 'is-' + color : '',
  size ? 'is-' + size : ''
  ]" data-closable>
    <slot></slot>
    <button-close></button-close>
  </div>
</template>

<script src="./script.js"></script>
