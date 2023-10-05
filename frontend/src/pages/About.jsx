import { useNavbarHeight } from "../components/NavbarHeightContext";
import {
  Box,
  Stack,
  Flex,
} from '@chakra-ui/react'

const About = () => {
  const navbarHeight = useNavbarHeight();

  return (
    <div style={{ paddingTop: `${navbarHeight}px` }}>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
