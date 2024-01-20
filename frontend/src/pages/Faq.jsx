import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import { color } from "framer-motion";
const Faq = () => {
  const navbarHeight = useNavbarHeight();
  return (
    <Flex justify="center" marginTop={`${navbarHeight}px`}>
      <Accordion allowToggle width={"50%"}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Will Anxiety Ally ever launch as an official app?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Unfortunately, Anxiety Ally will not release as an official app. The
            application remains to be a proof of concept, that hopefully someday
            will be used as a template for something legitimate.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Why did you create Anxiety Ally?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            I am passionate about software development and mental health.I
            observed a gap in existing apps that primarily addressed general
            mental health/anxiety. This realization motivated me to create
            Anxiety Ally, a specialized app dedicated to supporting individuals
            dealing with agoraphobia with meditations and an exposure feature.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Who is Anxiety Ally for?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            It is focused on anxiety and agoraphobia, but it is open for
            everyone!
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Is Anxiety Ally free?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, Anxiety Ally is completely free, and there is no ads.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                Who created Anxiety Ally?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            For those interested, you can find comprehensive information about
            me on my{" "}
            <Link href='https://matthew-page-portfolio.netlify.app' isExternal color={"powderblue"}>portfolio </Link>
            site. Explore to discover more about who I am and what I have to
            offer!
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default Faq;
