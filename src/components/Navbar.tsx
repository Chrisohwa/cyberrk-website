"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  Stack,
  Container,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <Box
      as="nav"
      position="fixed"
      w="100%"
      bg={
        scrolled
          ? colorMode === "dark"
            ? "rgba(23, 25, 35, 0.8)"
            : "rgba(255, 255, 255, 0.8)"
          : "transperent"
      }
      backdropFilter={scrolled ? "blur(12px)" : "none"}
      boxShadow={scrolled ? "sm" : "none"}
      zIndex={1000}
      borderBottom="1px"
      borderColor={
        scrolled
          ? colorMode === "dark"
            ? "gray.700"
            : "gray.200"
          : "transparent"
      }
      transition="all 0.3s ease"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" passHref>
              <Text
                fontSize="2xl"
                fontWeight="bold"
                bgGradient="linear(to-l, brand.marianBlue, brand.polynesianBlue, brand.gold)"
                bgClip="text"
                cursor="pointer"
                _hover={{ transform: "scale(1.05)" }}
                transition="all 0.3s ease"
              >
                Cyberrk
              </Text>
            </Link>
          </MotionBox>

          <HStack spacing={8} alignItems="center">
            <HStack as="nav" spacing={6} display={{ base: "none", md: "flex" }}>
              {navLinks.map((link, index) => (
                <MotionBox
                  key={link.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={link.href} passHref>
                    <ChakraLink
                      px={2}
                      py={1}
                      rounded="md"
                      fontWeight="medium"
                      color={
                        isActive(link.href)
                          ? colorMode === "dark"
                            ? "brand.gold"
                            : "brand.gold"
                          : colorMode === "dark"
                          ? "gray.200"
                          : scrolled
                          ? "gray.700"
                          : "#fff"
                      }
                      _hover={{
                        textDecoration: "none",
                        color:
                          colorMode === "dark"
                            ? "brand.gold"
                            : "brand.marianBlue",
                        transform: "translateY(-2px)",
                      }}
                      transition="all 0.3s ease"
                    >
                      {link.name}
                    </ChakraLink>
                  </Link>
                </MotionBox>
              ))}
            </HStack>

            <MotionBox
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <IconButton
                size="md"
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                aria-label="Toggle theme"
                onClick={toggleColorMode}
                bg={
                  colorMode === "dark"
                    ? "brand.polynesianBlue"
                    : "brand.marianBlue"
                }
                color="white"
                _hover={{
                  bg:
                    colorMode === "dark"
                      ? "brand.marianBlue"
                      : "brand.polynesianBlue",
                  transform: "rotate(180deg)",
                }}
                transition="all 0.5s ease"
              />
            </MotionBox>

            <IconButton
              size="md"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label="Open Menu"
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
              bg={
                colorMode === "dark"
                  ? "brand.polynesianBlue"
                  : "brand.marianBlue"
              }
              color="white"
              _hover={{
                bg:
                  colorMode === "dark"
                    ? "brand.marianBlue"
                    : "brand.polynesianBlue",
              }}
            />
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={8} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} passHref>
                  <ChakraLink
                    px={2}
                    py={1}
                    rounded="md"
                    fontWeight="medium"
                    color={
                      isActive(link.href)
                        ? colorMode === "dark"
                          ? "brand.gold"
                          : "brand.marianBlue"
                        : colorMode === "dark"
                        ? "gray.200"
                        : "gray.700"
                    }
                    _hover={{
                      textDecoration: "none",
                      color:
                        colorMode === "dark"
                          ? "brand.gold"
                          : "brand.marianBlue",
                      bg: colorMode === "dark" ? "gray.800" : "gray.100",
                    }}
                    onClick={onClose}
                  >
                    {link.name}
                  </ChakraLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Container>
    </Box>
  );
}
