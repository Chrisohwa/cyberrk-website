'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorMode,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaSearch, FaCode, FaMobileAlt, FaChalkboardTeacher } from 'react-icons/fa';

const MotionBox = motion(Box);

const services = [
  {
    icon: FaSearch,
    title: 'SEO Optimization',
    description:
      'Boost your online visibility with our comprehensive SEO strategies. We optimize your website to rank higher in search engines and drive organic traffic.',
    color: 'brand.marianBlue',
  },
  {
    icon: FaCode,
    title: 'Website Design & Development',
    description:
      'Create stunning, responsive websites that captivate your audience. Our expert team delivers custom web solutions tailored to your business needs.',
    color: 'brand.polynesianBlue',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile & Web Applications',
    description:
      'Build powerful mobile and web applications that scale with your business. We develop cross-platform solutions using cutting-edge technologies.',
    color: 'brand.mikadoYellow',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Development Training',
    description:
      'Empower your team with professional training in web and mobile development. Our comprehensive courses cover the latest technologies and best practices.',
    color: 'brand.gold',
  },
];

export default function Services() {
  const { colorMode } = useColorMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
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
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              mb={4}
              bgGradient="linear(to-r, brand.marianBlue, brand.polynesianBlue, brand.gold)"
              bgClip="text"
            >
              Our Services
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              maxW="2xl"
              mx="auto"
            >
              Comprehensive digital solutions to elevate your business to new heights
            </Text>
          </MotionBox>

          <MotionBox
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            w="full"
          >
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {services.map((service, index) => (
                <MotionBox
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Box
                    p={8}
                    bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                    borderRadius="xl"
                    boxShadow="lg"
                    h="full"
                    position="relative"
                    overflow="hidden"
                    _hover={{
                      boxShadow: '2xl',
                    }}
                    transition="all 0.3s ease"
                  >
                    {/* Gradient overlay on hover */}
                    <Box
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      bgGradient={`linear(to-br, ${service.color}, transparent)`}
                      opacity={0}
                      _groupHover={{ opacity: 0.1 }}
                      transition="opacity 0.3s ease"
                    />

                    <VStack spacing={4} align="start" position="relative" zIndex={1}>
                      <Box
                        p={4}
                        bg={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.50'}
                        borderRadius="lg"
                        display="inline-block"
                      >
                        <Icon
                          as={service.icon}
                          w={8}
                          h={8}
                          color={service.color}
                        />
                      </Box>
                      <Heading
                        as="h3"
                        fontSize="xl"
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      >
                        {service.title}
                      </Heading>
                      <Text
                        color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
                        fontSize="md"
                      >
                        {service.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
}
