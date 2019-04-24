<template>
  <div id="demoAdvanced">
    <!-- <ul v-image-tiling="{ width:800, height:600, scale:40, move:true, speed:0.5 }">
      <li><a href=""><img src="https://3.bp.blogspot.com/-mq0hdaR-ZcY/XG4GXM_RphI/AAAAAAABRqw/8tlGYKiJOXQTZnkr1UWBoGmPtDIBivEzgCLcBGAs/s800/ahiruguchi_woman.png"></a></li>
      <li><a href=""><img src="https://4.bp.blogspot.com/-Hbl_buIRu5o/XG4GXOwvXLI/AAAAAAABRq0/hEWfV0FE5IEG66wOidqBlI5IA0e28QFGgCLcBGAs/s800/ahiruguchi_man.png"></a></li>
      <li><a href=""><img src="https://3.bp.blogspot.com/-lQV3y6ENfrQ/XAnwFqYcITI/AAAAAAABQuA/Jwa8HXMUuQYFY1GP_jd7_vbGAdBM5UV2gCLcBGAs/s800/question_head_gakuzen_girl.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-dGYVe-wn-oc/XAnwFGSSrFI/AAAAAAABQt8/pDKfwLvwCE0GLKggGqjUoQEOWljKVw-CgCLcBGAs/s800/question_head_gakuzen_boy.png"></a></li>
      <li><a href=""><img src="https://1.bp.blogspot.com/-DlPaDDHGVJ8/W959vMvy7kI/AAAAAAABP4M/6cWK-kWiIe4ggdCKoH4RPy6PfQu46tvvACLcBGAs/s800/pose_koshi_nukeru_kowai_woman.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-1VrUWeLF8gc/W959ugjsTHI/AAAAAAABP4I/vTVKrRMiAtwYHm_V3zZyJ0qgwmCPIkDFwCLcBGAs/s800/pose_koshi_nukeru_kowai_man.png"></a></li>
      <li><a href=""><img src="https://4.bp.blogspot.com/-q4yJAlH2rbI/W-0gXpjIhTI/AAAAAAABQJE/7NIoUm8rK5I7mvNdkgT4Wy2wtEvjmpTnACLcBGAs/s800/angry_fukureru_girl.png"></a></li>
      <li><a href=""><img src="https://2.bp.blogspot.com/-6iIUl-9hmVY/W-0gXQBaPjI/AAAAAAABQJA/OQPFQ8RJJTgNfWqcKPLb65nljFs-iMxBQCLcBGAs/s800/angry_fukureru_boy.png"></a></li>
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
    </ul> -->
    <!-- <SlideButton :href="'@/assets/img/00.jpg'" :text="'00'"/> -->
    <ul v-image-tiling2="{ width:800, height:600, scale:40, move:true, speed:0.5 }">
      <li><a href=""><img src="@/assets/img/11.jpg"></a></li>
    </ul>
    <div id="demoAdvanced2"></div>
    途中
  </div>
</template>

<script>
import Vue from 'vue';
import * as utils from "../assets/js/utils";
import { TweenLite } from "gsap/TweenMax";
import SlideButton from "./SlideButton.vue";
export default {
  name: 'demoAdvanced',
  components: {
    SlideButton
  },
  created(){

    document.addEventListener("DOMContentLoaded", () => {
      /*
      var Profile = Vue.extend({
        template: '<a class="aaa" @mouseenter="hover" @mouseleave="hover" v-bind:href="href">aaaaaaaaa<div ref="slide" class="slide"></div>{{text}}</a>',
        name: "SlideButton",
        props: {
          href: String,
          text: String
        },
        methods: {
          hover: function(event) {
            let style = utils.createStyle(event);
            console.log(style)
            TweenLite.fromTo(this.$refs.slide, 0.18, style.from, style.to);
          }
        }
      })
      var profile = new Profile({
        props: {
          href : '@/assets/img/00.jpg',
          text  : 'White'
        }  
      })
      profile.$mount('#demoAdvanced2')
      */
     
      // let slideButton = Vue.extend(SlideButton)
      // let instance = new slideButton({
      //   propsData: {
      //     href : '@/assets/img/00.jpg',
      //     text  : 'White'
      //   }
      // })
      // instance.$mount('#demoAdvanced2')

      // var Profile = Vue.extend({
      //   template: SlideButton
      // })
      // var profile = new Profile({
      //   props: {
      //     href : '@/assets/img/00.jpg',
      //     text  : 'White'
      //   }  
      // })
      // profile.$mount('#demoAdvanced2')

    })

  },
  mounted(){

  }
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
