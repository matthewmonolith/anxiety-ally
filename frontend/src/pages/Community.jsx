import React from "react";
import { useState } from "react";
import UserInfo from "../components/UserInfo";
import SinglePost from "../components/SinglePost";
import EasyMeditation from "../components/EasyMeditation";
import { Flex, Text, Divider, HStack, Spinner } from "@chakra-ui/react";
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
    <>
    <Flex
      direction="column"
      alignItems="center"
      marginTop={`${navbarHeight}px`}
    >
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        ></Spinner>
      ) : error ? (
        <Text color="red.500">{error?.data?.message || error.error}</Text>
      ) : (
        <Flex width="100%" justify="flex-start">
          <CreatePost />
          <Divider orientation="vertical" mx="4" />
          <HStack align="start" spacing="4" wrap="wrap">
            {posts.map((post) => (
              <SinglePost key={post._id} post={post} />
            ))}
          </HStack>
        </Flex>
      )}
    </Flex>
    <EasyMeditation />
    </>
  );
};

export default Community;
