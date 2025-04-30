import MainContent from '../../layouts/main-content/MainContent';
import './MainPage.css';
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='main-page'>
            <MainContent>
                <Outlet />
            </MainContent>
        </div>
    );
}

export default MainPage;
