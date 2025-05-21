"use client";

import { HomeLinks, MarginX } from "@/utils/constants";
import { Box, Button, Flex, Text, IconButton } from "@chakra-ui/react";
import { Drawer } from "@chakra-ui/react";
import { Portal, CloseButton } from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const BottomNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Box bg="#aa1f30" p={4} w="100%" textAlign="center">
      <Box mx={MarginX}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "row", md: "row" }}
        >
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            width="100%"
            justifyContent="space-between"
          >
            {/* Navigation Links on the Left */}
            <Flex gap={7} alignItems="center">
              {HomeLinks.map((home, index) => (
                <Box key={index}>
                  <Link href={home.link}>
                    <Text fontSize="2xl" color="white" fontFamily="initial">
                      {home.text}
                    </Text>
                  </Link>
                </Box>
              ))}
            </Flex>

            <Link href={"/#quote"}>
              <Button bg="white" color="#aa1f30">
                Get a Quote
              </Button>
            </Link>
          </Flex>

          {/* Hamburger Menu - Only Visible on Mobile */}
          <Drawer.Root
            closeOnEscape={true}
            closeOnInteractOutside={true}
            open={open}
            onOpenChange={(e) => setOpen(e.open)}
          >
            <Drawer.Trigger asChild>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open Menu"
                color="white"
                bg="transparent"
                _hover={{ bg: "whiteAlpha.300" }}
                onClick={() => setOpen(true)}
              >
                <RxHamburgerMenu />
              </IconButton>
            </Drawer.Trigger>

            <Portal>
              <Drawer.Backdrop />
              <Drawer.Positioner>
                <Drawer.Content bg="#aa1f30" p={4}>
                  <Drawer.Header>
                    <Drawer.Title color="white">JM Associates</Drawer.Title>
                  </Drawer.Header>

                  <Drawer.Body>
                    <Flex flexDirection="column" gap={4} alignItems="center">
                      {HomeLinks.map((home, index) => (
                        <Box key={index} onClick={() => setOpen(false)}>
                          <Link href={home.link}>
                            <Text
                              fontSize="xl"
                              color="white"
                              fontFamily="initial"
                            >
                              {home.text}
                            </Text>
                          </Link>
                        </Box>
                      ))}

                      <Button bg="white" color="#aa1f30">
                        Get a Quote
                      </Button>
                    </Flex>
                  </Drawer.Body>

                  <Drawer.Footer>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Footer>
                </Drawer.Content>
              </Drawer.Positioner>
            </Portal>
          </Drawer.Root>
        </Flex>
      </Box>
    </Box>
  );
};

export default BottomNav;
