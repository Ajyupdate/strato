"use client";

import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
// import { FaStar, FaHeart, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

function UnlockSection() {
  return (
    <Grid
      mx={"5%"}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} // Two equal parts
      gap={6}
      py={12}
    >
      <Box
        mt={{ base: "10%", md: "20%" }}
        textAlign={"left"}
        maxW={"5xl"}
        mr={{ md: "15%" }}
      >
        <Heading fontWeight={700} mb={4}>
          Unlock the Benefits of Online Tutoring
        </Heading>
        <Text fontSize="lg">
          Online tutoring offers flexible, personalized learning from certified
          tutors, fitting into any schedule. It provides tailored support and
          access to a wide range of subjects, helping kids excel and build
          confidence from the comfort of their home.
        </Text>
      </Box>

      {/* Second Part: Two Columns of Cards */}
      <Box>
        <Image src="unlock-image.svg" alt="how we make section" />
      </Box>
    </Grid>
  );
}

export default UnlockSection;
