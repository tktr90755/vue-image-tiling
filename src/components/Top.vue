<template>
  <div id="top">
    <router-view/>
		<ul>
			<li><router-link to="/vue-image-tiling/demo_basic">demo_basic</router-link></li>
			<!-- <li><router-link to="/demo_advanced">demo_advanced</router-link></li> -->
		</ul>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style lang="scss" scoped>

</style>
