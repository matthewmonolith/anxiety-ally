import { Box, Card, Text } from '@chakra-ui/react';

const Comment = ({ user, commentText }) => {
  return (
    <Card p={4} mb={4}>
      <Text fontSize={"xl"}>{commentText}</Text>
    </Card>
  );
};

export default Comment;
