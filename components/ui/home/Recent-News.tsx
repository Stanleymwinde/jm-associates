import { MarginX, newsArticles } from "@/utils/constants";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";



const RecentNews = () => {
  return (
    <Box textAlign="center" py={10}>
      <Heading as="h2" fontSize="2xl" fontWeight="bold" mb={2}>
        RECENT NEWS
      </Heading>
      <Box width="50px" height="2px" bg="red.500" mx="auto" mb={6}></Box>
      <Box marginX={MarginX}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {newsArticles.map((article) => (
            <GridItem
              key={article.slug}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              _hover={{
                boxShadow: "xl",
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "all 0.3s",
              }}
            >
              <Link href={`/news/${article.slug}`} passHref>
                <Box as="a">
                  <Image
                    src={article.image}
                    alt={article.title}
                    objectFit="cover"
                    width="100%"
                    height="200px"
                  />
                  <Box p={4}>
                    <Text fontSize="sm" color="gray.500">
                      {article.date}
                    </Text>
                    <Heading as="h3" fontSize="lg" fontWeight="semibold" mt={1}>
                      {article.title}
                    </Heading>
                    <Text mt={2}>
                      {article.excerpt}
                    </Text>
                  </Box>
                </Box>
              </Link>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default RecentNews;
