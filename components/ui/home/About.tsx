"use client";
import Loading from "@/components/Loading";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionData } from "@/utils/hooks/useDefaultSectionData";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const { sectionData, error, loading } = useDefaultSectionData("homeabout");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <Box marginX={MarginX} py={10}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(5, 1fr)",
        }}
        gap="6"
      >
        <GridItem colSpan={2}>
          <Box borderRadius="md" overflow="hidden" boxShadow="md" width={""}>
            <Image
              src={
                sectionData?.image?.path
                  ? `https://cms.jmassociates.co.ke/storage/uploads${sectionData.image.path}`
                  : "/about.jpg"
              }
              alt="About"
              width={500}
              height={500}
              objectFit="contain"
              layout="responsive"
            />
          </Box>
        </GridItem>

        <GridItem
          colSpan={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          px={5}
        >
          <Box textAlign="start" width="100%">
            <Box textAlign="center">
              <Heading
                size="5xl"
                fontFamily="initial"
                mx="auto"
                width="fit-content"
              >
                {sectionData?.title || "Default Title"}
              </Heading>

              <Flex justify="center" width="100%">
                <Box
                  width="50%" // You can use 'sm', 'md' etc. or 'px' values too
                  maxWidth="100%"
                  divideY="2px"
                  divideColor="red.500"
                  divideStyle="solid"
                  py={1}
                  display="flex"
                  flexDirection="column"
                >
                  <Box></Box>
                  <Box></Box>
                </Box>
              </Flex>
            </Box>

            {/* Second Divider
            <Box
              pl={5}
              width="100%"
              divideY={"2px"}
              divideColor={"red.500"}
              divideStyle={"solid"}
            >
              <Box></Box>
              <Box></Box>
            </Box> */}

            <Text
              py={10}
              fontFamily={"initial"}
              fontSize={["md", "xl"]}
              maxW="100%"
              textAlign="justify"
              dangerouslySetInnerHTML={{
                __html: sectionData?.description || "No description available.",
              }}
            />
          </Box>

          <Link href={"/about-us"} passHref>
            <Box
              width="100%"
              _groupHover={{ color: "black", cursor: "pointer" }}
            >
              <Text
                fontWeight="bold"
                color="red.500"
                display="inline-flex"
                fontSize={["md", "xl"]}
                alignItems="center"
                _hover={{
                  color: "black",
                  transform: "scale(1.1)",
                  transition: "all 0.3s",
                }}
              >
                Learn more about us
                <Box as="span" ml={2} fontSize={["md", "xl"]} fontWeight="bold">
                  →
                </Box>
              </Text>
            </Box>
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default About;
