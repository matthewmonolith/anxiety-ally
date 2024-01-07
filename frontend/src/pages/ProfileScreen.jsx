import { useNavbarHeight } from "../components/NavbarHeightContext";
import UserInfo from '../components/UserInfo'
import UserPosts from "../components/UserPosts";
import {
  Card,
  CardBody,
  Flex,
} from "@chakra-ui/react";
const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();
  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <Flex justify="center">
        <Card w="80%">
          <Flex justify="flex-start">
            <CardBody>
              <UserInfo />
              <UserPosts />
            </CardBody>
          </Flex>
        </Card>
      </Flex>
    </div>
  );
};

export default ProfileScreen;
