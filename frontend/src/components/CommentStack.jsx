import { Box } from "@chakra-ui/react";
import Comment from "./Comment";
import { useGetCommentsQuery } from "../slices/commentsApiSlice";
import { useParams } from "react-router-dom";

const CommentsStack = () => {
  const { id } = useParams();
  const { data: comments, isLoading, error, refetch } = useGetCommentsQuery(id);

  return (
    <Box minW={"30%"}>
      {comments &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            user={comment.user}
            commentText={comment.comment}
          />
        ))}
    </Box>
  );
};

export default CommentsStack;

