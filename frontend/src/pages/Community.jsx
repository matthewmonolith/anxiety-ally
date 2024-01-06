import React from "react";
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import SinglePost from "../components/SinglePost"
import { Flex, Box, Text, Divider, Stack, HStack } from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import {
  useGetPostsQuery,
  // useCreateProductMutation,
} from "../slices/postsApiSlice";
import CreatePost from "../components/createPost";
const Community = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();
  const navbarHeight = useNavbarHeight();

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
        <Flex width="100%" justify="flex-start">
          <CreatePost />
          <Divider orientation="vertical" mx="4" wrap="wrap" />
          <HStack align="start" spacing="4">
            {posts.map((post) => (
              <SinglePost key={post._id} post={post} />
            ))}
          </HStack>
        </Flex>
      )}
    </Flex>
  );
};

export default Community;
