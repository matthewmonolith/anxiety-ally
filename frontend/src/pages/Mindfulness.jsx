import React from 'react';
import { Box, Heading, Text, Center, Flex } from '@chakra-ui/react';
import './BreathingAnimation.css';

const Mindfulness = () => {
  return (
    <Box p="8" bg="blue.50" borderRadius="md" boxShadow="lg" maxW="600px" mx="auto" mt="10">
      <Heading as="h1" mb="4" textAlign="center" color="teal.500">
        Mindfulness Meditation
      </Heading>
      <Flex direction="column" align="center">
        <Center mb="4" padding="20px">
          <BreathingAnimation />
        </Center>
      </Flex>
      <Text fontSize="md" mb="6">
       Find a comfortable seat or lie down, allowing your body to settle into a state of comfort.
      </Text>
      <Text fontSize="md" mb="6">
        Close your eyes gently and turn your attention inward. Feel the subtle rhythm of your breath.
      </Text>
      <Text fontSize="md" mb="6">
        Notice the gentle rise and fall of your chest, the rhythm of your body in harmony with the breath.
      </Text>
      <Text fontSize="md" mb="6">
        As you continue to breathe, let your thoughts flow like a gentle stream. Observe them without attachment, acknowledging their presence without judgment. If your mind wanders, guide it back to the soothing cadence of your breath.
      </Text>
      <Text fontSize="md" mb="6">
        Now, bring your awareness to each part of your body, starting from your toes and traveling upward. Feel the sensation in each area, releasing any tension you encounter. Allow a sense of serenity to envelop you, like a warm embrace.
      </Text>
      <Text fontSize="md" mb="6">
        Set an intention for your practice, whether it's cultivating peace, gratitude, or simply being present. Choose a duration that feels right for you, and let time become a gentle companion on this journey.
      </Text>
      <Text fontSize="md">
        When you're ready to return, open your eyes slowly. Take a moment to savor the stillness within you. Carry this mindful awareness with you as you re-engage with the world around you.
      </Text>
    </Box>
  );
};

const BreathingAnimation = () => {
  return (
    <div className="breathing-circle" />
  );
};

export default Mindfulness;
