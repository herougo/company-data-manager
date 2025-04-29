// Typescript only supports integer and string enum values, so we use
// plain old objects.

const AjvTypes = {
    StringOrNull: {
        anyOf: [
            {type: "string"},
            {type: null}
        ]
    },
    StringArray: { type: 'array', items: { type: 'string' }},
    UnknownOrString: {
        anyOf: [
            {type: "string"},
            {enum: ["unknown"]}
        ]
    },
    UnknownOrFloat32: {
        anyOf: [
            {type: "float32"},
            {enum: ["unknown"]}
        ]
    },
    UnknownOrStringArray: {
        anyOf: [
            { type: 'array', items: { type: 'string' }},
            {enum: ["unknown"]}
        ]
    }
};

export {
    AjvTypes
};