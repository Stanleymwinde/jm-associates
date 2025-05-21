import { MarginX } from "@/utils/constants";
import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/react";

export const newsArticles = [
  {
    id: 1,
    title: "A digital prescription for the pharma",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/Home/10-Years.jpg",
    slug: "a-digital-prescription-for-the-pharma",
    excerpt:
      "The pharmaceutical industry is undergoing a digital transformation, with companies increasingly adopting new technologies to improve efficiency and patient outcomes.",
  },
  {
    id: 2,
    title: "Retail banks wake up to digital lending",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/Home/Consultancy.jpg",
    slug: "retail-banks-wake-up-to-digital-lending",
    excerpt:
      "Retail banks are increasingly recognizing the importance of digital lending in enhancing customer experience and streamlining operations.",
  },
  {
    id: 3,
    title: "Seven weeks working ‘pro bono’",
    date: "May, 26 2017",
    comments: 0,
    imageUrl: "/Home/Leverage.png",
    slug: "seven-weeks-working-pro-bono",
    excerpt:
      "A team of consultants spent seven weeks working pro bono to help a charity improve its operations and better serve its community.",
  },
];

const HomeNews = () => {
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
              key={article.id}
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
              <Image
                src={article.imageUrl}
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
                <Flex align="center" mt={2}></Flex>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default HomeNews;
