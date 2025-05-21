"use client";
import { useEffect, useState } from "react";
import {
  Box,
  VStack,
  Text,
  Button,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Loading from "@/components/Loading";
import { useSearchParams } from "next/navigation";

const MainService = () => {
  // get current url parameters
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("tab");
  const {
    error,
    loading,
    sectionArray: serviceData,
  } = useDefaultSectionArray("services");

  const [activeTab, setActiveTab] = useState<DefaultSectionInterface | null>(
    null
  );

  useEffect(() => {
    if (serviceData && serviceData.length > 0) {
      const matchedTab = serviceData.find((tab) => tab._id === serviceId);
      if (matchedTab) {
        setActiveTab(matchedTab);
      } else {
        setActiveTab(serviceData[0]); // fallback to first tab if no match
      }
    }
  }, [serviceData, serviceId]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!serviceData || serviceData.length === 0) {
    return <Text>No services available</Text>;
  }

  if (!activeTab) {
    return null; // or <Loading /> optionally
  }

  return (
    <Box as="main" mx={{ base: 2, md: MarginX }}>
      {/* Header Section */}
      <Box textAlign="center" mb={8} p={4} borderRadius="md">
        <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" mb={4}>
          Our Services
        </Text>
        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
          Discover a wide range of professional services tailored to meet the
          unique needs of your business. Our team of experts is dedicated to
          delivering innovative solutions and exceptional results.
        </Text>
      </Box>

      {/* Main Content Container */}
      <Box p={4} bg="white" boxShadow="md">
        <Flex
          direction={{ base: "column", md: "row" }} // Stack vertically on mobile, horizontal on desktop
          align="stretch"
          height={{ base: "auto", md: "100vh" }}
        >
          {/* Sidebar */}
          <VStack
            bg="gray.100"
            align="stretch"
            width={{ base: "100%", md: "250px" }} // Full width on mobile, fixed width on desktop
            gap={2}
            pb={4}
          >
            {serviceData.map((tab) => (
              <Button
                key={tab.title}
                variant="ghost"
                justifyContent="flex-start"
                bg={activeTab.title === tab.title ? "red.500" : "transparent"}
                color={activeTab.title === tab.title ? "white" : "black"}
                _hover={{ bg: "blue.300", color: "black" }}
                onClick={() => setActiveTab(tab)}
                width="100%"
              >
                {tab.title}
              </Button>
            ))}
          </VStack>

          {/* Content Area */}
          <Box
            flex={1}
            px={{ base: 4, md: 6 }}
            overflowY="auto"
            maxHeight={{ base: "auto", md: "calc(s100vh - 100px)" }}
          >
            <Image
              src={
                activeTab.image
                  ? `https://cms.jmassociates.co.ke/storage/uploads${activeTab.image.path}`
                  : "/Home/about.jpeg"
              }
              alt={activeTab.title}
              width="100%"
              height={{ base: "200px", md: "300px" }}
              objectFit="cover"
              mb={4}
              borderRadius="md"
            />
            <Heading
              as="h2"
              size={{ base: "xl", md: "3xl" }} // Smaller heading on mobile
              color="red.600"
              textAlign="center"
              py={6}
              mb={2}
              fontFamily={"initial"}
              fontWeight="bold"
            >
              {" "}
              {activeTab.title}
            </Heading>

            <Text
              fontSize={{ base: "sm", md: "md" }}
              whiteSpace="pre-line"
              mt={2}
              // lineBreak={"anywhere"}
              lineHeight={
                { base: "1.5", md: "2" } // Adjust line height for mobile
              }
              dangerouslySetInnerHTML={{
                __html: (activeTab.description ?? "").replace(/\n/g, "<br />"),
              }} // Convert newlines to <br /> tags
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default MainService;
