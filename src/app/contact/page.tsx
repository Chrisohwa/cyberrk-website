'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const MotionBox = motion(Box);

export default function ContactPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Navbar />
      <Box pt={20}>
        {/* Hero Section */}
        <Box
          minH="40vh"
          display="flex"
          alignItems="center"
          position="relative"
          overflow="hidden"
          bg={colorMode === 'dark' ? 'gray.900' : 'white'}
        >
          <MotionBox
            position="absolute"
            top="20%"
            right="10%"
            w="300px"
            h="300px"
            borderRadius="full"
            bg={colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue'}
            opacity={0.1}
            filter="blur(80px)"
            animate={{
              y: [0, -30, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />

          <Container maxW="container.xl" position="relative" zIndex={1}>
            <VStack spacing={6} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                  fontWeight="extrabold"
                  bgGradient="linear(to-r, brand.royalBlue, brand.marianBlue, brand.polynesianBlue, brand.mikadoYellow, brand.gold)"
                  bgClip="text"
                  mb={4}
                >
                  Let&apos;s Work Together
                </Heading>
              </MotionBox>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  maxW="3xl"
                >
                  Ready to transform your digital presence? Get in touch with us today and let&apos;s
                  discuss how we can help you achieve your goals.
                </Text>
              </MotionBox>
            </VStack>
          </Container>
        </Box>

        {/* Contact Component */}
        <Contact />
      </Box>
      <Footer />
    </>
  );
}
