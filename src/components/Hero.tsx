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
import { useMemo } from 'react';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

// Memoized animation variants
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

const floatingAnimation2 = {
  y: [0, 30, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Stats data
const desktopStats = [
  { number: '20+', label: 'Projects Completed', delay: 0 },
  { number: '18+', label: 'Happy Clients', delay: 0.1 },
  { number: '2+', label: 'Years Experience', delay: 0.2 },
];

const mobileStats = [
  { number: '20+', label: 'Projects' },
  { number: '18+', label: 'Clients' },
  { number: '2+', label: 'Years' },
];

export default function Hero() {
  const { colorMode } = useColorMode();

  // Memoize gradient overlays to prevent recalculation
  const backgroundGradient = useMemo(
    () =>
      colorMode === 'dark'
        ? 'linear-gradient(135deg, rgba(0, 41, 107, 0.60) 0%, rgba(0, 63, 136, 0.60) 50%, rgba(0, 80, 157, 0.60) 100%)'
        : 'linear-gradient(135deg, rgba(0, 41, 107, 0.60) 0%, rgba(0, 63, 136, 0.60) 50%, rgba(0, 80, 157, 0.60) 100%)',
    [colorMode]
  );

  const radialGradient = useMemo(
    () =>
      colorMode === 'dark'
        ? 'radial-gradient(circle at 20% 50%, rgba(253, 197, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 213, 0, 0.15) 0%, transparent 50%)'
        : 'radial-gradient(circle at 20% 50%, rgba(253, 197, 0, 0.12) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 213, 0, 0.12) 0%, transparent 50%)',
    [colorMode]
  );

  return (
    <Box
      minH={{ sm: 'calc(90vh - 64px)', md: '100vh' }}
      display="flex"
      alignItems="center"
      position="relative"
      overflow="hidden"
      pt={{ base: '80px', sm: '88px', md: '96px', lg: 0 }}
      pb={{ base: 8, md: 0 }}
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
        bgPosition={{ base: 'center', md: 'center' }}
        bgRepeat="no-repeat"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: backgroundGradient,
        }}
      />

      {/* Animated Gradient Overlay */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={radialGradient}
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
        top={{ base: '10%', md: '15%' }}
        right={{ base: '5%', md: '10%' }}
        w={{ base: '150px', md: '200px', lg: '250px' }}
        h={{ base: '150px', md: '200px', lg: '250px' }}
        borderRadius="full"
        bg="brand.gold"
        opacity={0.08}
        filter={{ base: 'blur(40px)', md: 'blur(60px)' }}
        animate={floatingAnimation}
        zIndex={1}
        display={{ base: 'none', sm: 'block' }}
      />
      <MotionBox
        position="absolute"
        bottom={{ base: '10%', md: '15%' }}
        left={{ base: '3%', md: '8%' }}
        w={{ base: '180px', md: '250px', lg: '300px' }}
        h={{ base: '180px', md: '250px', lg: '300px' }}
        borderRadius="full"
        bg="brand.mikadoYellow"
        opacity={0.08}
        filter={{ base: 'blur(50px)', md: 'blur(70px)' }}
        animate={floatingAnimation2}
        zIndex={1}
        display={{ base: 'none', sm: 'block' }}
      />

      <Container
        maxW={{
          base: '100%',
          sm: 'container.sm',
          md: 'container.md',
          lg: 'container.lg',
          xl: 'container.xl',
          '2xl': 'container.2xl',
        }}
        position="relative"
        zIndex={2}
        px={{ base: 4, sm: 6, md: 8 }}
      >
        <MotionBox
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10, lg: 12 }}
            alignItems="center"
          >
            {/* Text Content */}
            <VStack
              spacing={{ base: 6, md: 8 }}
              align={{ base: 'center', lg: 'start' }}
              textAlign={{ base: 'center', lg: 'left' }}
            >
              <MotionHeading
                as="h1"
                fontSize={{
                  base: '3xl',
                  sm: '4xl',
                  md: '5xl',
                  lg: '5xl',
                  xl: '6xl',
                  '2xl': '7xl',
                }}
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
                  display={{ base: 'inline', sm: 'inline' }}
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
                fontSize={{ base: 'md', sm: 'lg', md: 'xl', lg: 'xl', xl: '2xl' }}
                color="whiteAlpha.900"
                maxW={{ base: 'full', lg: '2xl' }}
                variants={itemVariants}
                textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
                px={{ base: 2, sm: 0 }}
              >
                Empowering businesses with cutting-edge web solutions, mobile
                applications, SEO optimization, and professional training services.
              </MotionText>

              <MotionBox variants={itemVariants} w={{ base: 'full', sm: 'auto' }}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  spacing={{ base: 3, sm: 4 }}
                  justify={{ base: 'center', lg: 'start' }}
                  w={{ base: 'full', sm: 'auto' }}
                >
                  <Link href="/services" passHref legacyBehavior>
                    <Button
                      as="a"
                      size={{ base: 'md', md: 'lg' }}
                      rightIcon={<ArrowForwardIcon />}
                      bg="brand.gold"
                      color="gray.900"
                      px={{ sm: 6, md: 8 }}
                      py={{ base: 5, md: 6 }}
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="bold"
                      w={{ base: 'full', sm: 'full' }}
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
                  <Link href="/contact" passHref legacyBehavior>
                    <Button
                      as="a"
                      size={{ base: 'md', md: 'lg' }}
                      variant="outline"
                      borderColor="white"
                      borderWidth="2px"
                      color="white"
                      px={{ base: 6, md: 8 }}
                      py={{ base: 5, md: 6 }}
                      fontSize={{ base: 'md', md: 'lg' }}
                      fontWeight="bold"
                      w={{ base: 'full', sm: 'full' }}
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

            {/* Desktop Animated Stats Cards */}
            <MotionBox
              variants={itemVariants}
              display={{ base: 'none', lg: 'block' }}
            >
              <VStack spacing={6} align="stretch">
                {desktopStats.map((stat, index) => (
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
                      p={{ lg: 5, xl: 6 }}
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
                        fontSize={{ lg: '3xl', xl: '4xl' }}
                        fontWeight="bold"
                        bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                        bgClip="text"
                        mb={2}
                      >
                        {stat.number}
                      </Text>
                      <Text
                        fontSize={{ lg: 'sm', xl: 'md' }}
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
            mt={{ base: 8, sm: 10, md: 12 }}
            display={{ base: 'block', lg: 'none' }}
          >
            <SimpleGrid
              columns={{ base: 3 }}
              spacing={{ base: 3, sm: 4 }}
              w="full"
            >
              {mobileStats.map((stat, index) => (
                <Box
                  key={index}
                  textAlign="center"
                  p={{ base: 4, sm: 5, md: 6 }}
                  borderRadius="lg"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(20px)"
                  borderWidth="1px"
                  borderColor="whiteAlpha.300"
                >
                  <Text
                    fontSize={{ base: '2xl', sm: '3xl' }}
                    fontWeight="bold"
                    bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                    bgClip="text"
                    mb={1}
                  >
                    {stat.number}
                  </Text>
                  <Text
                    fontSize={{ base: 'xs', sm: 'sm' }}
                    color="whiteAlpha.900"
                    fontWeight="medium"
                  >
                    {stat.label}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </MotionBox>
        </MotionBox>
      </Container>
    </Box>
  );
}