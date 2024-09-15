"use client";
import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ContactForm() {
  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    country: "",
    state: "",
    message: "",
  };

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box
      w="100%" // Full width
      // h="100vh" // Full height of the viewport
      backgroundImage="url('contact-section.svg')" // Path to your image
      backgroundSize="cover" // Cover the entire area
      backgroundPosition="center" // Center the image
      backgroundRepeat="no-repeat" // Prevent image repetition
    >
      <Box p={{ md: 8 }} maxW={{ md: "65%", base: "100%" }} mx="auto">
        <Center color={"white"}>
          <Heading
            px={{ base: "5%", md: "" }}
            mt={{ base: 8, md: 0 }}
            fontWeight={{ base: 600, md: 700 }}
            fontSize={{ base: 24, md: 48 }}
            mb={4}
            textAlign={"center"}
          >
            Contact us today to get the best tutor for your kids
          </Heading>
        </Center>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form>
              <Stack spacing={6} bg={"white"} p={12}>
                {/* First Row */}
                <SimpleGrid columns={[1, 2]} spacing={6}>
                  <FormControl>
                    <FormLabel>Full Name (Optional)</FormLabel>
                    <Field
                      as={Input}
                      name="fullName"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                      placeholder="John Doe"
                    />
                  </FormControl>

                  <FormControl
                    isRequired
                    isInvalid={touched.emailAddress && !!errors.emailAddress}
                  >
                    <FormLabel>Email Address</FormLabel>
                    <Field
                      as={Input}
                      name="emailAddress"
                      type="email"
                      placeholder="example@example.com"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                    />
                    <ErrorMessage
                      name="emailAddress"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>
                </SimpleGrid>

                {/* Second Row */}
                <SimpleGrid columns={[1, 2]} spacing={6}>
                  <FormControl
                    isRequired
                    isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                  >
                    <FormLabel>Phone Number</FormLabel>
                    <Field
                      as={Input}
                      name="phoneNumber"
                      placeholder="123-456-7890"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>Country (Optional)</FormLabel>
                    <Field
                      as={Input}
                      name="country"
                      placeholder="Country"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                    />
                  </FormControl>
                </SimpleGrid>

                {/* Third Row */}
                <SimpleGrid columns={[1, 2]} spacing={6}>
                  <FormControl>
                    <FormLabel>State (Optional)</FormLabel>
                    <Field
                      as={Input}
                      name="state"
                      placeholder="State"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                    />
                  </FormControl>

                  <FormControl
                    isRequired
                    isInvalid={touched.message && !!errors.message}
                  >
                    <FormLabel>Message</FormLabel>
                    <Field
                      as={Textarea}
                      name="message"
                      placeholder="Your message here"
                      variant="outline"
                      border="1px"
                      borderColor="#1E1E1E"
                      boxShadow="1px 1px 1px 0 #1E1E1E"
                      size="lg" // Size the input
                      py={{ base: 6, md: 8 }}
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="error-message"
                    />
                  </FormControl>
                </SimpleGrid>

                <Button colorScheme="teal" type="submit">
                  Submit
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}
