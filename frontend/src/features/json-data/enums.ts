// Typescript only supports integer and string enum values, so we use
// plain old objects.

const AjvTypes = {
    StringOrNull: { type: ["string", "null"] },
    StringArray: { type: 'array', items: { type: 'string' }},
    UnknownOrString: {
        anyOf: [
            {type: "string"},
            {type: "string", enum: ["unknown"]}
        ]
    },
    UnknownOrFloat32: {
        anyOf: [
            {type: "string"},
            {type: "string", enum: ["unknown"]}
        ]
    },
    UnknownOrStringArray: {
        anyOf: [
            { type: 'array', items: { type: 'string' }},
            {type: "string", enum: ["unknown"]}
        ]
    }
};

export {
    AjvTypes
};