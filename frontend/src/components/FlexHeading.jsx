import {
    Heading,
    Text,
    Flex,
    Box
  } from '@chakra-ui/react'

import React from 'react'

const FlexHeading = ({title}) => {
  return (
    <Flex direction='column' alignItems='center'>
        <Box maxW={'420px'}
        w={'full'}
        bg={'steelblue'}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Heading color='white'>
            {title}
        </Heading>
        </Box>
    </Flex>
  )
}

export default FlexHeading

