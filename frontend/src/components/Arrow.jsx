import { Icon, Center } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

// Inside your component or JSX code
export default function ArrowDown({margin}){
    return (
        <Center>
            <Icon as={ArrowDownIcon} w={88} h={88} color="gray.500" marginTop='100px'/>
        </Center>
    )
}