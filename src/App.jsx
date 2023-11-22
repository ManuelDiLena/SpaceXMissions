import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import * as API from './service/launches';
import { Launch } from './components/Launch';

function App() {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
    }, [])

    return (
        <div>
            <Heading as='h1' size='lg' p='4' m='4'>
                SpaceX Launches
            </Heading>
            <section>
                {
                    launches.map(launch => (
                        <Launch 
                            key={launch.id}
                            {...launch}
                        />
                    ))
                }
            </section>
        </div>
    ) 
}

export default App;

