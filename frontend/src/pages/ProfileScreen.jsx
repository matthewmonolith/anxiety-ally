import { useNavbarHeight } from "../components/NavbarHeightContext";
// import UserInfo from '../components/UserInfo'
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
  Flex
} from "@chakra-ui/react";

const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();
  // const [bio, setBio] = useState()

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <Flex>
        <Card>
          <CardHeader>
            <Heading size="md">Client Report</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
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
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </div>
  );
};

export default ProfileScreen;
