import { Route, Routes } from 'react-router-dom';
import MainPage from './main/MainPage';
import HomePageContent from './main/home/HomePageContent';


const RouteCollection = () => {
    return (
        <Routes>
            <Route exact path="/" element={
                <MainPage />
            }>
                <Route exact path="/" element={
                    <HomePageContent />
                }></Route>
            </Route>
        </Routes>
    );
}

export default RouteCollection;
