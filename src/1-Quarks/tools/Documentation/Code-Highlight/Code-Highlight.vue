<template lang="html">
  <div class="highlight-code">
    <tag v-if="title === 'Markup'" class="code-language" :class="type" icon="fas fa-code">{{ title }}</tag>
    <tag v-else class="code-language" :class="type" icon="fas fa-cog">{{ title }}</tag>
    <vk-docs-code v-if="title === 'Markup'" :class="type">
      <slot></slot>
    </vk-docs-code>
    <vk-docs-code v-else :class="type">
      <slot></slot>
    </vk-docs-code>
  </div>
</template>

<script src="./script.js"></script>
<style lang="scss">
  @import "styles.scss";
</style>
