const concatClassNames = (
    classNames1: string | undefined,
    classNames2: string | undefined
): string | undefined => {
    if (!classNames1) {
        return classNames2;
    } else if (!classNames2) {
        return classNames1;
    } else {
        return `${classNames1} ${classNames2}`;
    }
};

export type WithStylePropsBase = React.JSX.IntrinsicAttributes & {
    className?: string
};


const withStyle = <P extends WithStylePropsBase>(
    WrappedComponent: React.ComponentType<P>,
    extraClassName: string
) => {
    return (props: P) => {
        const newProps = {
            ...props,
            className: concatClassNames(props.className, extraClassName)
        };
        
        return (
            <WrappedComponent {...newProps} />
        );
    };
};

export default withStyle;