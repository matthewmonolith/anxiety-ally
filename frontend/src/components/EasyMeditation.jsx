import React from 'react';
import { Button, Tooltip } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const EasyMeditation = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/meditate/calm');
  };

  return (
    <Tooltip label="Quickly access a meditation">
      <Button
        position="fixed"
        bottom="4"
        right="4"
        colorScheme="teal"
        onClick={handleRedirect}
      >
        Feeling Overwhelmed?
      </Button>
    </Tooltip>
  );
};

export default EasyMeditation;
