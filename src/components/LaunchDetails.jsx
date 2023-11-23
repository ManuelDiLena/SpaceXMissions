import { Link, useParams } from 'react-router-dom';
import { Box, Text, Flex } from '@chakra-ui/react';
import * as API from '../service/launches';
import { useEffect, useState } from 'react';

export default function LaunchDetails() {
    
    const { launchId } = useParams();
    const [ detail, setDetail ] = useState({});

    useEffect(() => {
        API.getLaunchById(launchId)
            .then(setDetail)
            .catch(console.log)
    }, [launchId, setDetail]);

    return (
        <>
            <Box bg='gray.100' p='4' m='4' borderRadius='lg'>
                {detail.length === 0 ? <div>loading...</div> :
                <>
                <Flex>
                    <Text fontSize='2xl'>
                        Mission <strong>{detail.name}</strong>
                    </Text>
                </Flex>
                <Box>
                    <Text>
                        {detail.details}
                    </Text>
                </Box>
                <Link to={detail.links?.article}>Article</Link>
                </>
                }
            </Box>
        </>
    )
}