import { CustomErrorObject } from "@/features/json-data/errorParsing.types";
import { HTMLProps } from "react";

export type ErrorsTabContentPropsData = {
    validationErrors: CustomErrorObject[]
}

export type ErrorsTabContentProps = HTMLProps<HTMLElement> & {
    propsData: ErrorsTabContentPropsData
};