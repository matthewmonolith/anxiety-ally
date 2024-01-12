import React from "react";
import SingleExposure from "../components/SingleExposure.jsx";
import EasyMeditation from "../components/EasyMeditation.jsx";
import CreateExposure from "../components/CreateExposure.jsx";
import {
  Flex,
  Text,
  Divider,
  HStack,
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
    <Flex
      marginTop={`${navbarHeight}px`}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text color="red.500">{error?.data?.message || error.error}</Text>
      ) : (
        <Flex width="100%" justify="center">
          <CreateExposure />
          <HStack align="start" spacing="4" wrap="wrap">
            {exposures.map((exposure) => (
              <SingleExposure
                key={exposure._id}
                exposure={exposure}
                updateCompletionHandler={updateCompletionHandler}
                deleteHandler={deleteHandler}
              />
            ))}
          </HStack>
        </Flex>
      )}
    </Flex>
    <EasyMeditation />
    </>
  );
};

export default Exposure;
