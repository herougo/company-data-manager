import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/global.css';
import RouteCollection from './pages/RouteCollection';


function App() {
    return (
        <BrowserRouter>
            <div className="App bg-gray-900 h-full">
                <RouteCollection />
            </div>
        </BrowserRouter>
    )
}

export default App
