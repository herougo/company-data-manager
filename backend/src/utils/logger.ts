
class Logger {
    error(text: string) {
        console.error(text);
    }

    log(text: string) {
        console.log(text);
    }

    warn(text: string) {
        console.warn(text);
    }

    debug(text: string) {
        console.debug(text);
    }
}

export default Logger;
