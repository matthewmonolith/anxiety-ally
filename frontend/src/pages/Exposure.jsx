import React from "react";
import { useState } from "react";
import SinglePost from "../components/SinglePost.jsx";
import {
  Flex,
  Box,
  Text,
  Divider,
  HStack,
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
  useUpdateCompletionMutation,
  useDeleteExposureMutation,
} from "../slices/exposuresApiSlice";

const Exposure = () => {
  const navbarHeight = useNavbarHeight();
  const { data: exposures, isLoading, error, refetch } = useGetExposuresQuery();
  const [createExposure] = useCreateExposureMutation();
  const [updateCompletion] = useUpdateCompletionMutation();
  const [deleteExposure] = useDeleteExposureMutation();

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

  const updateCompletionHandler = async (exposureId) => {
    try {
      await updateCompletion({ id: exposureId });
      refetch();
    } catch (error) {
      console.error("Error updating exposure completion:", error);
    }
  };

  const deleteHandler = async (exposureId) => {
    try {
      await deleteExposure({ id: exposureId });
      refetch();
    } catch (error) {
      console.error("Error deleting exposure:", error);
    }
  };

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
          <Box
            p="4"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            maxHeight="450px"
            minWidth="220px"
            marginLeft="35px"
          >
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
          <HStack align="start" spacing="4" wrap="wrap">
            {exposures.map((exposure) => (
              <SinglePost
                key={exposure._id}
                exposure={exposure}
                updateCompletionHandler={updateCompletionHandler}
                deleteHandler={deleteHandler}
              />
            ))}
          </HStack>
        </Flex>
      )}
    </Flex>
  );
};

export default Exposure;
