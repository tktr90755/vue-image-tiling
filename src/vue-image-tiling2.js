import Ticker from "./assets/js/Ticker";
import Tiles from "./assets/js/Tiles";
import SlideButton from "@/components/SlideButton.vue";
import Vue from 'vue';

export default class ImageTiling {
  constructor() {}
}
ImageTiling.install = function (Vue) {
  Vue.directive('image-tiling2', {

    inserted (el, binding, vnode) {

      let slideButton = Vue.extend(SlideButton)
      let instance = new slideButton({
        propsData: {
          href : '@/assets/img/00.jpg',
          text  : 'White'
        }
      })
      instance.$mount(el)

      return;
      let render0Id = 'render0_' + new Date().getTime().toString(16) + Math.floor(99999 * Math.random()).toString(16);
      let render1Id = 'render1_' + new Date().getTime().toString(16) + Math.floor(99999 * Math.random()).toString(16);
      let render2Id = 'render2_' + new Date().getTime().toString(16) + Math.floor(99999 * Math.random()).toString(16);
      
      let tiles = undefined;
      let elms = [];

      if (typeof binding.value === 'object') {
        const { width, height, scale, move, speed } = binding.value;
        tiles = (tiles === undefined)?new Tiles(width, scale):tiles;

        for(let i in vnode.children){
          elms.push(vnode.children[i].elm)
          el.removeChild(vnode.children[i].elm)
        }
        // el.style.position = 'relative';
        el.style.margin = "0px";
        el.style.overflow = "hidden";
        el.style.width = (width - scale) + 'px';
        el.style.height = height + 'px';

        function createContainer(className){
          let container = document.createElement('div');
          container.className = className;
          container.style.position = 'relative';
          container.style.margin = -scale + "px";
          container.style.overflow = "hidden";
          container.style.width = width + 'px';
          container.style.height = height + 'px';
          el.appendChild(container);
          return container;
        }
        let container0 = createContainer('container0');
        let container1;
        
        function setStyle(elm, tile, container){
          // function setImgStyle(children, tile) {
          //   if(children === undefined) return;
          //   for(let i in children){
          //     if(children[i].tag === 'img'){
          //       let _elm = children[i].elm;
          //       _elm.style.width = tile.width + 'px';
          //       _elm.style.height = tile.height + 'px';
          //       _elm.style.objectFit = 'cover';
          //     }else{
          //       setImgStyle(children[i].children, tile)
          //     }
          //   }
          // };
          // setImgStyle(vnode.children, tile);
          const style0 = elm.style;
          const style1 = elm.children[0].children[0].style;
          style0.position = 'absolute';
          style0.left = tile.x + 'px';
          style0.top = tile.y + 'px';
          style0.width = tile.width + 'px';
          style0.height = tile.height + 'px';
          style0.overflow = 'hidden';
          style0.listStyle = 'none';
          style1.width = tile.width + 'px';
          style1.height = tile.height + 'px';
          style1.objectFit = 'cover';
          container.appendChild(elm);
        }

        function render0(){
          let next = tiles.next(true);
          setStyle(elms[Math.floor(Math.random() * elms.length)].cloneNode(true), next, container0);
          let height = Number(el.style.height.replace( /px/g , "" ))
          if(tiles.currentY >= height){
            Ticker.kill(render0Id);
            Ticker.add(render1, render1Id);
          }
        };

        let maxY = NaN;
        function render1(){
          let next = tiles.next(false);
          if(isNaN(maxY)===true){
            maxY = next.maxY;
          }
          if(maxY > next.y){
            setStyle(elms[Math.floor(Math.random() * elms.length)].cloneNode(true), next, container0);
          }else{
            container0.style.height = (maxY + scale) + 'px';
            container1 = container0.cloneNode(true);
            el.appendChild(container1);

            Ticker.kill(render1Id);
          }
        }

        let targetY = 0;
        function render2(){
          let _speed = (speed)?speed:1;
          targetY = targetY - _speed;
          container0.style.transform = "translateY(" + targetY + "px)";
          if(container1)container1.style.transform = "translateY(" + targetY + "px)";
          if(targetY<=-(maxY)){
            targetY = 0;
          }
        }
        Ticker.killAll();
        Ticker.add(render0, render0Id);
        if(move)Ticker.add(render2, render2Id);
        
      }
    },

    unbind (el, binding, vnode) {
      Ticker.killAll();
    }
  });
};