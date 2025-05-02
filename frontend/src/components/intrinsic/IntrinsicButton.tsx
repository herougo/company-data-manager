import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const IntrinsicButton = (props: ButtonProps) => {
    return (
        <button {...props} />
    );
}

export default IntrinsicButton;
