import React, { useState, useEffect } from 'react';
import SinglePost from "./SinglePost";
import { useGetUserPostsQuery } from "../slices/usersApiSlice";
import { Text, HStack, Heading, Spinner, Button } from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';

const UserPosts = () => {
  const { data: posts, isLoading, error, refetch } = useGetUserPostsQuery();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("profile loaded")
    refetch()
  }, [])
  const handleClick = () => {
    navigate('/community');
  }
  return (
    <div>
      <Heading size='xl' marginLeft={"10px"} color={"steelblue"}>Your Posts</Heading>
      <HStack align="start" spacing="4"></HStack>
      {isLoading ? (
        <Flex justifyContent="center" alignItems="center" height="80vh">
          {" "}
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          ></Spinner>
        </Flex>
      ) : error ? (
        <Text color="red.500">{error?.data?.message || error.error}</Text>
      ) : (posts.length === 0) ? (
        <Button onClick={handleClick} colorScheme="teal" marginTop={"20px"}>Go to the community page create a post!</Button>
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
