import utils from "./assets/js/utils";
import Tiles from "./assets/js/Tiles";

export default class ImageTiling {
  constructor() {}
}

ImageTiling.install = function (Vue) {
  Vue.directive('image-tiling', {

    inserted (el, binding, vnode) {
      let tiles = undefined;
      let renderId;
      let elms = [];
      if (typeof binding.value === 'object') {
        const { width, height, scale, move } = binding.value;
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

        function render(){
          let next = tiles.next(true);
          setStyle(elms[Math.floor(Math.random() * elms.length)].cloneNode(true), next, container0);
          renderId = window.requestAnimationFrame(render);
          let height = Number(el.style.height.replace( /px/g , "" ))
          if(tiles.currentY >= height){
            window.cancelAnimationFrame(renderId);
            render2();
          }
        };

        let maxY = NaN;
        function render2(){
          let next = tiles.next(false);
          if(isNaN(maxY)===true){
            maxY = next.maxY;
          }
          if(maxY > next.y){
            setStyle(elms[Math.floor(Math.random() * elms.length)].cloneNode(true), next, container0);
            renderId = window.requestAnimationFrame(render2);
          }else{
            window.cancelAnimationFrame(renderId);
            container0.style.height = (maxY + scale) + 'px';
            container1 = container0.cloneNode(true);
            el.appendChild(container1);
            if(move)render3();
          }
        }

        let targetY = 0;
        function render3(){
          targetY--;
          container0.style.transform = "translateY(" + targetY + "px)";
          container1.style.transform = "translateY(" + targetY + "px)";
          if(targetY<=-(maxY)){
            targetY = 0;
          }
          renderId = window.requestAnimationFrame(render3);
        }
        render();
      }
    },

    unbind (el, binding, vnode) {
      window.cancelAnimationFrame(renderId);
    }
  });
};