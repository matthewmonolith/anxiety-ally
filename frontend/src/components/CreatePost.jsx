import React, { useState } from "react";
import { Box, Heading, Input, Textarea, Button } from "@chakra-ui/react";
import {
  useCreateProductMutation,
  useGetPostsQuery,
} from "../slices/postsApiSlice";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  const [createPost] = useCreateProductMutation();
  const { refetch } = useGetPostsQuery();

  const createPostHandler = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, caption });
      setTitle("");
      setCaption("");
      refetch();
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <Box
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      maxHeight="450px"
      maxWidth="250px"
      marginLeft="35px"
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
