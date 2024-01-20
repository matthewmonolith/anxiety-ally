import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

import GridListWith from './Features';
import ImageSmall from './ImageSmall';
import ArrowDown from './Arrow';
import Highlight from './Highlight'

export default function CallToActionWithAnnotation() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/meditate/mindfulness');
  }
  return (
    <>
      <Container  maxW={'container.lg'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 9}}
          paddingTop='150px'
          paddingBottom='20px'
          height='100vh'>
          <ImageSmall size={'200px'} src={'brainblue.png'} />
          <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            <Text as={'span'} >
            Overcome anxiety with Anxiety Ally.
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize='25px'>
           Anxiety Ally is a mental health app designed for people affected by anxiety, agoraphobia and/or separation anxiety. Plan exposures, record your progress and learn mindfulness and meditations to change your relationship with anxiety.
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={'steelblue'}
              rounded={'full'}
              px={6}
              fontSize='20px'
              padding='30px'
              onClick={handleClick}
              _hover={{
                bg: 'green.500',
              }}>
              Try a meditation
            </Button>
            <ArrowDown margin='50px'/>
          </Stack>
          <GridListWith />
          <Highlight />
        </Stack>
      </Container>
    </>
  )
}