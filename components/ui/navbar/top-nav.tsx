import { MarginX, socialIcons } from "@/utils/constants";
import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <Box bg={"gray.200"} width="100%">
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        gap={4}
        justify={{ base: "center", md: "space-between" }}
        align="center"
        flexWrap="wrap"
        marginX={MarginX}
        py={4}
        px={4}
      >
        {/* Opening Hours */}
        <Flex flexDirection="row" flexWrap="wrap" justify="center">
          <Text pr={2} color={"red.500"} fontWeight={"bold"}>
            Opening:
          </Text>
          <Text textAlign="center">Mon-Sat 8:00 - 18:00. Sunday CLOSED</Text>
        </Flex>

        {/* Social Icons */}
        <Flex gap={4} flexWrap="wrap" justify="center">
          {socialIcons.map((icon, index) => (
            <Box key={index}>
              <Link href={icon.link} target="_blank">
                <Icon color={icon.color} boxSize={6}>
                  {icon.icon}
                </Icon>
              </Link>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNav;
