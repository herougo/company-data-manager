
import { ExpressError } from "../../../utils/errors/expressErrors";
import DI_NAMES from "../../dependency-injection/names";

const applyErrorHandler = (app, diContainer) => {
    const logger = diContainer.resolve(DI_NAMES.logger);

    const errorHandler = (err, req, res, next) => {
        logger.error(err);

        if (!(err instanceof ExpressError)) {
            logger.error(`error handler saw a non-express error: ${err}`);
            return res.status(500).send();
        }

        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    };

    app.use(errorHandler);
};

export default applyErrorHandler;
