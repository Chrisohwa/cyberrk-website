"use client";

import React, { memo } from "react";
import { MdClose } from "react-icons/md";
import Drawer from "react-modern-drawer";
//@ts-ignore
import "react-modern-drawer/dist/index.css";
import {
  Box,
  Flex,
  Stack,
  Link as ChakraLink,
  useColorMode,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const MenuDrawer: React.FC<MenuDrawerProps> = memo(
  ({ isOpen, onClose, navLinks }) => {
    const { colorMode } = useColorMode();
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    const drawerBg = colorMode === "dark" ? "#1a202c" : "#ffffff";
    const iconColor = colorMode === "dark" ? "#ffffff" : "#000000";

    return (
      <Drawer
        open={isOpen}
        onClose={onClose}
        direction="top"
        duration={300}
        overlayOpacity={0.4}
        style={{
          height: "auto",
          minHeight: "100vh",
          maxHeight: "100vh",
          background: drawerBg,
          zIndex: 9999,
          overflow: "auto",
        }}
        className="mobile-drawer"
      >
        <Box
          h="100vh"
          display="flex"
          flexDirection="column"
          pt={{ base: 4, sm: 6 }}
          px={{ base: 4, sm: 6 }}
        >
          {/* Close Button */}
          <Flex justifyContent="flex-end" mb={4}>
            <Box
              as="button"
              onClick={onClose}
              p={2}
              rounded="md"
              _hover={{
                bg: colorMode === "dark" ? "gray.700" : "gray.100",
              }}
              transition="background 0.2s ease"
              aria-label="Close menu"
            >
              <MdClose
                size="24px"
                style={{ cursor: "pointer", color: iconColor }}
              />
            </Box>
          </Flex>

          <Divider mb={6} />

          {/* Navigation Links */}
          <VStack
            as="nav"
            spacing={2}
            align="stretch"
            flex={1}
            justify="flex-start"
          >
            {navLinks?.map((link) => {
              const active = isActive(link.href);
              return (
                <Link key={link.name} href={link.href} passHref legacyBehavior>
                  <ChakraLink
                    px={4}
                    py={3}
                    rounded="md"
                    fontWeight="medium"
                    fontSize={{ base: "lg", sm: "xl" }}
                    color={
                      active
                        ? colorMode === "dark"
                          ? "brand.gold"
                          : "brand.marianBlue"
                        : colorMode === "dark"
                        ? "gray.200"
                        : "gray.700"
                    }
                    bg={
                      active
                        ? colorMode === "dark"
                          ? "rgba(255, 215, 0, 0.1)"
                          : "rgba(0, 105, 148, 0.1)"
                        : "transparent"
                    }
                    _hover={{
                      textDecoration: "none",
                      color:
                        colorMode === "dark"
                          ? "brand.gold"
                          : "brand.marianBlue",
                      bg: colorMode === "dark" ? "gray.700" : "gray.100",
                      transform: "translateX(4px)",
                    }}
                    _active={{
                      transform: "scale(0.98)",
                    }}
                    onClick={onClose}
                    transition="all 0.2s ease"
                    display="block"
                    w="100%"
                  >
                    {link.name}
                  </ChakraLink>
                </Link>
              );
            })}
          </VStack>
        </Box>
      </Drawer>
    );
  }
);

MenuDrawer.displayName = "MenuDrawer";

export default MenuDrawer;
