import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";

const ResourceCard = ({title, image, link, type}) => {
  "use client";
  {
    return (
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
          minH={"400px"}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              objectFit={"cover"}
              src={image}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              
              {type}
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500} textAlign={"center"}>
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={700} fontSize={"xl"} color={"steelblue"}>
                <a href={link}>Link</a>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }
};

export default ResourceCard