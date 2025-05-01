import { ErrorsTabContentProps } from "./types";


const ErrorsTabContent = (props: ErrorsTabContentProps) => {
    const { validationErrors } = props.propsData;
    return (
        <div>
            {
                validationErrors.map((validationError) => {
                    return <div>{validationError.message}</div>
                })
            }
        </div>
    );
}

export default ErrorsTabContent;
