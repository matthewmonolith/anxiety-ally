import React from "react";
import SingleExposure from "../components/SingleExposure.jsx";
import EasyMeditation from "../components/EasyMeditation.jsx";
import CreateExposure from "../components/CreateExposure.jsx";
import {
  Flex,
  Text,
  HStack,
  Spinner,
  Card,
  CardBody,
  Center,
} from "@chakra-ui/react";
import { useNavbarHeight } from "../components/NavbarHeightContext";
import {
  useGetExposuresQuery,
  useUpdateCompletionMutation,
  useDeleteExposureMutation,
} from "../slices/exposuresApiSlice";

const Exposure = () => {
  const navbarHeight = useNavbarHeight();
  const { data: exposures, isLoading, error, refetch } = useGetExposuresQuery();
  const [updateCompletion] = useUpdateCompletionMutation();
  const [deleteExposure] = useDeleteExposureMutation();

  const updateCompletionHandler = async (exposureId) => {
    try {
      await updateCompletion({ id: exposureId });
      refetch();
    } catch (error) {
      console.error("Error updating exposure completion:", error);
    }
  };

  const deleteHandler = async (exposureId) => {
    try {
      await deleteExposure({ id: exposureId });
      refetch();
    } catch (error) {
      console.error("Error deleting exposure:", error);
    }
  };

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
                <CreateExposure />
                {exposures.map((exposure) => (
                  <SingleExposure
                    key={exposure._id}
                    exposure={exposure}
                    updateCompletionHandler={updateCompletionHandler}
                    deleteHandler={deleteHandler}
                  />
                ))}
              </Flex>
            </CardBody>
          </Card>
        </Flex>
      )}
      <EasyMeditation />
    </>
  );
};

export default Exposure;
