import { Box, Heading, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function Info() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Frequently Asked Questions
      </Heading>
    </Box>
  )
}