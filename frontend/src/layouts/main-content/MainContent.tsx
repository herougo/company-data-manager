import { HTMLProps } from 'react';

const MainContent = (props: HTMLProps<HTMLElement>) => {
    return (
        <div className='main-content h-full'>
            {props.children}
        </div>
    );
}

export default MainContent;
