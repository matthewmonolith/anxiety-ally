import { React, useState } from "react";
import { Box, Text, Button, Divider, Flex } from "@chakra-ui/react";

const SinglePost = ({ exposure, updateCompletionHandler, deleteHandler }) => {
  const [showFullCaption, setShowFullCaption] = useState(false);

  const snippetLength = 150;
  const snippet = exposure.caption.slice(0, snippetLength);
  const remainingText = exposure.caption.slice(snippetLength);

  const toggleCaption = () => {
    setShowFullCaption(!showFullCaption);
  };

  return (
    <Box
      key={exposure._id}
      width="400px"
      p="4"
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
    >
      <Text
        fontSize="lg"
        fontWeight="600"
        style={{ color: exposure.completed ? "green" : "lightblue" }}
      >
        {exposure.completed ? "Completed" : "Not Completed"}
      </Text>

      <Text fontSize="2xl" fontWeight="semibold" mb="2">
        {exposure.title}
      </Text>
      <Text color="gray.600" mb="2">
        {showFullCaption ? (
          <>
            {exposure.caption}
            <span
              style={{ cursor: "pointer", color: '#8DB6CD' }}
              onClick={toggleCaption}
            >
               {' Show Less'}
            </span>
          </>
        ) : (
          <>
            {snippet}
            {remainingText && (
              <span
                style={{ cursor: "pointer", color: '#8DB6CD' }}
                onClick={toggleCaption}
              >
                ... Show More
              </span>
            )}
          </>
        )}
      </Text>
      <Text color="gray.600" mb="2" fontSize="lg" fontWeight="600">
        Difficulty: {exposure.difficulty}
      </Text>
      <Divider my="2" />
      <Flex
        justify="space-between"
        alignItems="center"
        flexDirection="column"
        gap="5px"
      >
        <Button
          onClick={() => updateCompletionHandler(exposure._id)}
          colorScheme="teal"
          size="sm"
        >
          Complete
        </Button>
        <Button
          onClick={() => deleteHandler(exposure._id)}
          colorScheme="teal"
          size="sm"
        >
          Delete Exposure
        </Button>
        <Text fontSize="sm" color="gray.500">
          Created At: {new Date(exposure.createdAt).toLocaleDateString()}
        </Text>
      </Flex>
    </Box>
  );
};

export default SinglePost;
