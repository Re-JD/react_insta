const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/insta',
        createProxyMiddleware({
            target: 'http://13.209.87.177:8000',
            changeOrigin: true,
        })
    )
}