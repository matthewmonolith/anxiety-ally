import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  Image
} from '@chakra-ui/react';
import {
  FcCollaboration,
  FcLikePlaceholder,
  FcCheckmark
} from 'react-icons/fc';

function Card({ heading, description, icon, href }) {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}

function GridListWith() {
  return (
    <Box p={0}>
      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Feel calmer'}
            icon={<Icon as={FcLikePlaceholder} w={10} h={10} />}
            description={'Vagus Nerve based meditations to help you calm your anxiety and nervous system.'}
          />
          <Card
            heading={'Safespace'}
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            description={'Join our welcoming community to share what you want, without judgement.'}
            href={'#'}
          />
          <Card
            heading={'Easy to use'}
            icon={<Icon as={FcCheckmark} w={10} h={10} />}
            description={'From practising a meditation to creating an exposure task, the site aims to be as straightfoward and as easy to use as possible.'}
            href={'#'}
          />
          {/* <Card
            heading={'No costs'}
            icon={<Icon as={FcDonate} w={10} h={10} />}
            description={'No subscriptions, no hidden fees, completely free for you to use. That\'s a promise!'}
            href={'#'}
          /> */}
          {/* <Card
            heading={'Heading'}
            icon={<Icon as={FcAbout} w={10} h={10} />}
            description={'Lorem ipsum dolor sit amet catetur, adipisicing elit.'}
            href={'#'}
          /> */}
        </Flex>
      </Container>
    </Box>
  );
}

export default GridListWith;
