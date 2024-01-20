import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import {useSelector, useDispatch} from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';

const NAV_ITEMS = [
  {
    label: 'Meditations',
    // to:'/meditate',
    children: [
      {
        label: 'Daily Mindfulness Meditations',
        subLabel: 'Meditations to help practice your mindfulness skills',
        to:'meditate/mindfulness',
      },
      {
        label: 'Soothing Meditations',
        subLabel: 'Relaxing meditations to help you rest',
        to:'meditate/calm',
      },
    ],
  },
  {
    label: 'My Profile',
    to:'/profile',
    children: [
      {
        label: 'My Exposure Plan',
        subLabel: 'Set up your personal exposure programme to gradually overcome your anxieties',
        to:'profile/myplan',
      },
      {
        label: 'My Journal',
        subLabel: 'Write down your thoughts, track your mood and celebrate victories',
        to:'profile/myjournal',
      },
    ],
  },
  {
    label: 'Community',
    to:'/community',
  },
  {
    label: 'Helpful Resources',
    to:'/help',
  },
  {
    label: 'FAQ',
    to:'/faq',
  },
];

const DesktopSubNav = ({ label, to, subLabel }) => {
  return (
    <Box
      as={Link} // Use Link as a component directly inside Box
      to={to || '#'}
      role="group"
      display="block"
      p={2}
      rounded="md"
      _hover={{ bg: useColorModeValue('powderblue', 'steelblue') }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Text transition="all .3s ease" _groupHover={{ color: 'steelblue' }} fontWeight={500}>
            {label}
          </Text>
          <Text fontSize="sm">{subLabel}</Text>
        </Box>
        <Flex
          transition="all .3s ease"
          transform="translateX(-10px)"
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify="flex-end"
          align="center"
          flex={1}
        >
          <Icon color="steelblue" w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNavItem = ({ label, children, to }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack spacing={4} onClick={children ? handleToggle : null}>
      <Box
        py={2}
        as={Link} // Use Link as a component directly inside Box
        to={to}
        justifyContent="space-between"
        alignItems="center"
        _hover={{ textDecoration: 'none' }}
      >
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      {children && (
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack mt={2} pl={4} borderLeft={1} borderStyle="solid" align="start">
            {children.map((child) => (
              <Box as={Link} key={child.label} py={2} to={child.to}>
                {child.label}
              </Box>
            ))}
          </Stack>
        </Collapse>
      )}
    </Stack>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue('white');
  const linkHoverColor = useColorModeValue('powderblue');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction="row" spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Box
                as={Link} // Use Link as a component directly inside Box
                to={navItem.to || '#'}
                p={2}
                fontSize="sm"
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: {linkHoverColor},
                }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow="xl" bg={popoverContentBgColor} p={4} rounded="xl" minW="sm">
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const WithSubnavigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const {userInfo} = useSelector((state) => state.auth)
   
  const [logoutApiCall] = useLogoutMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler =  async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Box width="100vw" zIndex='999' id='navbar'>
      <Flex
        bg={useColorModeValue('steelblue')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1, md: 'auto' }} ml={{ base: -2 }} display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color='white'
            fontWeight='700'
            as={Link} // Use Link as a component directly inside Box
            to={'/'}
          >
            Anxiety Ally
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={'flex-end'} direction={'row'} spacing={1}>
          {userInfo ? (
            <>
          <Button      
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            onClick={ logoutHandler }
            _hover={{
              bg: 'green.400',
            }}
            marginRight='10px'
          >
            Logout
          </Button>
            </>
          ) : (
            <>
            <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'steelblue'}
            as={Link} // Use Link as a component directly inside Box
            to={'/signin'}
            _hover={{
              bg: 'steelblue',
            }}
          >
            Sign In
          </Button>
          <Button
            
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'green.500'}
            as={Link} // Use Link as a component directly inside Box
            to={'/signup'}
            _hover={{
              bg: 'green.400',
            }}
            marginRight='10px'
          >
            Sign Up
          </Button>
          </>)}
        
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </Stack>
      </Collapse>
    </Box>
  );
};

export default WithSubnavigation;
