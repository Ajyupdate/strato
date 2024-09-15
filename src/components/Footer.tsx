"use client";

import {
  Box,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Links = ["Who we are", "Services", "Contact us"];
const Images = ["instagram.svg", "linkedin.svg", "mail.svg", "phone.svg"];
const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      fontWeight={"bold"}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Link href={"https://wa.me/2348178555400"} target="_blank">
        <Image src={"Whatsapp.png"} alt="whatsApp" className="watsappIcon" />{" "}
      </Link>
      <Box mx={"5%"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={{ md: "space-between" }}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
            // ml={{ base: 4, md: "" }}
            spacing={{ base: 0, md: 8 }}
            // alignItems={{ base: "left", md: "center" }}
          >
            <Box fontWeight={"bold"}>Logo</Box>

            {/* <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </Stack>
            </Box> */}
            <Flex alignItems={"center"} display={{ base: "block", md: "flex" }}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "block", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </Flex>
          </Stack>

          <Flex alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display="flex">
              {Images.map((images) => (
                <Image key="images" src={images} alt="images" />
              ))}
              <Text>+23456788809</Text>
            </HStack>
          </Flex>
        </Flex>

        {/* <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box> */}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
}
