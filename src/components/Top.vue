<template>
  <div id="top">
    <router-view/>
		<ul>
			<li><router-link to="/bemo_basic">bemo_basic</router-link></li>
			<li><router-link to="/bemo_advanced">bemo_advanced</router-link></li>
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
