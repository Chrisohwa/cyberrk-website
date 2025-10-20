'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  useColorMode,
  Avatar,
  Stack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaAward,
  FaChartLine,
  FaHandshake,
} from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MotionBox = motion(Box);

const values = [
  {
    icon: FaRocket,
    title: 'Innovation',
    description:
      'We stay ahead of the curve with cutting-edge technologies and creative solutions that drive your business forward.',
  },
  {
    icon: FaUsers,
    title: 'Client-Focused',
    description:
      'Your success is our priority. We build lasting partnerships through exceptional service and dedication.',
  },
  {
    icon: FaLightbulb,
    title: 'Excellence',
    description:
      'We deliver high-quality solutions that exceed expectations and drive measurable results for your business.',
  },
  {
    icon: FaAward,
    title: 'Expertise',
    description:
      'Our team brings years of experience and proven track record in delivering successful digital solutions.',
  },
  {
    icon: FaChartLine,
    title: 'Growth-Oriented',
    description:
      'We focus on strategies that scale with your business and deliver long-term sustainable growth.',
  },
  {
    icon: FaHandshake,
    title: 'Transparency',
    description:
      'We believe in open communication and keeping you informed every step of the way.',
  },
];

const stats = [
  { number: '20+', label: 'Projects Completed' },
  { number: '18+', label: 'Happy Clients' },
  { number: '2+', label: 'Years Experience' },
  { number: '6+', label: 'Team Members' },
];

export default function AboutPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Navbar />
      <Box pt={20}>
        {/* Hero Section with Background Image */}
        <Box
          minH="100vh"
          display="flex"
          alignItems="center"
          position="relative"
          overflow="hidden"
        >
          {/* Hero Background Image with Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bgImage="url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')"
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
                ? 'linear-gradient(135deg, rgba(0, 41, 107, 0.50) 0%, rgba(0, 63, 136, 0.5) 50%, rgba(0, 80, 157, 0.5) 100%)'
                : 'linear-gradient(135deg, rgba(0, 41, 107, 0.92) 0%, rgba(0, 63, 136, 0.88) 50%, rgba(0, 80, 157, 0.82) 100%)',
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
                ? 'radial-gradient(circle at 30% 50%, rgba(253, 197, 0, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 213, 0, 0.15) 0%, transparent 50%)'
                : 'radial-gradient(circle at 30% 50%, rgba(253, 197, 0, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(255, 213, 0, 0.12) 0%, transparent 50%)'
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
            top="20%"
            right="10%"
            w="250px"
            h="250px"
            borderRadius="full"
            bg="brand.gold"
            opacity={0.08}
            filter="blur(60px)"
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            zIndex={1}
          />
          <MotionBox
            position="absolute"
            bottom="20%"
            left="10%"
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
            <VStack spacing={8} textAlign="center">
              {/* Main Heading with Staggered Animation */}
              <MotionBox
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1,
                  ease: [0.6, -0.05, 0.01, 0.99]
                }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: '5xl', md: '6xl', lg: '7xl', xl: '8xl' }}
                  fontWeight="black"
                  lineHeight="shorter"
                  letterSpacing="tight"
                  mb={4}
                >
                  <MotionBox
                    as="span"
                    display="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Text
                      as="span"
                      color="white"
                      textShadow="0 0 40px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.4)"
                      fontWeight="black"
                    >
                      About
                    </Text>
                  </MotionBox>
                  <MotionBox
                    as="span"
                    display="block"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <Box
                      as="span"
                      bgGradient="linear(to-r, brand.mikadoYellow, brand.gold, brand.mikadoYellow)"
                      bgClip="text"
                      textShadow="0 0 60px rgba(253, 197, 0, 0.6), 0 0 30px rgba(255, 213, 0, 0.4)"
                      fontWeight="black"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgGradient: 'linear(to-r, brand.mikadoYellow, brand.gold)',
                        opacity: 0.3,
                        filter: 'blur(20px)',
                        zIndex: -1,
                      }}
                      animation="shimmer 3s ease-in-out infinite"
                      sx={{
                        '@keyframes shimmer': {
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
                      Cyberrk Technology
                    </Box>
                  </MotionBox>
                </Heading>
              </MotionBox>

              {/* Subtitle with Fade-in Animation */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                maxW="4xl"
              >
                <Text
                  fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                  color="white"
                  fontWeight="medium"
                  lineHeight="tall"
                  textShadow="0 0 30px rgba(0, 0, 0, 0.7), 0 4px 15px rgba(0, 0, 0, 0.5)"
                  px={4}
                  sx={{
                    textRendering: 'optimizeLegibility',
                    WebkitFontSmoothing: 'antialiased',
                  }}
                >
                  Transforming businesses through{' '}
                  <Box
                    as="span"
                    color="brand.gold"
                    fontWeight="bold"
                    textShadow="0 0 20px rgba(253, 197, 0, 0.5)"
                  >
                    innovative technology
                  </Box>{' '}
                  solutions and exceptional digital experiences.
                </Text>
              </MotionBox>

              {/* Decorative Line */}
              <MotionBox
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '200px', opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <Box
                  h="3px"
                  bgGradient="linear(to-r, transparent, brand.gold, transparent)"
                  borderRadius="full"
                  boxShadow="0 0 20px rgba(253, 197, 0, 0.5)"
                />
              </MotionBox>

              {/* Call to Action Text */}
              <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Text
                  fontSize={{ base: 'md', md: 'lg' }}
                  color="whiteAlpha.800"
                  fontWeight="medium"
                  textShadow="0 2px 10px rgba(0, 0, 0, 0.5)"
                  letterSpacing="wide"
                  textTransform="uppercase"
                >
                  Discover Our Story
                </Text>
              </MotionBox>
            </VStack>
          </Container>
        </Box>

        {/* Stats Section */}
        <Box py={16} bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {stats.map((stat, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <VStack
                    p={6}
                    bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                    borderRadius="xl"
                    boxShadow="lg"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: '2xl',
                    }}
                    transition="all 0.3s ease"
                  >
                    <Text
                      fontSize={{ base: '3xl', md: '4xl' }}
                      fontWeight="bold"
                      bgGradient="linear(to-r, brand.marianBlue, brand.gold)"
                      bgClip="text"
                    >
                      {stat.number}
                    </Text>
                    <Text
                      fontSize="sm"
                      color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                      textAlign="center"
                    >
                      {stat.label}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>

        {/* Story Section */}
        <Box py={20} bg={colorMode === 'dark' ? 'gray.900' : 'white'}>
          <Container maxW="container.xl">
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
              <MotionBox
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <VStack align="start" spacing={6}>
                  <Heading
                    as="h2"
                    fontSize={{ base: '3xl', md: '4xl' }}
                    color={colorMode === 'dark' ? 'white' : 'gray.800'}
                  >
                    Our Story
                  </Heading>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    Founded with a vision to bridge the gap between businesses and technology,
                    Cyberrk Technology has grown into a trusted partner for companies seeking
                    digital transformation.
                  </Text>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    Our journey began with a simple belief: that every business deserves access to
                    world-class digital solutions. Today, we&apos;re proud to have helped numerous
                    clients achieve their goals through innovative technology and strategic
                    thinking.
                  </Text>
                  <Text
                    fontSize={{ base: 'md', md: 'lg' }}
                    color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  >
                    We combine technical expertise with creative problem-solving to deliver
                    solutions that not only meet but exceed expectations. Our commitment to
                    excellence and client satisfaction drives everything we do.
                  </Text>
                </VStack>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  p={8}
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
                  borderRadius="2xl"
                  boxShadow="xl"
                >
                  <VStack spacing={6}>
                    <Heading
                      as="h3"
                      fontSize="2xl"
                      color={colorMode === 'dark' ? 'white' : 'gray.800'}
                    >
                      Our Mission
                    </Heading>
                    <Text
                      fontSize="lg"
                      color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                      textAlign="center"
                    >
                      To empower businesses with innovative digital solutions that drive growth,
                      enhance efficiency, and create lasting value in an ever-evolving digital
                      landscape.
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            </SimpleGrid>
          </Container>
        </Box>

        {/* Values Section */}
        <Box py={20} bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}>
          <Container maxW="container.xl">
            <VStack spacing={12}>
              <MotionBox
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                textAlign="center"
              >
                <Heading
                  as="h2"
                  fontSize={{ base: '3xl', md: '4xl' }}
                  mb={4}
                  bgGradient="linear(to-r, brand.marianBlue, brand.polynesianBlue, brand.gold)"
                  bgClip="text"
                >
                  Our Core Values
                </Heading>
                <Text
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                  maxW="2xl"
                  mx="auto"
                >
                  The principles that guide our work and define who we are
                </Text>
              </MotionBox>

              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
                {values.map((value, index) => (
                  <MotionBox
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                  >
                    <Box
                      p={8}
                      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                      borderRadius="xl"
                      boxShadow="lg"
                      h="full"
                      borderWidth="1px"
                      borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                      _hover={{
                        borderColor: 'brand.gold',
                        boxShadow: '2xl',
                      }}
                      transition="all 0.3s ease"
                    >
                      <VStack align="start" spacing={4}>
                        <Box
                          p={4}
                          bg={colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue'}
                          borderRadius="lg"
                          display="inline-block"
                        >
                          <Icon as={value.icon} w={8} h={8} color="white" />
                        </Box>
                        <Heading
                          as="h3"
                          fontSize="xl"
                          color={colorMode === 'dark' ? 'white' : 'gray.800'}
                        >
                          {value.title}
                        </Heading>
                        <Text
                          fontSize="md"
                          color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                        >
                          {value.description}
                        </Text>
                      </VStack>
                    </Box>
                  </MotionBox>
                ))}
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
