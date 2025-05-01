import { CustomErrorObject } from "@/features/json-data/errorParsing.types";
import React, { Dispatch, SetStateAction, HTMLProps } from "react";

export enum ValidationState {
    Unvalidated = "unvalidated",
    Validated = "validated",
    Error = "error"
};

export type RawJSONTabContentPropData = {
    content: string,
    setContent: Dispatch<SetStateAction<string>>,
    validationState: string,
    setValidationState: Dispatch<SetStateAction<string>>,
    validationErrors: CustomErrorObject[],
    setValidationErrors: Dispatch<SetStateAction<CustomErrorObject[]>>,
    textareaOnInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
    validateBtnOnClick: () => void
}

export type RawJSONTabContentProps = HTMLProps<HTMLElement> & {
    propData: RawJSONTabContentPropData
}
