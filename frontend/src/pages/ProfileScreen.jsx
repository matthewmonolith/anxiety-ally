import { useNavbarHeight } from "../components/NavbarHeightContext";
import UserInfo from "../components/UserInfo";
import UserPosts from "../components/UserPosts";
import { Card, CardBody, Flex, Spinner } from "@chakra-ui/react";
import { useGetUserPostsQuery } from "../slices/usersApiSlice";
const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();
  const { isLoading, error} = useGetUserPostsQuery();
  return (
    // <Flex style={{ paddingTop: `${navbarHeight}px` }} alignItems={"flex-start"}>
    //   <Flex justify="center">
    //     <Card w="80%">
    //         <CardBody>
    //           <Flex gap={"10px"}>
    //
    //           </Flex>
    //         </CardBody>
    //     </Card>
    //   </Flex>
    // </Flex>
    <>
      {/* <Flex
     alignItems={"flex-start"}   */}
      {isLoading ? (
        <Flex justifyContent="center" alignItems="center" height="80vh">
          {" "}
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          ></Spinner>
        </Flex>
      ) : error ? (
        <Text color="red.500">{error?.data?.message || error.error}</Text>
      ) : (
        <Flex justify="center" marginTop={`${navbarHeight}px`}>
          <Card w="80%">
            <CardBody>
              <Flex gap={"10px"} align={"flex-start"}>
                <UserInfo />
                <UserPosts />
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      )}
      {/* </Flex> */}
    </>
  );
};

export default ProfileScreen;
