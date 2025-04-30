import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './assets/global.css';
import RouteCollection from './pages/RouteCollection';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <RouteCollection />
            </div>
        </BrowserRouter>
    )
}

export default App
