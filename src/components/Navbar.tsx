"use client";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorMode,
  Container,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useMemo } from "react";
import MenuDrawer from "./MenuDrawer";

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

  // Optimized scroll handler with throttling
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        const isScrolled = window.scrollY > 20;
        setScrolled(isScrolled);
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const isActive = useCallback((href: string) => pathname === href, [pathname]);

  // Memoized styles to prevent recalculation
  const navBgColor = useMemo(() => {
    if (scrolled) {
      return colorMode === "dark"
        ? "rgba(23, 25, 35, 0.8)"
        : "rgba(255, 255, 255, 0.8)";
    }
    return "transparent";
  }, [scrolled, colorMode]);

  const borderColor = useMemo(() => {
    if (scrolled) {
      return colorMode === "dark" ? "gray.700" : "gray.200";
    }
    return "transparent";
  }, [scrolled, colorMode]);

  const buttonBg = useMemo(
    () => (colorMode === "dark" ? "brand.polynesianBlue" : "brand.marianBlue"),
    [colorMode]
  );

  const buttonHoverBg = useMemo(
    () => (colorMode === "dark" ? "brand.marianBlue" : "brand.polynesianBlue"),
    [colorMode]
  );

  return (
    <>
      <MenuDrawer isOpen={isOpen} onClose={onClose} navLinks={navLinks} />
      <Box
        as="nav"
        position="fixed"
        top={0}
        left={0}
        right={0}
        bg={navBgColor}
        backdropFilter={scrolled ? "blur(12px)" : "none"}
        boxShadow={scrolled ? "sm" : "none"}
        zIndex={1000}
        borderBottom="1px"
        borderColor={borderColor}
        transition="all 0.3s ease"
        willChange={scrolled ? "auto" : "background-color, box-shadow"}
      >
        <Container
          maxW={{
            sm: "container.sm",
            md: "container.md",
            lg: "container.lg",
            xl: "container.xl",
            "2xl": "container.2xl",
          }}
          w="full"
          px={{ sm: 4, md: 8 }}
        >
          <Flex
            h={16}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* Logo */}
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/" passHref legacyBehavior>
                <ChakraLink>
                  <Text
                    fontSize={{ base: "xl", sm: "2xl" }}
                    fontWeight="bold"
                    bgGradient="linear(to-l, brand.marianBlue, brand.polynesianBlue, brand.gold)"
                    bgClip="text"
                    cursor="pointer"
                    _hover={{ transform: "scale(1.05)" }}
                    transition="transform 0.3s ease"
                  >
                    Cyberrk
                  </Text>
                </ChakraLink>
              </Link>
            </MotionBox>

            {/* Desktop & Mobile Actions */}
            <HStack spacing={{ base: 2, sm: 4, md: 8 }} alignItems="center">
              {/* Desktop Navigation */}
              <HStack
                as="nav"
                spacing={{ md: 4, lg: 6 }}
                display={{ base: "none", md: "flex" }}
              >
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);
                  return (
                    <MotionBox
                      key={link.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={link.href} passHref legacyBehavior>
                        <ChakraLink
                          px={2}
                          py={1}
                          rounded="md"
                          fontWeight="medium"
                          fontSize={{ md: "sm", lg: "md" }}
                          color={
                            active
                              ? "brand.gold"
                              : colorMode === "dark"
                              ? "gray.200"
                              : scrolled
                              ? "gray.700"
                              : "white"
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
                  );
                })}
              </HStack>

              {/* Theme Toggle */}
              <MotionBox
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <IconButton
                  size={{ sm: "md" }}
                  icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                  aria-label="Toggle theme"
                  onClick={toggleColorMode}
                  bg={buttonBg}
                  color="white"
                  _hover={{
                    bg: buttonHoverBg,
                    transform: "rotate(180deg)",
                  }}
                  transition="all 0.5s ease"
                />
              </MotionBox>

              {/* Mobile Menu Toggle */}
              <IconButton
                size={{ base: "sm", sm: "md" }}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
                display={{ base: "flex", md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                bg={buttonBg}
                color="white"
                _hover={{
                  bg: buttonHoverBg,
                }}
                transition="all 0.3s ease"
              />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
