import { useNavbarHeight } from "../components/NavbarHeightContext";
import UserInfo from '../components/UserInfo'
// import { useState, useEffect } from 'react';
// // import { useUpdateUserBioMutation } from "../slices/usersApiSlice";
// import { useDispatch, useSelector } from 'react-redux';
// import { setCredentials } from '../slices/authSlice';
// import {
// Flex,
// Box,
// Image,
// Avatar,
// Text,
// Stack,
// Button,
// Grid,
// GridItem,
// Card
//   } from '@chakra-ui/react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();
  // const [bio, setBio] = useState()

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <Flex justify="center">
        <Card w="80%">
          <Flex justify="flex-start">
            <CardBody>
              <UserInfo />
              {/* <Stack divider={<StackDivider />} spacing="4" w="50%">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Summary
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    View a summary of all your clients over the last month.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Overview
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Analysis
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    See a detailed analysis of all your business clients.
                  </Text>
                </Box>
              </Stack> */}
            </CardBody>
          </Flex>
          {/* <CardHeader>
            <Heading size="md">User Profile</Heading>
          </CardHeader> */}
        </Card>
      </Flex>
    </div>
  );
};

export default ProfileScreen;
