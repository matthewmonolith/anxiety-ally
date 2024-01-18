import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Center,
} from "@chakra-ui/react";

import {
  useGetCommentsQuery,
  useCreateCommentMutation
} from '../slices/commentsApiSlice'
import { useParams } from 'react-router-dom';


const CommentForm = () => {
  const { id } = useParams(); 
  const { error, refetch } = useGetCommentsQuery(id);
  const [createComment] = useCreateCommentMutation();
  const [commentBody, setCommentBody] = useState("");
  if (!id){
    return "No post id found"
  }
  const createCommentHandler = async (e) => {
    e.preventDefault();
    try {
      await createComment({ postId:id, commentBody });
      setCommentBody("");
      refetch(id);
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  return (
    <Box p="4" borderWidth="1px" borderRadius="lg" boxShadow="md">
      <form onSubmit={createCommentHandler}>
        <FormControl width="100%">
          <FormLabel>Comment: </FormLabel>
          <Textarea
            placeholder="Write a your comment here..."
            value={commentBody}
            onChange={(e) => setCommentBody(e.target.value)}
            size="lg"
            resize="vertical"
            required
          />
        </FormControl>
        <Center>
          <Button type="submit" colorScheme="teal">
            Create a comment
          </Button>
        </Center>
      </form>
    </Box>
  );
};

export default CommentForm;
