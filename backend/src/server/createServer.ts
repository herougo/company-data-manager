
import http from "http";

const createServer = (app, diContainer) => {
    const httpServer = http.createServer(app);
    
    return httpServer;
}

export default createServer;
