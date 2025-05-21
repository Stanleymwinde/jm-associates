import { Box } from "@chakra-ui/react";
import React from "react";

const BottomFooter = () => {
  return (
    <Box bg="gray.100" p={4} w="100%" textAlign="center">
      <Box fontSize="sm" color="gray.500">
        &copy; {new Date().getFullYear()} All rights reserved
      </Box>
    </Box>
  );
};

export default BottomFooter;
