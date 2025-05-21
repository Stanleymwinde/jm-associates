"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CompanyHistory = () => {
  const { sectionData, error, loading } = useDefaultSectionData("aboutus");

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text> error: {error}</Text>;
  }

  return (
    <Box py={10} marginX={MarginX}>
      <Box marginX={MarginX}>
        <Image
          src={
            sectionData?.image?.path
              ? `https://cms.jmassociates.co.ke/storage/uploads${sectionData.image.path}`
              : "/about.jpg"
          }
          alt="Company Building"
          w="100%"
          h={{ base: "250px", md: "400px", lg: "500px" }}
          objectFit="cover"
        />
      </Box>

      {/* History Section */}
      <Container maxW="container.lg" py={10} textAlign="center">
        <Box
          divideY={"2px"}
          divideColor={"red.500"}
          borderBottomWidth={"3px"}
          mx={"auto"}
        >
          <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={3}>
            {sectionData!.title}
            {/* <Divider
            w="50px"
            mx="auto"
            borderBottomWidth="3px"
            borderColor="blue.600"
          /> */}
          </Heading>
          <Text
            color="gray.600"
            fontSize={{ base: "sm", md: "md" }}
            mb={8}
            lineHeight={"1.8rem"}
            dangerouslySetInnerHTML={{
              __html: sectionData!.description || "No description available.",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyHistory;
