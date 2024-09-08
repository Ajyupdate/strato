import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function MissionVisionLayout() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
      //   gap={6}
      //   p={6}
    >
      {/* First Part: Mission */}
      <Box bg={"#DFFFF7"} p={"10%"}>
        <Heading as="h2" size="xl" mb={4}>
          Mission
        </Heading>
        <Text fontSize="lg">
          To connect students with highly educated teachers who deliver
          personalised and effective instruction, making quality learning more
          accessible and easy for everyone.
        </Text>
      </Box>

      {/* Second Part: Vision */}
      <Box bg={"#FFF9E9"} p={"10%"}>
        <Heading as="h2" size="xl" mb={4}>
          Vision
        </Heading>
        <Text fontSize="lg">
          To be the best educational support platform, every student needs to be
          provided with the direction and tools they need to reach their full
          potential, regardless of location or learning style.
        </Text>
      </Box>
    </Grid>
  );
}

export default MissionVisionLayout;
