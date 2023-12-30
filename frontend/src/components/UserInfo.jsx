import React, { useState } from "react";
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
  VStack,
  Avatar,
  Button
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

export default function SocialProfileSimple() {
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
          <Text>User Name</Text>
              <Stack display={"flex"} flexDirection={"column"} alignItems={"center"}>
                <Box p="20px">
                  <Heading size="xs" textTransform="uppercase">
                    User Bio
                  </Heading>
                  <Text pt="2" fontSize="sm" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate, non ab libero nulla nihil atque ratione ex voluptas aspernatur rerum recusandae error dolore magni quasi dicta accusamus harum! Voluptatem!
                  </Text>
                </Box>
                <Button bg={"powderblue"} w={"60%"} fontWeight={400} marginBottom={"20px"}>Edit Profile</Button>
                {/* <Box paddingBottom="15px" px="20px">
                  <Heading size="xs" textTransform="uppercase">
                    Posts
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Check out the overview of your clients.
                  </Text>
                </Box> */}
              </Stack>
        </VStack>
        {/* <Accordion allowToggle paddingTop="14px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                     Edit Profile
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion> */}
      </Box>
    </div>
  );
}

// <Box
// bg="#F5F5F5"
// borderRadius="2rem"
// width="450px"
// display="flex"
// flexDirection="column"
// justifyContent="center"
// boxShadow={"2xl"}
// maxHeight="280px"
// maxWidth="350px"
// >
// <Flex direction="column" align="center" justify="center" gap="15px">
//   <Avatar
//     size={"xl"}
//     marginTop="10px"
//     src={
//       "https://cdn.pixabay.com/photo/2022/06/24/17/35/relaxation-7282116_1280.jpg"
//     }
//     css={{
//       border: "2px solid white",
//     }}
//   />
//   <Text fontSize="4xl">Username</Text>
//   <Stack direction={"row"} justify={"center"} spacing={3}>
//     <Stack spacing={0} align={"center"}>
//       {/* <Text fontWeight={600} fontSize={'1xl'}>5</Text> */}
//       <Text fontSize={"1xl"} color={"gray.500"}>
//         User Bio
//       </Text>
//     </Stack>
//   </Stack>
//   {/* <Button
//     colorScheme={"green"}
//     bg={"steelblue"}
//     rounded={"full"}
//     fontSize="15px"
//     padding="20px"
//     marginBottom="10px"
//     _hover={{
//       bg: "green.500",
//     }}
//   >
//     Update Profile
//   </Button> */}
// </Flex>
// </Box>
