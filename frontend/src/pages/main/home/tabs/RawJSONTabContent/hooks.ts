import { validate } from "@/features/json-data";
import React, { useState } from "react";
import { ValidationState } from "./types";


const useRawJSONTabContentPropData = () => {
    const [content, setContent] = useState('');
    const [validationState, setValidationState] = useState<string>(ValidationState.Unvalidated);
    const [validationErrors, setValidationErrors] = useState<object[]>([]);

    const textareaOnInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setContent(e.target.value);
        setValidationState(ValidationState.Unvalidated);
    };

    const validateBtnOnClick = (): void => {
        let jsonData = null;
        
        try {
            jsonData = JSON.parse(content);
        } catch (ex) {
            setValidationState(ValidationState.Error);
            if (ex instanceof Error) {
                setValidationErrors([{message: ex.message}]);
            } else {
                setValidationErrors([]);
            }
            return;
        }

        const { valid, errors } = validate(jsonData);
        
        if (valid) {
            setValidationState(ValidationState.Validated);
            setValidationErrors([]);
        } else {
            setValidationState(ValidationState.Error);
            setValidationErrors(errors);
        }
    }

    return {
        content,
        setContent,
        validationState,
        setValidationState,
        validationErrors,
        setValidationErrors,
        textareaOnInput,
        validateBtnOnClick
    }
}

export {
    useRawJSONTabContentPropData
};
