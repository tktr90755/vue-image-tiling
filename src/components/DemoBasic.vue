<template>
  <div id="demoBasic">
    <ul v-image-tiling="{ width:800, height:600, scale:40, move:true }">
      <li><a href=""><img src="@/assets/img/00.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/01.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/02.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/03.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/04.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/05.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/06.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/07.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/08.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/09.jpg"></a></li>
      <li><a href=""><img src="@/assets/img/11.jpg"></a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'demoBasic'
}
</script>

<style lang="scss" scoped>
a{
  opacity: 1;
}
a:hover{
  opacity: 0.75;
}
img{
  border: 1px solid #000;
  -webkit-animation: fadein 0.5s linear 0s 1;
}
@-webkit-keyframes fadein {
	0%{
		opacity:0;
	}
	75%{
		opacity:0.5;
	}
	100% {
		opacity:1;
	}
}
</style>
