"use client";
import { MarginX } from "@/utils/constants";
import {
  Box,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Tabs,
  Text,
} from "@chakra-ui/react";
import {
  FaRegSmile,
  FaRegFileAlt,
  FaUserFriends,
  FaAward,
} from "react-icons/fa";

const CompanyOverview = () => {
  return (
    <Box py={10} bg={"gray.100"}>
      <Box marginX={MarginX}>
        {/* Stats Section */}
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={10} textAlign="center">
          <Box>
            <Icon as={FaAward} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              10
            </Heading>
            <Text>YEARS OF EXPERIENCE</Text>
          </Box>
          <Box>
            <Icon as={FaRegFileAlt} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              1240
            </Heading>
            <Text>NUMBER OF PROJECTS</Text>
          </Box>
          <Box>
            <Icon as={FaRegSmile} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              2187
            </Heading>
            <Text>HAPPY CLIENTS</Text>
          </Box>
          <Box>
            <Icon as={FaUserFriends} boxSize={10} color="red.500" />
            <Heading fontSize="5xl" py={4}>
              2187
            </Heading>
            <Text>CLIENTS' SATISFACTION</Text>
          </Box>
        </SimpleGrid>

        {/* Tabs Section */}
        <Box mt={10}>
          <Box justifyContent={"center"} textAlign="center" py={5}>
            <Heading
              fontSize="5xl"
              py={4}
              borderBottom="3px solid red"
              display="inline-block"
              textAlign="center"
            >
              COMPANY OVERVIEW
            </Heading>
          </Box>

          <Tabs.Root defaultValue="vision">
            <Tabs.List
              mt={5}
              display="flex"
              gap={5}
              borderBottom="0.5px solid gray"
            >
              <Tabs.Trigger value="mission">
                <Text fontWeight="bold">OUR MISSION</Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="vision">
                <Text fontWeight="bold" color="red.500">
                  OUR VISION
                </Text>
              </Tabs.Trigger>
              <Tabs.Trigger value="core values">
                <Text fontWeight="bold">OUR CORE VALUES</Text>
              </Tabs.Trigger>
              <Tabs.Indicator bg="red.500" height="3px" />
            </Tabs.List>

            <Tabs.Content value="mission">
              <Text mt={3}>
                To be a brand that delivers quality service to our clients and
                value to our employees and stakeholders.
              </Text>
            </Tabs.Content>

            <Tabs.Content value="vision">
              <Stack mt={3} gap={2}>
                <Text>
                  To be the preferred innovative audit and assurance, tax, and
                  advisory firm in Africa.
                </Text>
              </Stack>
            </Tabs.Content>

            <Tabs.Content value="core values">
              <Text mt={3}>
                To ensure relevance, quality, and effectiveness in each
                assignment, we have identified and embraced four basic
                principles to support our service delivery
              </Text>
            </Tabs.Content>
          </Tabs.Root>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyOverview;
