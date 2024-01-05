import React, { useState } from "react";
import { Box, Heading, Input, Textarea, Button } from "@chakra-ui/react";

const CreatePost = ({ onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if title and caption are not empty
    if (title.trim() !== "" && caption.trim() !== "") {
      // Call the onCreatePost function with the post data
      onCreatePost({ title, caption });
      // Clear the input fields
      setTitle("");
      setCaption("");
    }
  };

  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      maxHeight="250px"
    >
      <Heading as="h2" mb="4" fontSize="xl">
        Create a New Post
      </Heading>
      <form onSubmit={createPostHandler}>
        <Input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb="2"
        />
        <Textarea
          placeholder="Enter post caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          mb="2"
        />
        <Button type="submit" colorScheme="teal">
          Create Post
        </Button>
      </form>
    </Box>
  );
};

export default CreatePost;
