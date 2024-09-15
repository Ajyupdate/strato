import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";

const subjects = [
  "Mathematics",
  "English",
  "Chemistry",
  "Physics",
  "Economics",
  "Yoruba",
  "Coding",
  "&More",
];

const Subjects = () => {
  return (
    <Box mx={"5%"} mt={"5%"}>
      <Center>
        <Heading
          fontWeight={{ base: 600, md: 700 }}
          fontSize={{ base: 32, md: 48 }}
          mb={4}
          textAlign={"center"}
        >
          Explore Our Range of Tutoring Subjects <br />
          for Your Kids
        </Heading>
      </Center>

      <SimpleGrid columns={[2, null, 4]} spacing="40px" mx={"5%"}>
        {subjects.map((subject, index) => (
          <Box
            key={index}
            bg="#FFF9E9" // Light background color
            borderRadius="md"
            px={4}
            py={{ base: 5, md: 10 }}
            textAlign="center"
            boxShadow="lg"
            borderLeft="10px solid #FECF48" // Left border with color
            borderBottom="10px solid #FECF48" // Bottom border with color
            borderBottomLeftRadius="md" // To curve the bottom-left corner
          >
            <Text fontSize="md" fontWeight="bold">
              {subject}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Subjects;
