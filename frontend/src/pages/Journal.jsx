import { useNavbarHeight } from "../components/NavbarHeightContext";
import React from "react";
import EasyMeditation from "../components/EasyMeditation";
import CreateJournal from "../components/CreateJournal";
import SingleJournal from "../components/SingleJournal";

import { Card, CardBody, Flex, Text, Spinner } from "@chakra-ui/react";

import { useGetJournalsQuery } from "../slices/journalsApiSlice";

const Journal = () => {
  const { data: journals, isLoading, error } = useGetJournalsQuery();
  const navbarHeight = useNavbarHeight();

  return (
    <>
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
              <CreateJournal />
              {journals ? (
              journals.map((journal) => (
                <SingleJournal key={journal._id} journal={journal} />
              ))
            ) : (
              <Text>No journals found.</Text>
            )}
            </Flex>
          </CardBody>
        </Card>
      </Flex>
      )}
      <EasyMeditation />
    </>
  );
};

export default Journal;
