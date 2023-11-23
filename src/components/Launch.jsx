import { Box, Text, Flex, Spacer, Tag, Button, Icon } from '@chakra-ui/react';
import { CiCalendar } from "react-icons/ci";

export default function Launch(launch) {
    return (
        <Box bg='gray.100' p='4' m='4' borderRadius='lg'>
            <Flex>
                <Text fontSize='2xl'>
                    Mission <strong>{launch.name}</strong>
                </Text>
                <Spacer />
                <Tag p='2' colorScheme={launch.success ? 'green' : 'red'}>
                    {launch.success ? 'Success' : 'Failure'}
                </Tag>
            </Flex>
            <Flex align='center'>
                <Icon as={CiCalendar} color='blue'/>
                <Text fontSize='sm' marginLeft='2'>
                    {launch.date_local.split('T')[0]}
                </Text>
            </Flex>

            <Button mt='2' fontSize='sm' colorScheme='purple'>
                More Details
            </Button>
        </Box>
    );
}