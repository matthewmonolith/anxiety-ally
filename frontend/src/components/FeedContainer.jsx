import React from 'react'
import {
    Box,
    Text,
    Flex,
} from '@chakra-ui/react'
const FeedContainer = ({title}) => {
  return (
    <Box borderRadius='2rem' boxShadow={'2xl'} width='100%' minHeight='500px'>
        <Text textAlign='center' fontSize={'2xl'} color={'gray.500'} paddingTop='10px'>{title}</Text>
        <Flex direction='row' align='center' justify='center' gap='15px'>
        </Flex>
    </Box>
  )
}

export default FeedContainer


