import { useState, useEffect } from 'react';
import { Heading, Box, Text, Flex, Spacer, Tag } from '@chakra-ui/react';
import * as API from './service/launches';
import { CiCalendar } from "react-icons/ci";

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
                        <Box key={launch.id} bg='gray.100' p='4' m='4' borderRadius='lg'>
                            <Flex>
                                <Text fontSize='2xl'>
                                    Mission <strong>{launch.name}</strong>
                                </Text>
                                <Spacer />
                                <Tag p='4' colorScheme={launch.success ? 'green' : 'red'}>
                                    {launch.success ? 'Success' : 'Failure'}
                                </Tag>
                            </Flex>
                            <Flex align='center'>
                                <CiCalendar />
                                <Text fontSize='sm' marginLeft='2'>
                                    {launch.date_local.split('T')[0]}
                                </Text>
                            </Flex>
                        </Box>
                    ))
                }
            </section>
        </div>
    ) 
}

export default App;

