import React from 'react';
import { useNavbarHeight } from "../components/NavbarHeightContext";
import { Box, Heading, Text, Flex, Center } from '@chakra-ui/react';
import './BreathingAnimation.css';

const Calm = () => {
  const navbarHeight = useNavbarHeight();

  const meditationMessages = [
    "Close your eyes and take a deep breath.",
    "Feel the breath entering and leaving your body.",
    "Notice any tension and gently let it go.",
    "Imagine a peaceful place where you feel safe and calm.",
    "Stay in this moment and breathe.",
    "When you're ready, open your eyes."
  ];

  return (
    <Box p="8" bg="blue.50" borderRadius="md" boxShadow="lg" maxW="600px" mx="auto" mt="10" position="relative">
      <Heading as="h1" mb="4" textAlign="center" color="teal.500">
        Calming Meditation
      </Heading>
      <Flex direction="column" align="center">
        <Center mb="4" padding="20px">
          <BreathingAnimation />
        </Center>
      </Flex>
      {meditationMessages.map((message, index) => (
        <Text key={index} mt="4" fontSize="lg" textAlign="center">
          {message}
        </Text>
      ))}
    </Box>
  );
};

const BreathingAnimation = () => {
  return (
    <div className="breathing-circle" />
  );
};

export default Calm;
