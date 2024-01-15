import React from "react";
import { Box, Text, Divider, Stack } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const SinglePost = ({ post }) => {
  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  };

  return (
    <Box
      key={post._id}
      width="400px"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      as={Link}
      to={`/community/${post._id}`}
      _hover={{
        background: "powderblue",
        color: "white",
      }}
    >
      <Text fontSize="xl" fontWeight="bold">
        {post.title}
      </Text>
      <Text>{truncateText(post.caption, 200)}</Text>
      <Divider my="2" />
      <Stack direction="row" justify="space-between">
        <Text>Likes: {post.likes}</Text>
        <Text>
          Created At: {new Date(post.createdAt).toLocaleString()}
        </Text>
      </Stack>
    </Box>
  );
};


export default SinglePost;
