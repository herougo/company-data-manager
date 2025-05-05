import fs from 'fs';

const readJsonFile = (path: string): object => {
    const data = fs.readFileSync(path).toString();

    return JSON.parse(data);
}

export {
    readJsonFile
}