<template>
  <section v-if="isActive" class="tab-panel"
    :aria-hidden="! isActive"
    :id="hash"
    role="tabpanel"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    id: { default: null },
    name: { required: true },
    icon: { default: null }
  },
  data: () => ({
    isActive: false,
    isVisible: true
  }),
  computed: {
    hash () {
      return this.id ? '#' + this.id : '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  }
}
</script>
