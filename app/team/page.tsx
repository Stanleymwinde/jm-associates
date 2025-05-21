"use client";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { MarginX } from "@/utils/constants";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Loading from "@/components/Loading";

interface Props {
  member: {
    name: string;
    dp: string;
    pos: string;
    x: string;
    instagram: string;
    linkedin: string;
  };
}

const TeamCard = () => {
  const controls = useAnimation();

  function onHover() {
    controls.start({
      opacity: 1,
      scale: 1,
    });
  }

  function onLeave() {
    controls.start({
      opacity: 0,

      scale: 0.3,
    });
  }

  const {
    error,
    loading,
    sectionArray: TeamsData,
  } = useDefaultSectionArray("team");
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Text>Error: {error}</Text>;
  }
  if (!TeamsData || TeamsData.length === 0) {
    return <Text>No Team members</Text>;
  }

  return (
    <Box marginX={MarginX} mb={10}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mb={10}
      >
        <GridItem colSpan={{ base: 1, md: 3 }} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" mb={4}>
            Meet Our Team
          </Text>
          <Text fontSize="lg" color="gray.600">
            A diverse team delivering audit, tax, advisory, outsourcing, and
            corporate finance solutions across Africa and beyond.
          </Text>
        </GridItem>
      </Grid>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={6}
        mb={10}
      >
        {/* Map through the team data and create a card for each member */}
        {TeamsData.map((member, idx) => (
          <GridItem key={idx} textAlign="center">
            <Stack
              onMouseOver={onHover}
              onMouseLeave={onLeave}
              cursor="pointer"
              boxShadow="md"
              pos="relative"
              overflow="hidden"
              borderRadius="md"
              _hover={{
                transform: "scale(1.05)",
                transition: "all .3s ease-in-out",
                boxShadow: "lg",
              }}
            >
              {/* <motion.div
                className="socials"
                initial={{ opacity: 0, scale: 0.3 }}
                animate={controls}
                style={{
                  top: 0,
                  right: 0,
                  position: "absolute",
                }}
              >
                <Stack
                  bg="brand.white"
                  cursor="default"
                  p={3}
                  borderTop="1px solid black"
                  borderRight="1px solid black"
                >
                  {iconsData.map((item, i) => (
                    <Box key={i}>
                      <Link href={item.link} target="_blank">
                        <Icon
                          as={item.icon}
                          cursor="pointer"
                          transition="all .3s ease-in-out"
                          _hover={{
                            color: "brand.red",
                          }}
                          boxSize={6}
                        />
                      </Link>
                    </Box>
                  ))}
                </Stack>
              </motion.div> */}

              <Box h="350px" overflow="hidden">
                <Image
                  transition="all .3s ease-in-out"
                  src={
                    member.image
                      ? `https://cms.jmassociates.co.ke/storage/uploads${member.image.path}`
                      : "/Home/about.jpeg"
                  }
                  w="100%"
                  h="100%"
                  objectFit="contain"
                  alt="team"
                />
              </Box>
              <Stack align="center" pb="1.8rem">
                <Box as="h4" fontWeight="bold" fontSize="2xl">
                  {member.title}
                </Box>
                <Text fontSize="lg" color="brand.red" fontWeight="semibold">
                  {member.description}
                </Text>
              </Stack>
            </Stack>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default TeamCard;

const iconsData = [
  {
    icon: AiFillInstagram,
    link: "https://www.instagram.com//",
  },
  {
    icon: FaXTwitter,
    link: "https://twitter.com/",
  },
  {
    icon: FaLinkedin,
    link: "http://linkedin.com/in/",
  },
];
