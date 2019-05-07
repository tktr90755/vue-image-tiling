<template>
  <DemoBasic />
</template>

<script>
import Top from '@/components/Top.vue'
import DemoBasic from '@/components/DemoBasic.vue'
export default {
  name: 'app',
  components: {
    DemoBasic
  }
}
</script>

<style lang="scss" scoped>
body{
  margin:0px;
  background-color: #fff;
}
</style>
