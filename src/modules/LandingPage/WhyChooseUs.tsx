"use client";

import { Box, Grid, Heading, Image, Text } from "@chakra-ui/react";
// import { FaStar, FaHeart, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

function TwoPartLayout() {
  return (
    <Grid
      mx={"5%"}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} // Two equal parts
      gap={6}
      py={12}
    >
      {/* First Part: Header and Text */}
      <Box
        mt={{ base: "10%", md: "20%" }}
        textAlign={"left"}
        maxW={"5xl"}
        mr={{ md: "15%" }}
      >
        <Heading fontWeight={700} mb={4}>
          Why Choose Our <br />
          Tutors?
        </Heading>
        <Text fontSize="lg">
          Our tutors stand out for their high qualifications and dedication to
          personalised learning. Each instructor holds a certification and has
          vast experience, ensuring students receive the best possible teaching.
        </Text>
      </Box>

      {/* Second Part: Two Columns of Cards */}
      <Box>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {/* First Column: Cards */}
          <Box>
            <Box
              mr={2}
              pl={6}
              py={3}
              borderRadius="md"
              boxShadow={"xl"}
              mb={6} // space between cards
            >
              {/* <Icon as={FaStar} w={8} h={8} color="teal.500" mb={4} /> */}
              <Image src={"certified-icon.svg"} alt="certified icon" />
              <Heading as="h6" size={"small"} mt={2} mb={1}>
                Certified Tutors
              </Heading>
              <Text fontSize={"small"} textAlign={"left"} pr={2}>
                Our teachers are not just smart, but also qualified experts with
                extensive expertise in their respective industries.
              </Text>
            </Box>

            <Box mr={2} pl={6} py={3} borderRadius="md" boxShadow="xl">
              {/* <Icon as={FaCheckCircle} w={8} h={8} color="green.500" mb={4} /> */}
              <Image src="flexible-icon.svg" alt="flexible schedulling icon" />
              <Heading as="h6" size={"small"} mt={2} mb={1}>
                Flexible Scheduling
              </Heading>
              <Text fontSize={"small"} textAlign={"left"} pr={2}>
                Our tutors provide flexible scheduling to accommodate your busy
                schedule. We can fit your preferredd schedule
              </Text>
            </Box>
          </Box>

          {/* Second Column: Cards (Shifted Downward) */}
          <Box mt={10}>
            {" "}
            {/* Shift this column down */}
            <Box
              mr={2}
              pl={6}
              py={3}
              borderRadius="md"
              boxShadow="xl"
              mb={6} // space between cards
            >
              {/* <Icon as={FaHeart} w={8} h={8} color="pink.500" mb={4} /> */}
              <Image src="tailored-icon.svg" alt="tailored curriculum icon" />
              <Heading as="h6" size={"small"} mt={2} mb={1}>
                Tailored Curriculum
              </Heading>
              <Text fontSize={"small"} textAlign={"left"} pr={2}>
                We understand that each learner is unique. That&apos;s why our
                tutors tailor their approaches to each learner&apos;s needs.
              </Text>
            </Box>
            <Box mr={2} pl={6} py={3} borderRadius="md" boxShadow="xl">
              {/* <Icon as={FaThumbsUp} w={8} h={8} color="blue.500" mb={4} /> */}
              <Image src="indept-icon.svg" alt="indept icon" />
              <Heading as="h6" size={"small"} mt={2} mb={1}>
                Indepth Subject Coverage
              </Heading>
              <Text fontSize={"small"} textAlign={"left"} pr={2}>
                Our tutors specialise in a variety of areas ensuring that we
                have the proper specialist for your learning requirements.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Box>
    </Grid>
  );
}

export default TwoPartLayout;
