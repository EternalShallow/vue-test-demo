
module.exports = {
  proxy: {
    "/api": {
      target: "http://linktoc.proxy/mif",
      source: false,
      changeOrigin: true,
      pathRewrite: {
        "^/api": ""
      }
    }
  }
}
