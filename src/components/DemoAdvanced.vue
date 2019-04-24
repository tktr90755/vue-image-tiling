<template>
  <div id="demoAdvanced">
    <ul v-image-tiling="{ width:1600, height:600, scale:40, move:true }">
      <li><a href=""><img src="https://3.bp.blogspot.com/-mq0hdaR-ZcY/XG4GXM_RphI/AAAAAAABRqw/8tlGYKiJOXQTZnkr1UWBoGmPtDIBivEzgCLcBGAs/s800/ahiruguchi_woman.png"></a></li>
      <li><a href=""><img src="https://4.bp.blogspot.com/-Hbl_buIRu5o/XG4GXOwvXLI/AAAAAAABRq0/hEWfV0FE5IEG66wOidqBlI5IA0e28QFGgCLcBGAs/s800/ahiruguchi_man.png"></a></li>
      <li><a href=""><img src="https://3.bp.blogspot.com/-lQV3y6ENfrQ/XAnwFqYcITI/AAAAAAABQuA/Jwa8HXMUuQYFY1GP_jd7_vbGAdBM5UV2gCLcBGAs/s800/question_head_gakuzen_girl.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-dGYVe-wn-oc/XAnwFGSSrFI/AAAAAAABQt8/pDKfwLvwCE0GLKggGqjUoQEOWljKVw-CgCLcBGAs/s800/question_head_gakuzen_boy.png"></a></li>
      <li><a href=""><img src="https://1.bp.blogspot.com/-DlPaDDHGVJ8/W959vMvy7kI/AAAAAAABP4M/6cWK-kWiIe4ggdCKoH4RPy6PfQu46tvvACLcBGAs/s800/pose_koshi_nukeru_kowai_woman.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-1VrUWeLF8gc/W959ugjsTHI/AAAAAAABP4I/vTVKrRMiAtwYHm_V3zZyJ0qgwmCPIkDFwCLcBGAs/s800/pose_koshi_nukeru_kowai_man.png"></a></li>
      <li><a href=""><img src="https://4.bp.blogspot.com/-q4yJAlH2rbI/W-0gXpjIhTI/AAAAAAABQJE/7NIoUm8rK5I7mvNdkgT4Wy2wtEvjmpTnACLcBGAs/s800/angry_fukureru_girl.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-6iIUl-9hmVY/W-0gXQBaPjI/AAAAAAABQJA/OQPFQ8RJJTgNfWqcKPLb65nljFs-iMxBQCLcBGAs/s800/angry_fukureru_boy.png"></a></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'demoAdvanced'
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
  border: 6px solid #fff;
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
