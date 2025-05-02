import BlueButton from "@/components/styling-wrappers/BlueButton";
import { RawJSONTabContentProps, ValidationState } from "./types";

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
                <BlueButton
                    className='p-[0.5rem]'
                    onClick={validateBtnOnClick}
                >
                    Validate Raw JSON
                </BlueButton>
            </div>
        </div>
    );
}

export default RawJSONTabContent;
