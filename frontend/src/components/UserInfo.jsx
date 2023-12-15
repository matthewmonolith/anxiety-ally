import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex
} from '@chakra-ui/react'

export default function SocialProfileSimple() {
  return (
    <Box bg='#F5F5F5' borderRadius='2rem' width='450px' display='flex' flexDirection='column' justifyContent='center' boxShadow={'2xl'} maxHeight='280px' maxWidth='350px'>
            <Flex direction='column' align='center' justify='center' gap='15px'>
              <Avatar
                size={'xl'}
                marginTop='10px'
                src={
                  'https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg'
                }
                css={{
                  border: '2px solid white',
                }}
              />
              <Text fontSize='4xl'>Username</Text>
              <Stack direction={'row'} justify={'center'} spacing={3}>
              <Stack spacing={0} align={'center'}>
                {/* <Text fontWeight={600} fontSize={'1xl'}>5</Text> */}
                <Text fontSize={'1xl'} color={'gray.500'}>
                  User Bio
                </Text>
              </Stack>
            </Stack>
            <Button
              colorScheme={'green'}
              bg={'steelblue'}
              rounded={'full'}
              fontSize='15px'
              padding='20px'
              marginBottom='10px'
              _hover={{
                bg: 'green.500',
              }}>
              Update Profile
            </Button>
            </Flex>
          </Box>
  )
}