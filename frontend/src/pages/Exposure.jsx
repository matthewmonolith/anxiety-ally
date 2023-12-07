import React from "react";
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import {
  Flex,
  Box,
  Text,
  Divider,
  Stack,
  VStack,
  Heading,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import {
  useGetExposuresQuery,
  useCreateExposureMutation,
} from "../slices/exposuresApiSlice";

const Exposure = () => {
  const navbarHeight = useNavbarHeight();
  const { data: exposures, isLoading, error, refetch } = useGetExposuresQuery();
  const [createExposure] = useCreateExposureMutation();

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [difficulty, setDifficulty] = useState(1);

  const createExposureHandler = async (e) => {
    e.preventDefault();
    try {
      await createExposure({ title, caption, difficulty });
      setTitle("");
      setCaption("");
      refetch();
    } catch (error) {
      console.error("Error creating exposure:", error);
    }
  };

  const updateCompletionHandler = async (e) => {
    e.preventDefault();
    try {
      await updateCompletion({id})
      refetch()
    } catch (error) {
      console.error("Error updating exposure completion:", error)
    }
  }

  return (
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
        <Flex width="100%" justify="center">
          {/* <UserInfo /> */}
          <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
            <Heading as="h2" mb="4" fontSize="xl">
              Create a New Exposure
            </Heading>
            <form onSubmit={createExposureHandler}>
              <FormControl mb="4">
                <FormLabel>Title:</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter exposure title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>Caption:</FormLabel>
                <Textarea
                  placeholder="Enter exposure caption"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormControl>

              <FormControl mb="4">
                <FormLabel>Difficulty:</FormLabel>
                <Select
                  value={difficulty}
                  onChange={(e) => setDifficulty(parseInt(e.target.value))}
                >
                  {/* Generate options for difficulty levels */}
                  {Array.from({ length: 10 }, (_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <Button type="submit" colorScheme="teal">
                Create Exposure
              </Button>
            </form>
          </Box>
          <Divider orientation="vertical" mx="4" />
          <VStack align="start" spacing="4">
            {exposures.map((exposure) => (
              <Box
                key={exposure._id}
                width="400px"
                p="4"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
              >
                <Text fontSize="xl" fontWeight="bold">
                  {exposure.title}
                </Text>
                <Text color="gray.600">{exposure.caption}</Text>
                <Text color="gray.600">
                  Difficulty: {exposure.difficulty}
                </Text>
                <Divider my="2" />
                <Stack direction="row" justify="space-between">
                  <Text>
                    {exposure.completed ? "Completed" : "Not Completed"}
                  </Text>
                  <Button onClick={updateCompletionHandler}>
                    Toggle Complete
                  </Button>
                  <Text color="gray.500" >
                    Created At: {new Date(exposure.createdAt).toLocaleDateString()}
                  </Text>
                </Stack>
              </Box>
            ))}
          </VStack>
        </Flex>
      )}
    </Flex>
  );
};

export default Exposure;
