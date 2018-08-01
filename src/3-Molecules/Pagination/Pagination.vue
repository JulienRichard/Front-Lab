<template>
  <nav class="pagination">
    <transition name="fade" mode="out-in">
      <button-icon icon="fas fa-chevron-left" rounded hollow color="light" size="small" v-if="pagination.prevPage" @click.native="$emit('prev')" class="prev-btn">
      </button-icon>
    </transition>

    <span class="pagination-stats">{{pagination.from}} - {{pagination.to}} of {{pagination.total}}</span>

    <transition name="fade" mode="out-in">
      <button-icon icon="fas fa-chevron-right" rounded hollow color="light" size="small" v-if="pagination.nextPage" @click.native="$emit('next')" class="next-btn">
      </button-icon>
    </transition>
  </nav>
</template>

<script>
export default {
  props: ['pagination']
}
</script>

<style lang="scss" scoped>
.pagination {
  display: block;
  position: relative;
  text-align: center;
  clear: both;
  overflow: hidden;

  .button-icon {
    position: absolute;
    @include center(y);
    margin: 0;
  }

  .prev-btn {
    left: 0;
  }

  .next-btn {
    right: 0;
  }
}

.pagination-stats {
  line-height: rhythm(2);
}
</style>
