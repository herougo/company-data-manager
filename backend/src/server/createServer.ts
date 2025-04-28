
// Adapted from https://socket.io/docs/v4/server-api/#serverattachhttpserver-options
const http = require("http");
const CONFIG = require("../config");

const createServer = (app, diContainer) => {
    const httpServer = http.createServer(app);
    
    return httpServer;
}

module.exports = createServer;
