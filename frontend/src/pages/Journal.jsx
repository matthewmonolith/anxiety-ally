import { useNavbarHeight } from "../components/NavbarHeightContext";
import React, { useState } from "react";
// const Journal = () => {
//   const navbarHeight = useNavbarHeight();

//   return (
//     <div style={{ paddingTop: `${navbarHeight}px` }}>
//       <h1>My journal</h1>
//     </div>
//   );
// };

import {
  Box,
  Button,
  ChakraProvider,
  Container,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Flex,
  Text,
  Center,
  SimpleGrid,
  Stack,
  Divider,
  Heading,
} from "@chakra-ui/react";
import {
  useGetJournalsQuery,
  useCreateJournalMutation,
} from "../slices/journalsApiSlice";

const Journal = () => {
  const { data: journals, isLoading, error, refetch } = useGetJournalsQuery();
  const [createJournal] = useCreateJournalMutation();
  const navbarHeight = useNavbarHeight();
  const [mood, setMood] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [intensity, setIntensity] = useState(1);

  const createJournalHandler = async (e) => {
    e.preventDefault();
    try {
      await createJournal({ mood, title, caption, intensity });
      setMood("");
      setTitle("");
      setCaption("");
      setIntensity(1);
      refetch();
    } catch (error) {
      console.error("Error creating journal:", error);
    }
  };

  const getBackgroundColor = (mood) => {
    switch (mood) {
      case "happy":
        return "#fefee2";
      case "sad":
        return "#e0ffe0";
      case "calm":
        return "#e0f7ff"
      default:
        return "white";
    }
  };

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        marginTop={`${navbarHeight}px`}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text color="red.500">{error?.data?.message || error.error}</Text>
        ) : (
          <Flex width="100%" justify="center" maxHeight="550px">
            {/* <UserInfo /> */}
            <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
              <Heading as="h2" mb="4" fontSize="xl">
                My Journal
              </Heading>
              <form onSubmit={createJournalHandler}>
                <FormControl mb="4">
                  <FormLabel>Mood:</FormLabel>
                  <Select
                    placeholder="Select mood"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    focusBorderColor="green.500"
                  >
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="calm">Calm</option>
                    <option value="neutral">Neutral</option>
                  </Select>
                </FormControl>

                <FormControl mb="4">
                  <FormLabel>Journal Title:</FormLabel>
                  <Textarea
                    placeholder="Write a title for your journal post"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    size="lg"
                    resize="vertical"
                    focusBorderColor="green.500"
                  />
                </FormControl>

                <FormControl width="100%">
                  <FormLabel>Journal Entry:</FormLabel>
                  <Textarea
                    placeholder="Write a your journal entry here..."
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    size="lg"
                    resize="vertical"
                    focusBorderColor="green.500"
                  />
                </FormControl>
                <FormControl mb="4">
                  <FormLabel>Intensity of emotions:</FormLabel>
                  <Select
                    value={intensity}
                    onChange={(e) => setIntensity(parseInt(e.target.value))}
                  >
                    {Array.from({ length: 10 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <Button
                  colorScheme={"green"}
                  bg={"steelblue"}
                  rounded={"full"}
                  px={6}
                  fontSize="15px"
                  padding="20px"
                  type="submit"
                  _hover={{
                    bg: "green.500",
                  }}
                >
                  Save Journal Entry
                </Button>
              </form>
            </Box>
            <Divider orientation="vertical" mx="4" />
            <VStack align="start" spacing="4">
              {journals ? (
                journals.map((journal) => (
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
                        Created At:{" "}
                        {new Date(journal.createdAt).toLocaleString()}
                      </Text>
                    </Stack>
                  </Box>
                ))
              ) : (
                <Text>No journals found.</Text>
              )}
            </VStack>
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Journal;

