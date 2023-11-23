import { useEffect, useState } from "react";
import { Heading } from '@chakra-ui/react';
import * as API from '../service/launches';
import Launch from './Launch';

export default function LaunchList() {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        API.getAllLaunches()
            .then(setLaunches)
            .catch(console.log)
    }, [])

    return(
        <>
            <Heading as='h1' size='lg' p='4' m='4' align='center'>
                SpaceX Launches
            </Heading>
            {launches.length === 0 ? <div>loading...</div> :
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
            }
        </>
    )
}