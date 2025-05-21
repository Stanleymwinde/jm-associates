// components/home/Loading.tsx
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <SkeletonCircle size="10" />
      <SkeletonText mt="4" noOfLines={3} gap="4" height="2" />
    </Box>
  );
};

export default Loading;
