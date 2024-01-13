import React, { useState } from "react";
import {
  Box,
  Heading,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";
import {
  useGetJournalsQuery,
  useCreateJournalMutation,
} from "../slices/journalsApiSlice";

const CreateJournal = () => {
  const { error, refetch } = useGetJournalsQuery();
  const [createJournal] = useCreateJournalMutation();
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

  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <Heading as="h2" mb="4" fontSize="xl">
        Create a new Journal Entry
      </Heading>
      <form onSubmit={createJournalHandler}>
        <FormControl mb="4">
          <FormLabel>Mood:</FormLabel>
          <Select
            placeholder="Select mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            required
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
            required
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
            required
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
        <Center>
          <Button type="submit" colorScheme="teal">
            Create Journal Entry
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default CreateJournal;
