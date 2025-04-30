import { HTMLProps } from 'react';
import './MainContent.css';

const MainContent = (props: HTMLProps<HTMLDivElement>) => {
    return (
        <div className='main-content h-full'>
            {props.children}
        </div>
    );
}

export default MainContent;
