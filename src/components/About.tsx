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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaAward } from 'react-icons/fa';

const MotionBox = motion(Box);

const values = [
  {
    icon: FaRocket,
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
  },
  {
    icon: FaUsers,
    title: 'Client-Focused',
    description: 'Your success is our priority. We build lasting partnerships through exceptional service.',
  },
  {
    icon: FaLightbulb,
    title: 'Excellence',
    description: 'We deliver high-quality solutions that exceed expectations and drive results.',
  },
  {
    icon: FaAward,
    title: 'Expertise',
    description: 'Our team brings years of experience and proven track record in digital solutions.',
  },
];

export default function About() {
  const { colorMode } = useColorMode();

  return (
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
                fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
                bgGradient="linear(to-r, brand.marianBlue, brand.polynesianBlue, brand.gold)"
                bgClip="text"
              >
                About Cyberrk Technology
              </Heading>
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              >
                We are a leading technology company specializing in digital transformation
                and innovative solutions. With a passion for excellence and a commitment to
                client success, we help businesses thrive in the digital age.
              </Text>
              <Text
                fontSize={{ base: 'md', md: 'lg' }}
                color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
              >
                Our team of experienced professionals combines technical expertise with
                creative thinking to deliver solutions that not only meet but exceed your
                expectations. From SEO optimization to custom application development, we're
                your trusted partner in digital success.
              </Text>
            </VStack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={6}>
              {values.map((value, index) => (
                <MotionBox
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    p={6}
                    bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
                    borderRadius="xl"
                    h="full"
                    borderWidth="1px"
                    borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                    _hover={{
                      borderColor: 'brand.gold',
                      boxShadow: 'lg',
                    }}
                    transition="all 0.3s ease"
                  >
                    <VStack align="start" spacing={3}>
                      <Box
                        p={3}
                        bg={colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue'}
                        borderRadius="lg"
                        display="inline-block"
                      >
                        <Icon as={value.icon} w={6} h={6} color="white" />
                      </Box>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        color={colorMode === 'dark' ? 'white' : 'gray.800'}
                      >
                        {value.title}
                      </Heading>
                      <Text
                        fontSize="sm"
                        color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                      >
                        {value.description}
                      </Text>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
