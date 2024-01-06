import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react"; // Adjust the import path based on your project structure
import {
    useGetExposuresQuery,
    useCreateExposureMutation,
  } from "../slices/exposuresApiSlice";

const CreateExposure = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");
  const [difficulty, setDifficulty] = useState(1);
  const { refetch, error } = useGetExposuresQuery();
  const [createExposure] = useCreateExposureMutation();

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

  return (
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
  );
};

export default CreateExposure;
