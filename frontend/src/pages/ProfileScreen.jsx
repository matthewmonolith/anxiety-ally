import { useNavbarHeight } from "../components/NavbarHeightContext";
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo'
import Postcard from "../components/Postcard";
import {
Flex,
Box,
Image,
Avatar,
Text,
Stack,
Button,
Grid,
GridItem,
Card
  } from '@chakra-ui/react'

const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
        <Flex direction='row' width='100vw'>
          <Box bg='#F5F5F5' borderRadius='2rem' width='450px' display='flex' flexDirection='column' justifyContent='center' boxShadow={'2xl'} maxHeight='280px'>
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
          <Box borderRadius='2rem' boxShadow={'2xl'} width='100%' minHeight='500px'>
          <Text textAlign='center' fontSize={'2xl'} color={'gray.500'} paddingTop='10px'>My Community Posts</Text>
            <Flex direction='row' align='center' justify='center' gap='15px'>
              <Postcard />
              <Postcard />
              <Postcard />
              <Postcard />
            </Flex>
          </Box>
        </Flex>
        {/* <Link to='update'> Update Profile?</Link> */}
    </div>
  );
};

export default ProfileScreen;