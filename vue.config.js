const path = require("path");
module.exports = {
    pluginOptions: {
        "style-resources-loader": {
          preProcessor: "less",
          patterns: [path.resolve(__dirname, "src/global.less")]
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico'
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/alice/'
    : '/'
};