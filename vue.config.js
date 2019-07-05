module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-image-tiling/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  },
  devServer: {
    public: b6d40d56.ngrok.io,
  }
}