import dotenv from "dotenv";
import { Environments } from "../utils/enums";
import { InvalidConfigError, UndefinedEnvironment } from "../utils/errors/internalErrors";

const buildConfig = () => {
    const nodeEnv = process.env.NODE_ENV;
    const envPath = nodeEnv === Environments.Test ? "test.env" : ".env";

    dotenv.config({path: envPath});

    const config = {
        nodeEnv,
        serverPort: process.env.SERVER_PORT,
        clientUrl: process.env.CLIENT_URL,
        corsOrigin: process.env.CLIENT_URL,
        mongoURL: process.env.MONGO_URL,
        jwtSecretKey: process.env.JWT_SECRET_KEY
    };

    if (nodeEnv === undefined) {
        throw new UndefinedEnvironment();
    }

    if (config.serverPort === undefined) {
        throw new InvalidConfigError();
    }

    return config;
};

const CONFIG = buildConfig();

export default CONFIG;