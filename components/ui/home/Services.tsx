"use client";
import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Loading from "@/components/Loading";
import Link from "next/link";

const Services = () => {
  const {
    sectionArray: services,
    error,
    loading,
  } = useDefaultSectionArray("services");
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }
  if (!services || services.length === 0) {
    return <Text>No services available</Text>;
  }

  // console.log(
  //   services.map((service) => service.Icon || "No icon available"),
  //   "services"
  // );

  return (
    <>
      <Box bg="gray.50" py={16}>
        <Box marginX={MarginX} textAlign="center">
          <Heading
            as="h2"
            size="2xl"
            fontWeight="bold"
            position="relative"
            pb={4}
          >
            Our Services
            <Box mt={2} w="50px" h="3px" bg="red.500" mx="auto"></Box>
          </Heading>
          <Text color="gray.600" mt={4} mb={10} fontSize={["md", "lg"]}>
            Discover the wide range of professional services we offer to help
            your business thrive. From accounting and taxation to risk
            management and corporate finance, we are committed to delivering
            tailored solutions that meet your unique needs.
          </Text>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={8}>
            {services.map((service, index) => (
              <GridItem
                key={index}
                textAlign="left"
                p={6}
                borderRadius="md"
                bg="white"
                boxShadow={"md"}
                _hover={{ boxShadow: "xl", cursor: "pointer" }}
                transition="all 0.3s"
              >
                <Flex gap={4} flexDirection="row">
                  <Link href={`/services?tab=${service._id}`}>
                    <Image
                      src={
                        service.image
                          ? `https://cms.jmassociates.co.ke/storage/uploads${service.image.path}`
                          : "/Home/about.jpeg"
                      }
                      alt={service.title}
                      width={500}
                      height={200}
                      objectFit="cover"
                      borderRadius="md"
                      boxShadow="md"
                    />
                  </Link>
                  <Link href={`/services?tab=${service._id}`}>
                    <Heading size="md" mt={3} fontWeight="bold">
                      {service.title}
                    </Heading>
                    <Text
                      mt={2}
                      color="gray.600"
                      dangerouslySetInnerHTML={{
                        __html: service
                          .description!.split(" ")
                          .slice(0, 20)
                          .join(" "),
                      }}
                    />
                  </Link>
                </Flex>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Services;
