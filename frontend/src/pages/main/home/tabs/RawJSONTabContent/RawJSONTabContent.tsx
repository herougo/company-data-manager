import { HTMLProps } from "react";
import { RawJSONTabContentData, ValidationState } from "./useRawJSONTabContentPropData";

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

export type RawJSONTabContentProps = HTMLProps<HTMLElement> & {
    propData: RawJSONTabContentData
}

const RawJSONTabContent = (props: RawJSONTabContentProps) => {
    const {content, textareaOnInput, validationState, validateBtnOnClick} = props.propData;

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
