import React from 'react';
import { Box, Text, Divider, Stack } from '@chakra-ui/react';

const SinglePost = ({ post }) => {
  return (
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
  );
};

export default SinglePost;
