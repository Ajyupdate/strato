"use client";

import {
  Box,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
// import { FaStar, FaHeart, FaCheckCircle, FaThumbsUp } from "react-icons/fa";

function Coding() {
  return (
    <Grid
      mt={"5%"}
      mx={{ base: "10%", md: "5%" }}
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
          Empower Your Child with Coding Skills
        </Heading>
        <Box>
          <Text fontSize="lg">
            We provide specially designed coding courses that promote critical
            thinking and creativity for children, as well as flexible,
            high-quality education to Nigerian families in the diaspora.
          </Text>
          <List spacing={3} mt={2}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Teaches problem-solving and logical thinking.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Encourages creativity through coding projects.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Builds confidence in using technology.
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Prepares kids for future digital careers.
            </ListItem>
          </List>
        </Box>
      </Box>

      {/* Second Part: Two Columns of Cards */}
      <Box>
        <Image src="coding-image.svg" alt="how we make section" />
      </Box>
    </Grid>
  );
}

export default Coding;
