import MainContent from '../../layouts/main-content/MainContent';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='main-page h-full'>
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    );
}

export default MainPage;
