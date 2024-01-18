import {
  useDeletePostMutation,
  useGetPostQuery,
  useLikePostMutation,
} from "../slices/postsApiSlice";
import {
  Card,
  Heading,
  Text,
  Spinner,
  VStack,
  Button,
  CardBody,
  Flex,
  Center,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { Icon } from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import EasyMeditation from "../components/EasyMeditation";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddComment from "../components/AddComment";
import CommentStack from "../components/CommentStack";

const SinglePostPage = () => {
  const { id } = useParams();
  const { data: post, isLoading, error, refetch } = useGetPostQuery(id);
  const [deletePost] = useDeletePostMutation();
  const [likePost] = useLikePostMutation();
  const navbarHeight = useNavbarHeight();
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const deleteHandler = async (postId) => {
    try {
      await deletePost({ id: postId });
      navigate("/community");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const likeHandler = async (postId) => {
    try {
      await likePost({ id: postId });
      refetch();
    } catch (error) {
      console.log("Error liking post:", error);
    }
  };

  return (
    <>
      <VStack spacing={4} align="center" marginTop={`${navbarHeight}px`}>
        {isLoading && <Spinner size="xl" />}
        {error && <Text color="red.500">Error: {error.message}</Text>}
        {post && (
          <Card maxW="xl" p={6}>
            <CardBody>
              <Flex direction={"column"}>
                <Heading mb={4}>{post.title}</Heading>
                <Text fontSize={"xl"}>{post.caption}</Text>
                <Text>{post.comments}</Text>
                <Text fontSize={"xl"} fontWeight={"700"}>
                  Likes: {post.likes}
                </Text>
                <Flex justifyContent={"space-between"}>
                  <Icon
                    as={FcLike}
                    w={9}
                    h={9}
                    cursor={"pointer"}
                    onClick={() => likeHandler(post._id)}
                  />
                  {post.user === userInfo._id && (
                    <Button
                      onClick={() => deleteHandler(post._id)}
                      colorScheme="teal"
                      size="sm"
                    >
                      Delete Post
                    </Button>
                  )}
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        )}
        <CommentStack />
        <Center>
          <AddComment />
        </Center>
      </VStack>

      <EasyMeditation />
    </>
  );
};

export default SinglePostPage;
