import { useNavbarHeight } from "../components/NavbarHeightContext";
import UserInfo from '../components/UserInfo'
import { useState, useEffect } from 'react';
import { useUpdateUserBioMutation } from "../slices/usersApiSlice";
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../slices/authSlice';
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
  const [bio, setBio] = useState()

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
        <Flex direction='row' width='100vw'>
          <UserInfo />
        </Flex>
    </div>
  );
};

export default ProfileScreen;