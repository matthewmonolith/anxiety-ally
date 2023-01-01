import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Center,
} from "@chakra-ui/react";

const EditForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Box>
      <Flex direction={"column"} alignItems={"center"}>
        <form>
          <FormControl mb="4">
            <FormLabel>Edit Username</FormLabel>
            <Input
              type="text"
              placeholder="Username..."
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl mb="4">
            <FormLabel>Edit Email:</FormLabel>
            <Input
              type="email"
              placeholder="Email Address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal">
            Update Profile
          </Button>
        </form>
      </Flex>
      {/* <form onSubmit={updateUserProfile}> */}
    </Box>
  );
};

export default EditForm;
