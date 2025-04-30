import { HTMLProps } from 'react';

const MainContent = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <div className='main-content h-full'>
            {props.children}
        </div>
    );
}

export default MainContent;
