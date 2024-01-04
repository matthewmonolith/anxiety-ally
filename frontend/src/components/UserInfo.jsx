import React, { useState } from "react";
import {
  Stack,
  Box,
  Text,
  Container,
  VStack,
  Avatar,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import EditProfile from "./EditProfile.jsx";
import { useDispatch, useSelector } from 'react-redux'
// import { getUserDetails, updateUserProfile } from '../actions/userActions' - change this to userapislice to get user info
export default function SocialProfileSimple() {
  const { userInfo } = useSelector((state) => state.auth);
  console.log(userInfo)
  return (
    <div>
      <Box maxW="sm" borderRadius="lg" overflow="hidden" borderWidth="1px">
        <VStack>
          <Avatar
            size={"xl"}
            marginTop="10px"
            src={
              "https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg"
            }
            css={{
              border: "2px solid white",
            }}
          />
          <Text>{userInfo.username}</Text>
          <Stack>
            <Box p="20px">
              <Text pt="2" fontSize="sm">
                {userInfo.bio}
              </Text>
            </Box>
            <Container
              paddingBottom={"20px"}
              display={"flex"}
              justifyContent={"center"}
            >
              <EditProfile />
            </Container>
          </Stack>
        </VStack>
      </Box>
    </div>
  );
}
