# vue-image-tiling 
設定したulの中に含まれているimgを取得してタイリングの配置を実現するカスタムディレクティブ

[DEMO](https://tktr90755.github.io/vue-image-tiling/)

## Install
```
npm install git+https://github.com/tktr90755/vue-image-tiling.git
```

## Usage
```js
import VueImageTiling from './vue-image-tiling'
Vue.use(VueImageTiling)
```

```vue
<ul v-image-tiling="{ width:1600, height:1600, scale:40, move:true }">
```

---
## Vue CLI npm script

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```