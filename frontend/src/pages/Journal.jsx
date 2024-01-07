import { useNavbarHeight } from "../components/NavbarHeightContext";
import React from "react";
import EasyMeditation from "../components/EasyMeditation";
import CreateJournal from "../components/CreateJournal";
import SingleJournal from "../components/SingleJournal";

import {
  HStack,
  Flex,
  Text,
  Divider,
} from "@chakra-ui/react";

import {
  useGetJournalsQuery,
} from "../slices/journalsApiSlice";

const Journal = () => {
  const { data: journals, isLoading, error } = useGetJournalsQuery();
  const navbarHeight = useNavbarHeight();

  return (
    <>
      <Flex
        direction="column"
        alignItems="center"
        marginTop={`${navbarHeight}px`}
      >
        {isLoading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text color="red.500">{error?.data?.message || error.error}</Text>
        ) : (
          <Flex width="100%" justify="center" maxHeight="550px">
            <CreateJournal />
            <Divider orientation="vertical" mx="4" />
            <HStack align="start" spacing="4" wrap="wrap">
              {journals ? (
                journals.map((journal) => (
                  <SingleJournal key={journal._id} journal={journal} />
                ))
              ) : (
                <Text>No journals found.</Text>
              )}
            </HStack>
          </Flex>
        )}
      </Flex>
      <EasyMeditation />
    </>
  );
};

export default Journal;
