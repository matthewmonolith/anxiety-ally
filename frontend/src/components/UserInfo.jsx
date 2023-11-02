// import {
//     Heading,
//     Avatar,
//     Box,
//     Center,
//     Image,
//     Flex,
//     Text,
//     Stack,
//     Button,
//     useColorModeValue,
//   } from '@chakra-ui/react';
  
//   export default function SocialProfileWithImage() {
//     return (
//       <Center py={6}>
//         <Box
//           maxW={'270px'}
//           w={'full'}
//           bg={useColorModeValue('white', 'gray.800')}
//           boxShadow={'2xl'}
//           rounded={'md'}
//           overflow={'hidden'}
//           minWidth='270px'
//         >
//           <Image
//             h={'120px'}
//             w={'full'}
//             src={
//               'https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//             }
//             objectFit="cover"
//             alt="#"
//           />
//           <Flex justify={'center'} mt={-12}>
//           </Flex>
  
//           <Box p={6}>
//             <Stack spacing={0} align={'center'} mb={5}>
//               <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
//                 Username
//               </Heading>
//               <Text color={'gray.500'}>User Bio</Text>
//             </Stack>
  
            // <Stack direction={'row'} justify={'center'} spacing={3}>
            //   <Stack spacing={0} align={'center'}>
            //     <Text fontWeight={600}>5</Text>
            //     <Text fontSize={'sm'} color={'gray.500'}>
            //       Community Posts
            //     </Text>
            //   </Stack>
            // </Stack>
  
//             <Button
//               w={'full'}
//               mt={8}
//               bg={'steelblue'}
//               color={'white'}
//               rounded={'md'}
//               _hover={{
//                 bg: 'green.400',
//               }}
//             >
//               Update Profile
//             </Button>
//           </Box>
//         </Box>
//       </Center>
//     );
//   }
  
'use client'

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
    // <Center py={6}>
    //   <Box
    //     maxW={'320px'}
    //     w={'full'}
    //     bg={useColorModeValue('white', 'gray.900')}
    //     boxShadow={'2xl'}
    //     rounded={'lg'}
    //     p={6}
    //     textAlign={'center'}>
    //     <Avatar
    //       size={'xl'}
    //       src={
    //         'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    //       }
    //       mb={4}
    //       pos={'relative'}
    //       _after={{
    //         content: '""',
    //         w: 4,
    //         h: 4,
    //         bg: 'green.300',
    //         border: '2px solid white',
    //         rounded: 'full',
    //         pos: 'absolute',
    //         bottom: 0,
    //         right: 3,
    //       }}
    //     />
    //     <Heading fontSize={'2xl'} fontFamily={'body'}>
    //       Username
    //     </Heading>
    //     <Text
    //       textAlign={'center'}
    //       color={useColorModeValue('gray.700', 'gray.400')}
    //       px={3}>
    //       User Bio Here
    //     </Text>
    //     <Stack mt={8} direction={'row'} spacing={4}>
    //       <Button
    //         flex={1}
    //         fontSize={'sm'}
    //         rounded={'full'}
    //         bg={'blue.400'}
    //         color={'white'}
    //         boxShadow={
    //           '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
    //         }
    //         _hover={{
    //           bg: 'blue.500',
    //         }}
    //         _focus={{
    //           bg: 'blue.500',
    //         }}>
    //        Update Profile
    //       </Button>
    //     </Stack>
    //   </Box>
    // </Center>
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