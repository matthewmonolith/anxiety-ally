import { useNavbarHeight } from "../components/NavbarHeightContext";
import { Link } from 'react-router-dom';
import UserInfo from '../components/UserInfo'
import Postcard from "../components/Postcard";
import FeedContainer from "../components/FeedContainer";
import {
Flex,
Box,
Image,
Avatar,
Text,
Stack,
Button,
Grid,
GridItem,
Card
  } from '@chakra-ui/react'

const ProfileScreen = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
        <Flex direction='row' width='100vw'>
          <UserInfo />
          {/* <FeedContainer title='My Community Posts'/> */}
        </Flex>
        {/* <Link to='update'> Update Profile?</Link> */}
    </div>
  );
};

export default ProfileScreen;