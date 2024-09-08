"use client";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function HeroSection() {
  return (
    <Box mx={"5%"}>
      <Container maxW={"5xl"}>
        <Stack
          textAlign={"center"}
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 8, md: 14 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", md: "64px" }}
            lineHeight={"110%"}
          >
            Connecting Learners with Expert Tutors -{" "}
            <Text as={"span"} color={"#238C72"}>
              Anywhere, Anytime
            </Text>
          </Heading>
          <Text
            fontSize={{ md: "24px", base: "20px" }}
            fontWeight={400}
            maxW={"3xl"}
          >
            We deliver the greatest tutors to your home, whether online,
            in-person, or globally.
          </Text>
          <Stack spacing={6} direction={{ md: "row", base: "column" }}>
            <Button
              py={10}
              px={16}
              bg="#238C72"
              color="white"
              _hover={{ bg: "#1E7A63" }} // optional: a slightly darker shade for hover
            >
              <Box as={"span"} fontWeight={400} fontSize={"24px"}>
                Find a Tutor
              </Box>
            </Button>
            <Stack direction={"row"}>
              <AvatarGroup size="md" max={3}>
                <Avatar
                  name="Ryan Florence"
                  src="https://bit.ly/ryan-florence"
                />
                <Avatar
                  name="Segun Adebayo"
                  src="https://bit.ly/sage-adebayo"
                />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar
                  name="Prosper Otemuyiwa"
                  src="https://bit.ly/prosper-baba"
                />
                <Avatar
                  name="Christian Nwamba"
                  src="https://bit.ly/code-beast"
                />
              </AvatarGroup>{" "}
              <Box
                fontSize={{ base: "small", md: "md" }}
                as="span"
                mt={{ md: "10%", base: "5%" }}
              >
                Available Tutors
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Flex w={"full"}>
        <Image borderRadius={"xl"} src="hero-image.svg" alt="hero " />
      </Flex>
    </Box>
  );
}
