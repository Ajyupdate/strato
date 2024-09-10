"use client";

import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
// import { FaStar, FaHeart, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

function HowWeMake() {
  return (
    <Grid
      mx={"5%"}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} // Two equal parts
      gap={6}
      py={12}
    >
      {/* First Part: Header and Text */}

      <Image src="how-image.svg" alt="how we make section" />
      {/* Second Part: Two Columns of Cards */}
      <Box>
        <Box
          mt={{ base: "10%", md: "20%" }}
          textAlign={"left"}
          maxW={"5xl"}
          mr={{ md: "15%" }}
        >
          <Heading fontWeight={700} mb={4}>
            How We Make Learning Better for You
          </Heading>
          <Text fontSize="lg">
            At our company, we connect students with certified tutors for
            personalized online and in-person lessons. Our mission is to make
            high-quality education accessible and effective, helping every
            learner achieve their goals with tailored support and flexibility.
          </Text>
        </Box>
      </Box>
    </Grid>
  );
}

export default HowWeMake;
