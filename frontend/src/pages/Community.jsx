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
} from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import {
  useGetPostsQuery,
  useCreateProductMutation,
} from "../slices/postsApiSlice";
import CreatePost from "../components/createPost";

const Community = () => {
  const { data: posts, isLoading, error, refetch } = useGetPostsQuery();
  const [createPost] = useCreateProductMutation();
  const navbarHeight = useNavbarHeight();

  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

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
          <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md" maxHeight="250px">
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
          <Divider orientation="vertical" mx="4" />
          <VStack align="start" spacing="4">
            {posts.map((post) => (
              <Box
                key={post._id}
                width="400px"
                p="4"
                borderWidth="1px"
                borderRadius="lg"
                boxShadow="md"
              >
                <Text fontSize="xl" fontWeight="bold">
                  {post.title}
                </Text>
                <Text color="gray.600">{post.caption}</Text>
                <Divider my="2" />
                <Stack direction="row" justify="space-between">
                  <Text>Likes: {post.likes}</Text>
                  <Text color="gray.500">
                    Created At: {new Date(post.createdAt).toLocaleString()}
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

export default Community;
