import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';

export type ButtonProps = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

const BlueButton = (props: ButtonProps) => {
    const { children, className, ...propsRest } = props;

    const tailwindClasses = 'bg-blue-500 text-white text-base border-0 rounded-full whitespace-nowrap cursor-pointer hover:bg-blue-300 active:bg-blue-500';
    const newClassName = !className ? tailwindClasses : `${className} ${tailwindClasses}`;

    return (
        <button className={newClassName} {...propsRest}>
            {children}
        </button>
    );
}

export default BlueButton;
