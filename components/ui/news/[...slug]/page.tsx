"use client";
import CommonHero from "@/components/common-hero";
import {
  Avatar,
  AvatarGroup,
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import React from "react";
import { newsArticles } from "../page";

const BlogDetail = () => {
  const { slug } = useParams();
  let NewsData;
  if (slug) {
    const ss = slug[0];
    // Find the news data based on slug
    NewsData = newsArticles.find((card) => card.slug === ss);

    console.log(NewsData);
  }
  return (
    <>
      <CommonHero title="Recent News" image="/church.JPG" />
      <Container maxW="container.lg" py={10}>
        <VStack gap={6} align="start">
          {/* news Title */}
          <Heading as="h1" size="xl">
            {NewsData ? NewsData.title : "Blog Title"}
          </Heading>

          {/* Author and Metadata */}
          <HStack gap={4}>
            <AvatarGroup>
              <Avatar.Root>
                <Avatar.Fallback />
                <Avatar.Image src="/author.jpg" alt="Author" />
              </Avatar.Root>
            </AvatarGroup>
            <Text fontSize="sm" color="gray.600">
              By Author Name
            </Text>
            <Text fontSize="sm" color="gray.600">
              | Published on Jan 1, 2025
            </Text>
          </HStack>

          {/* Feature Image */}
          <Image
            src={NewsData ? NewsData.imageUrl : "Blog Image"}
            alt="Blog Image"
            borderRadius="md"
          />

          {/* news Content */}
          <Box>
            <Text fontSize="lg" lineHeight="tall">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              efficitur augue ac urna placerat, a malesuada nulla luctus.
              {NewsData ? NewsData.excerpt : "Blog content goes here..."}
            </Text>
          </Box>
        </VStack>
      </Container>
    </>
  );
};

export default BlogDetail;
