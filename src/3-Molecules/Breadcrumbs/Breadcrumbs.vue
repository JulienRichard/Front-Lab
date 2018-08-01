<template>
  <nav v-if="crumbs.length > 1" class="breadcrumbs">
    <a class="button-goback" @click="goBack()"><i class="icon fas fa-angle-double-left" aria-hidden="true"></i></a>
    <ul>
    	<li v-for="(crumb, i) in crumbs" class="breadcrumbs-item">
        <router-link class="breadcrumbs-home" v-if="i < crumbs.length-1 && crumb.name === 'Front-Lab'" :to="crumb.path">
          <i class="icon di-home" aria-hidden="true"></i>
        </router-link>
        <router-link class="breadcrumbs-docs" v-else-if="crumb.name === 'Documentation'" :to="{ name: 'DocumentationIndex' }">
          Documentation
        </router-link>
    	  <router-link v-else-if="i < crumbs.length-1" :to="crumb.path">{{ crumb.name }}</router-link>
    		<span class="last" v-else style="cursor:default">{{ crumb.name }}</span>
    	</li>
    </ul>
  </nav>
</template>

<script src="./script.js"></script>
<style lang="scss" scoped>
  @import "styles.scss";
</style>
