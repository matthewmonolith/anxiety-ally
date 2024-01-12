import { useGetPostQuery } from "../slices/postsApiSlice";
import {
  Card,
  Heading,
  Text,
  Spinner,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import {DeleteIcon} from "@chakra-ui/icons"
import { Icon } from "@chakra-ui/react";

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useGetPostQuery(id);

  return (
    <VStack spacing={4} align="center">
      {isLoading && <Spinner size="xl" />}
      {error && <Text color="red.500">Error: {error.message}</Text>}
      {post && (
        <Card maxW="xl" p={6}>
          <Heading mb={4}>{post.title}</Heading>
          <Text>{post.caption}</Text>
          <Text>{post.comments}</Text>
          <Text>Likes: {post.likes}</Text>
          <HStack spacing={'70%'}>
            <Icon as={FcLike} w={7} h={7} cursor={"pointer"} />
            <Icon  as={DeleteIcon} w={7} h={7} cursor={"pointer"}/>
          </HStack>
        </Card>
      )}
    </VStack>
  );
};

export default SinglePostPage;
