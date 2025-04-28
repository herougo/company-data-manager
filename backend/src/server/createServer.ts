
import { Application } from "express";
import http from "http";
import DependencyInjectionContainer from "./dependency-injection/container";

const createServer = (app: Application, diContainer: DependencyInjectionContainer) => {
    const httpServer = http.createServer(app);
    
    return httpServer;
}

export default createServer;
