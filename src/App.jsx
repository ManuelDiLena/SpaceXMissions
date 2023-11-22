import { useState, useEffect } from 'react';
import * as API from './service/launches';
import logo from './assets/logo-spacex.png';

function App() {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
    }, [])

    return (
        <div>
            <img src={logo} width={300} />
            <h1>SpaceX Launches</h1>
            <ul>
                {
                    launches.map(launch => (
                        <li key={launch.id}>
                            {launch.name}: {launch.date_utc}
                        </li>
                    ))
                }
            </ul>
        </div>
    ) 
}

export default App;

