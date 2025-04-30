import { validate } from "@/features/json-data";
import React, { useState } from "react";

enum ValidationState {
    Unvalidated = "unvalidated",
    Validated = "validated",
    Error = "error"
};

const validationStateToBgColor = (validationState: string): string => {
    switch (validationState) {
        case ValidationState.Unvalidated:
            return 'bg-white';
        case ValidationState.Validated:
            return 'bg-green-200';
        default:
            return 'bg-red-300';
    }
};

const RawJSONTabContent = () => {
    const [content, setContent] = useState('');
    const [validationState, setValidationState] = useState(ValidationState.Unvalidated);
    const [validationErrors, setValidationErrors] = useState<object[]>([]);

    const textareaOnInput = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setContent(e.target.value);
        setValidationState(ValidationState.Unvalidated);
    };

    const validateBtnOnClick = () => {
        let jsonData = null
        
        try {
            jsonData = JSON.parse(content);
        } catch (ex) {
            setValidationState(ValidationState.Error);
            if (ex instanceof Error) {
                setValidationErrors([{message: ex.message}]);
            } else {
                setValidationErrors([]);
            }
            console.log(validationErrors);
        }

        const { valid, errors } = validate(jsonData);

        if (valid) {
            setValidationState(ValidationState.Validated);
            setValidationErrors([]);
        } else {
            setValidationState(ValidationState.Error);
            setValidationErrors(errors);
            console.log(validationErrors);
        }
    }
    
    return (
        <div className='h-full'>
            <textarea
                value={content}
                onInput={textareaOnInput}
                className={`${validationStateToBgColor(validationState)} resize-none w-full h-9/10`}
            />
            <div className='h-1/10'>
                <button
                    className='p-[0.5rem] bg-blue-500 text-white text-base border-0 rounded-full whitespace-nowrap cursor-pointer hover:bg-blue-300 active:bg-blue-500'
                    onClick={validateBtnOnClick}
                >
                    Validate Raw JSON
                </button>
            </div>
        </div>
    );
}

export default RawJSONTabContent;
