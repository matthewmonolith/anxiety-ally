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
  Spinner,
  useColorModeValue,
} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { toast } from 'react-toastify'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {Link, useNavigate} from 'react-router-dom'
import { useRegisterMutation } from '../slices/usersApiSlice'
import { setCredentials } from '../slices/authSlice'


export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
  const[username, setUsername] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const[bio, setBio] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) =>state.auth)

  const [register, {isLoading}] = useRegisterMutation()

  useEffect(() => {
    if(userInfo){
      navigate('/profile')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(bio)
    try {
      const res = await register({ username, email, bio, password }).unwrap();
      dispatch(setCredentials({...res}))
      navigate('/profile')
    } catch (error) {
      toast.error(error?.data?.message || error.error)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'} textAlign='center'>
              to access the exposure planner, your journal and join the community hub.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
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
              
              <FormControl
              id="bio"
              onSubmit={submitHandler}
              >
                <FormLabel>Bio</FormLabel>
                <Input 
                type="text"
                placeholder="Would you like to put in a bio?"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
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
                  Sign up
                </Button>
              </Stack>

              {isLoading && <Spinner color='steelblue'/>}

              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? 
                  <Box color='steelblue'>
                      <Link to='/signin'>Login</Link>
                  </Box>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}