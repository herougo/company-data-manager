import express, { Application } from "express";
import cors from "cors";
import CONFIG from "../../config";
import DependencyInjectionContainer from "../dependency-injection/container";

const applyMiddleware = (app: Application, diContainer: DependencyInjectionContainer) => {
    // transforms req.body from string to json if json data is passed and
    // content-type is application/json
    app.use(express.json());
    
    // URL-encoded data will be parsed using the
    // - query-string library
    // instead of the
    // - qs library (allows for nested object query strings)
    // Setting to false seems to make things simpler
    app.use(express.urlencoded({extended: false}));

    // this prevents BROWSER fetch/axios requests from origins outside
    // CONFIG.corsOrigin
    app.use(cors({
        origin: CONFIG.corsOrigin
    }));
}

export default applyMiddleware;