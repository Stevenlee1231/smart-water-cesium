const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: require("craco-cesium")(),
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "rgb(0,82,204)",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  // devServer:{
  //   proxy:{
  //     "/api":{
  //       target:"http://103.118.40.123:9999",
  //       changeOrigin:true,
  //       pathRewrite:{
  //         '^/pai':""
  //       }
  //     }
  //   }
  // }
  devServer: {
    proxy: {
      "/api": {
        target: "http://103.118.40.123:9999",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
