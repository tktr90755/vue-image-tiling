<template>
  <div id="app">
    <ul v-image-tiling="{ width:1600, height:1600, scale:40, move:true }">
      <li><a href=""><img src="./assets/img/00.jpg"></a></li>
      <li><a href=""><img src="./assets/img/01.jpg"></a></li>
      <li><a href=""><img src="./assets/img/02.jpg"></a></li>
      <li><a href=""><img src="./assets/img/03.jpg"></a></li>
      <li><a href=""><img src="./assets/img/04.jpg"></a></li>
      <li><a href=""><img src="./assets/img/05.jpg"></a></li>
      <li><a href=""><img src="./assets/img/06.jpg"></a></li>
      <li><a href=""><img src="./assets/img/07.jpg"></a></li>
      <li><a href=""><img src="./assets/img/08.jpg"></a></li>
      <li><a href=""><img src="./assets/img/09.jpg"></a></li>
      <li><a href=""><img src="./assets/img/11.jpg"></a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    innerWidth() {
      return window.innerWidth;
    },
  }
}
</script>

<style>
body {

}
ul{
  border: 1px solid #000;
}
li{
  border: 1px solid #000;
}
a{
  opacity: 1;
}
a:hover{
  opacity: 0.75;
}
</style>
