const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        "/api",
        createProxyMiddleware({
            target:"https://1232-211-194-113-34.ngrok-free.app",
            changeOrigin:true,
            secure: false,
        })
    );
};