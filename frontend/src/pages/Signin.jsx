import {useState, useEffect} from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner
} from '@chakra-ui/react'

import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' //dispatch action, selector for select from global state
import { useLoginMutation } from '../slices/usersApiSlice'
import {setCredentials} from '../slices/authSlice'
import { toast } from 'react-toastify'

export default function SimpleCard() {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, {isLoading}] = useLoginMutation()

  const { userInfo } = useSelector((state) =>state.auth)

  useEffect(() => {
    if(userInfo){
      navigate('/profile')
    }
  }, [navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ email, password }).unwrap(); //unwraps promise, backend res is the user
      dispatch(setCredentials({...res}))
      navigate('/profile')
    } catch (err) {
      toast.error(err?.data?.message || err.error)
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
            <Heading fontSize={'4xl'}>Sign in</Heading>
            <Text fontSize={'lg'} color={'gray.600'} textAlign='center'>
              to access your exposure planner, journal and community hub.
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
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
              id="password" 
              isRequired 
              onSubmit={submitHandler}
              >
                <FormLabel>Password</FormLabel>
                <Input 
                type="password"
                placeholder="Enter Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>

              {isLoading && <Spinner color='steelblue'/>}

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Text color={'blue.400'}>Forgot password?</Text>
                </Stack>
                <Stack spacing={10} pt={2}>
                <Button
                  type='submit'
                  loadingText="Submitting"
                  size="lg"
                  bg={'steelblue'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}>
                  Sign In
                </Button>
              </Stack>
              </Stack>
            </Stack>
            <Stack pt={6}>
                <Text align={'center'}>
                  Don't have an account? 
                  <Box color='steelblue'>
                      <Link to='/signup'>Sign up</Link>
                  </Box>
                </Text>
              </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}