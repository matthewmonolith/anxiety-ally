'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {Link, useNavigate} from 'react-router-dom'
import { setCredentials } from '../slices/authSlice'
import { useUpdateUserMutation } from '../slices/usersApiSlice'


export default function UpdateProfile() {
  const [showPassword, setShowPassword] = useState(false)
  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) =>state.auth)

  const [updateProfile] = useUpdateUserMutation();

  useEffect(() => {
   setUsername(userInfo.username)
   setEmail(userInfo.email)
  }, [userInfo.setUsername, userInfo.setEmail])


  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await UpdateProfile({
        _id: userInfo._id,
        username,
        email,
        password
      }).unwrap
      dispatch(setCredentials({...res}))
      toast.success('Profile updated! :)')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Update Profile
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'} textAlign='center'>
              if you want to change your username, email and password.
          </Text>
        </Stack>
        <form onSubmit={submitHandler}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              {/* <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
            </HStack>
            <Box>
                <FormControl 
                 id="username" 
                 isRequired 
                 onSubmit={submitHandler}
                >
                    <FormLabel>Username</FormLabel>
                    <Input 
                     type="text" 
                     placeholder='Enter Username' 
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     />
                </FormControl>
            </Box>
            {/* <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl> */}

            <FormControl
             id="email"
             isRequired
             onSubmit={submitHandler}
             >
              <FormLabel>Email address</FormLabel>
              <Input 
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password" isRequired onSubmit={submitHandler}>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'steelblue'}
                color={'white'}
                type='submit'
                _hover={{
                  bg: 'green.500',
                }}>
                Update
              </Button>
            </Stack>
          </Stack>
        </Box>
        </form>
      </Stack>
    </Flex>
  )
}