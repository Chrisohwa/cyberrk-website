'use client';

import {
  Box,
  Container,
  Stack,
  Text,
  Link as ChakraLink,
  useColorMode,
  HStack,
  VStack,
  Divider,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'SEO Optimization', href: '/services' },
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'Training', href: '/services' },
  ],
  social: [
    { name: 'Facebook', icon: FaFacebook, href: '#' },
    { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
    { name: 'Instagram', icon: FaInstagram, href: '#' },
    { name: 'GitHub', icon: FaGithub, href: '#' },
  ],
};

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'dark' ? 'gray.900' : 'gray.800'}
      color={colorMode === 'dark' ? 'gray.200' : 'gray.200'}
      borderTop="1px"
      borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.700'}
    >
      <Container maxW="container.xl" py={12}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
          {/* Company Info */}
          <VStack align="start" spacing={4}>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              bgGradient="linear(to-l, brand.marianBlue, brand.polynesianBlue, brand.gold)"
              bgClip="text"
            >
              Cyberrk
            </Text>
            <Text fontSize="sm" color="gray.400">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </Text>
          </VStack>

          {/* Company Links */}
          <VStack align="start" spacing={3}>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Company
            </Text>
            {footerLinks.company.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <ChakraLink
                  fontSize="sm"
                  color="gray.400"
                  _hover={{
                    color: 'brand.gold',
                    textDecoration: 'none',
                  }}
                  transition="color 0.3s ease"
                >
                  {link.name}
                </ChakraLink>
              </Link>
            ))}
          </VStack>

          {/* Services Links */}
          <VStack align="start" spacing={3}>
            <Text fontSize="lg" fontWeight="semibold" mb={2}>
              Services
            </Text>
            {footerLinks.services.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <ChakraLink
                  fontSize="sm"
                  color="gray.400"
                  _hover={{
                    color: 'brand.gold',
                    textDecoration: 'none',
                  }}
                  transition="color 0.3s ease"
                >
                  {link.name}
                </ChakraLink>
              </Link>
            ))}
          </VStack>

          {/* Social Links */}
          <VStack align="start" spacing={4}>
            <Text fontSize="lg" fontWeight="semibold">
              Connect With Us
            </Text>
            <HStack spacing={4}>
              {footerLinks.social.map((social) => (
                <ChakraLink
                  key={social.name}
                  href={social.href}
                  isExternal
                  _hover={{
                    transform: 'translateY(-3px)',
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    p={2}
                    bg={colorMode === 'dark' ? 'gray.800' : 'gray.700'}
                    borderRadius="md"
                    _hover={{
                      bg: 'brand.polynesianBlue',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={social.icon} w={5} h={5} />
                  </Box>
                </ChakraLink>
              ))}
            </HStack>
          </VStack>
        </SimpleGrid>

        <Divider my={8} borderColor="gray.700" />

        <Stack
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          spacing={4}
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Cyberrk Technology. All rights reserved.
          </Text>
          <HStack spacing={6}>
            <ChakraLink
              href="#"
              fontSize="sm"
              color="gray.400"
              _hover={{
                color: 'brand.gold',
                textDecoration: 'none',
              }}
            >
              Privacy Policy
            </ChakraLink>
            <ChakraLink
              href="#"
              fontSize="sm"
              color="gray.400"
              _hover={{
                color: 'brand.gold',
                textDecoration: 'none',
              }}
            >
              Terms of Service
            </ChakraLink>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
}
