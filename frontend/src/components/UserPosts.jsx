import React, { useState, useEffect } from 'react';
import SinglePost from "./SinglePost";
import { useGetUserPostsQuery } from "../slices/usersApiSlice";
import { Text, HStack, Heading } from "@chakra-ui/react";

const UserPosts = () => {
  const { data: posts, isLoading, error, refetch } = useGetUserPostsQuery();
  useEffect(() => {
    console.log("profile loaded")
    refetch()
  }, [])
  return (
    <div>
      <Heading size='xl' marginLeft={"10px"} color={"steelblue"}>Your Posts</Heading>
      <HStack align="start" spacing="4"></HStack>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text color="red.500">{error?.data?.message || error.error}</Text>
      ) : (
        <HStack align="start" spacing="4" wrap="wrap">
          {posts.map((post) => (
            <SinglePost key={post._id} post={post} />
          ))}
        </HStack>
      )}
    </div>
  );
};

export default UserPosts;
