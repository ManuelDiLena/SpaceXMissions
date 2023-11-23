import { Routes, Route } from 'react-router-dom';
import { Image } from '@chakra-ui/react';
import logo from './assets/logo-spacex.png';
import { LaunchList } from './components/LaunchList';
import { LaunchDetails } from './components/LaunchDetails';

function App() {
    return (
        <>
            <Image m='4' src={logo} width={300} />
            <Routes>
                <Route path='/' element={<LaunchList />} />
                <Route path='launch/:launchId' element={<LaunchDetails />} />
            </Routes>
        </>
    ) 
}

export default App;

