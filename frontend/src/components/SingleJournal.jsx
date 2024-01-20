import React from "react";
import { Box, Stack, Text, Divider, Flex, Button } from "@chakra-ui/react";

const SingleJournal = ({ journal, deleteHandler }) => {
  const getBackgroundColor = (mood) => {
    switch (mood) {
      case "happy":
        return "#fefee2";
      case "sad":
        return "#e0ffe0";
      case "calm":
        return "#e0f7ff";
      default:
        return "white";
    }
  };

  return (
    <Box
      key={journal._id}
      width="400px"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      backgroundColor={getBackgroundColor(journal.mood)}
    >
      <Text fontSize="xl" fontWeight="bold">
        {journal.title}
      </Text>
      <Text color="gray.600">{journal.caption}</Text>
      <Text>Mood: {journal.mood}</Text>
      <Divider my="2" />
      <Stack direction="row" justify="space-between">
        <Text>Intensity: {journal.intensity}</Text>
        <Text color="gray.500">
          Created At: {new Date(journal.createdAt).toLocaleString()}
        </Text>
      </Stack>
      <Flex
        justify="space-between"
        alignItems="center"
        flexDirection="column"
        gap="5px"
      >
        <Button
          onClick={() => deleteHandler(journal._id)}
          colorScheme="teal"
          size="sm"
          marginTop={"10px"}
        >
          Delete Journal
        </Button>
      </Flex>
    </Box>
  );
};

export default SingleJournal;
