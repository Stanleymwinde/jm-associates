"use client";

import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useDefaultSectionArray } from "@/utils/hooks/useDefaultSectionArray";
import Link from "next/link";
import Loading from "@/components/Loading";

const CarouselComponent = () => {
  const router = useRouter();
  const {
    error,
    loading,
    sectionArray: slides,
  } = useDefaultSectionArray("carousel");

  if (loading) return <Loading />;
  if (error) {
    return (
      <Box
        width="100%"
        height="85vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl" color="red.500">
          Error loading carousel: {error}
        </Text>
      </Box>
    );
  }
  if (!slides || slides.length === 0) {
    return (
      <Box
        width="100%"
        height="85vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl" color="gray.500">
          No slides available.
        </Text>
      </Box>
    );
  }

  return (
    <Box width="100%" height="85vh">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box position="relative" width="100%" height="75vh">
              <Image
                src={
                  slide.image
                    ? `https://cms.jmassociates.co.ke/storage/uploads${slide.image.path}`
                    : "/Home/about.jpeg"
                }
                alt={`Slide ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />

              {/* Text Overlay with Blur */}
              <Box
                position="absolute"
                top="50%" /* Center vertically */
                left="50%" /* Center horizontally */
                transform="translate(-50%, -50%)" /* Perfect centering */
                width="95%"
                maxW="900px"
                bg="blackAlpha.500"
                // backdropFilter="blur(12px)"
                borderRadius="lg"
                p={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
              >
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  mb={4}
                >
                  {slide.title}
                </Text>
                <Text fontSize={{ base: "lg", md: "xl" }} mb={6}>
                  {slide.description}
                </Text>
                <Link href={slide.link || "/about-us"} passHref>
                  <Button
                    size="lg"
                    bg={"red.500"}
                    color="white"
                    _hover={{ bg: "red.600" }}
                  >
                    <Text fontSize={{ base: "md", md: "lg" }}>"See More"</Text>
                  </Button>
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default CarouselComponent;
