<template>
	<li :class="{'menu-text': !to && !anchor}">

		<router-link v-if="to" :to="to">
      <i v-if="iconLeft" :class="iconLeft" class="icon is-align-left" aria-hidden="true"></i>
      <i v-if="iconTop" :class="iconTop" class="icon is-align-top" aria-hidden="true"></i>
      <span><slot></slot></span>
      <i v-if="iconRight" :class="iconRight" class="icon is-align-right" aria-hidden="true"></i>
    </router-link>

    <div v-else>
      <i v-if="iconLeft" :class="iconLeft" class="icon is-align-left" aria-hidden="true"></i>
      <i v-if="iconTop" :class="iconTop" class="icon is-align-top" aria-hidden="true"></i>
      <span><slot></slot></span>
      <i v-if="iconRight" :class="iconRight" class="icon is-align-right" aria-hidden="true"></i>
    </div>

		<slot v-else></slot>
	</li>
</template>

<script type="text/javascript">
export default {
  name: 'menu-foundation-item',
  props: {
    to: {},
    anchor: {
      type: String,
      default: '',
      note: 'Anchor Link'
    },
    iconLeft: {
      type: String,
      default: '',
      note: 'Icon at left'
    },
    iconRight: {
      type: String,
      default: '',
      note: 'Icon at right'
    },
    iconTop: {
      type: String,
      default: '',
      note: 'Icon at top'
    }
  }
}
</script>

<style lang="scss">

</style>
