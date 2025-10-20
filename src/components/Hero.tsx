'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  VStack,
  useColorMode,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function Hero() {
  const { colorMode } = useColorMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pt={{ base: 20, md: 0 }}
    >
      {/* Hero Background Image with Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: colorMode === 'dark' 
            ? 'linear-gradient(135deg, rgba(0, 41, 107, 0.60) 0%, rgba(0, 63, 136, 0.60) 50%, rgba(0, 80, 157, 0.60) 100%)'
            : 'linear-gradient(135deg, rgba(0, 41, 107, 0.60) 0%, rgba(0, 63, 136, 0.60) 50%, rgba(0, 80, 157, 0.60) 100%)',
        }}
      />

      {/* Animated Gradient Overlay */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={
          colorMode === 'dark'
            ? 'radial-gradient(circle at 20% 50%, rgba(253, 197, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 213, 0, 0.15) 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 50%, rgba(253, 197, 0, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 213, 0, 0.12) 0%, transparent 50%)'
        }
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        zIndex={1}
      />

      {/* Animated Floating Elements */}
      <MotionBox
        position="absolute"
        top="15%"
        right="10%"
        w="250px"
        h="250px"
        borderRadius="full"
        bg="brand.gold"
        opacity={0.08}
        filter="blur(60px)"
        animate={floatingAnimation}
        zIndex={1}
      />
      <MotionBox
        position="absolute"
        bottom="15%"
        left="8%"
        w="300px"
        h="300px"
        borderRadius="full"
        bg="brand.mikadoYellow"
        opacity={0.08}
        filter="blur(70px)"
        animate={{
          y: [0, 30, 0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        zIndex={1}
      />

      <Container maxW="container.xl" position="relative" zIndex={2}>
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            {/* Text Content */}
            <VStack spacing={8} align={{ base: 'center', lg: 'start' }} textAlign={{ base: 'center', lg: 'left' }}>
              <MotionHeading
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl', xl: '7xl' }}
                fontWeight="extrabold"
                lineHeight="shorter"
                variants={itemVariants}
                color="white"
                textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
              >
                Transform Your{' '}
                <Box
                  as="span"
                  bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                  bgClip="text"
                  animation="gradient 8s ease infinite"
                  sx={{
                    '@keyframes gradient': {
                      '0%, 100%': {
                        backgroundPosition: '0% 50%',
                      },
                      '50%': {
                        backgroundPosition: '100% 50%',
                      },
                    },
                    backgroundSize: '200% 200%',
                  }}
                >
                  Digital Presence
                </Box>
                <br />
                with Cyberrk
              </MotionHeading>

              <MotionText
                fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
                color="whiteAlpha.900"
                maxW="2xl"
                variants={itemVariants}
                textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
              >
                Empowering businesses with cutting-edge web solutions, mobile applications,
                SEO optimization, and professional training services.
              </MotionText>

              <MotionBox variants={itemVariants}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={4}
                  justify={{ base: 'center', lg: 'start' }}
                >
                  <Link href="/services">
                    <Button
                      size="lg"
                      rightIcon={<ArrowForwardIcon />}
                      bg="brand.gold"
                      color="gray.900"
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{
                        bg: 'brand.mikadoYellow',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 40px rgba(253, 197, 0, 0.4)',
                      }}
                      _active={{
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.3s ease"
                    >
                      Explore Services
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      px={8}
                      py={6}
                      fontSize="lg"
                      fontWeight="bold"
                      _hover={{
                        bg: 'whiteAlpha.200',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 40px rgba(255, 255, 255, 0.2)',
                      }}
                      _active={{
                        transform: 'translateY(-2px)',
                      }}
                      transition="all 0.3s ease"
                    >
                      Get in Touch
                    </Button>
                  </Link>
                </Stack>
              </MotionBox>
            </VStack>

            {/* Animated Stats Cards */}
            <MotionBox
              variants={itemVariants}
              display={{ base: 'none', lg: 'block' }}
            >
              <VStack spacing={6} align="stretch">
                {[
                  { number: '20+', label: 'Projects Completed', delay: 0 },
                  { number: '18+', label: 'Happy Clients', delay: 0.1 },
                  { number: '2+', label: 'Years Experience', delay: 0.2 },
                ].map((stat, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 + stat.delay }}
                    whileHover={{
                      scale: 1.05,
                      x: -10,
                    }}
                  >
                    <Box
                      p={6}
                      borderRadius="xl"
                      bg="whiteAlpha.200"
                      backdropFilter="blur(20px)"
                      borderWidth="1px"
                      borderColor="whiteAlpha.300"
                      boxShadow="0 8px 32px rgba(0, 0, 0, 0.2)"
                      transition="all 0.3s ease"
                      _hover={{
                        bg: 'whiteAlpha.300',
                        boxShadow: '0 12px 40px rgba(253, 197, 0, 0.3)',
                      }}
                    >
                      <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                        bgClip="text"
                        mb={2}
                      >
                        {stat.number}
                      </Text>
                      <Text
                        fontSize="md"
                        color="whiteAlpha.900"
                        fontWeight="medium"
                      >
                        {stat.label}
                      </Text>
                    </Box>
                  </MotionBox>
                ))}
              </VStack>
            </MotionBox>
          </SimpleGrid>

          {/* Mobile Stats */}
          <MotionBox
            variants={itemVariants}
            mt={12}
            display={{ base: 'block', lg: 'none' }}
          >
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              justify="center"
            >
              {[
                { number: '100+', label: 'Projects' },
                { number: '50+', label: 'Clients' },
                { number: '5+', label: 'Years' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  p={6}
                  borderRadius="lg"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(20px)"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                  flex={1}
                  minW="120px"
                >
                  <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                    bgClip="text"
                  >
                    {stat.number}
                  </Text>
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.900"
                    fontWeight="medium"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </Stack>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}
