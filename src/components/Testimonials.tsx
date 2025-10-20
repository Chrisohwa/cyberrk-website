'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  useColorMode,
  Icon,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);

const testimonials = [
  {
    name: 'John Anderson',
    company: 'TechStart Inc.',
    role: 'CEO',
    // image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    testimony:
      'Cyberrk Technology transformed our digital presence completely. Their expertise in web development and SEO helped us increase our online traffic by 300%. Highly recommended!',
  },
  {
    name: 'Sarah Mitchell',
    company: 'Digital Solutions Ltd',
    role: 'Marketing Director',
    // image: 'https://i.pravatar.cc/150?img=45',
    rating: 5,
    testimony:
      'Working with Cyberrk was an absolute pleasure. They delivered our mobile app ahead of schedule and exceeded all our expectations. Their attention to detail is remarkable.',
  },
  {
    name: 'Anselm Fowel',
    company: 'Transalliance Group',
    role: 'CTO',
    // image: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    testimony:
      'The training program provided by Cyberrk Technology upskilled our entire development team. Their instructors are knowledgeable and the curriculum is cutting-edge.',
  },
  {
    name: 'Ebere Nwachukwu',
    company: 'GrowthHub',
    role: 'Founder',
    // image: 'https://i.pravatar.cc/150?img=47',
    rating: 5,
    testimony:
      'Our website redesign by Cyberrk resulted in a 250% increase in conversions. Their strategic approach to UX design and development is world-class.',
  },
  {
    name: 'David Thompson',
    company: 'Enterprise Solutions',
    role: 'VP of Technology',
    // image: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    testimony:
      'Cyberrk Technology delivered a complex enterprise application that streamlined our operations. Their technical expertise and project management skills are outstanding.',
  },
  {
    name: 'Lisa Wang',
    company: 'StartupVentures',
    role: 'Product Manager',
    // image: 'https://i.pravatar.cc/150?img=48',
    rating: 5,
    testimony:
      'The SEO optimization services from Cyberrk helped us rank #1 for our target keywords. Our organic traffic has tripled in just 6 months!',
  },
];

export default function Testimonials() {
  const { colorMode } = useColorMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % testimonials.length;
      } else {
        return prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      }
    });
  };

  return (
    <Box py={20} bg={colorMode === 'dark' ? 'gray.900' : 'white'} position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12}>
          {/* Section Header */}
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
              What Our Partners Say
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              maxW="2xl"
              mx="auto"
            >
              Trusted by leading companies worldwide
            </Text>
          </MotionBox>

          {/* Testimonial Carousel */}
          <Box
            position="relative"
            w="full"
            h={{ base: '500px', md: '400px' }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AnimatePresence initial={false} custom={direction}>
              <MotionBox
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                position="absolute"
                w="full"
                maxW="4xl"
              >
                <Box
                  p={{ base: 8, md: 12 }}
                  bg={colorMode === 'dark' ? 'gray.800' : 'gray.50'}
                  borderRadius="2xl"
                  boxShadow="2xl"
                  borderWidth="1px"
                  borderColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                  position="relative"
                >
                  <VStack spacing={6} align="start">
                    {/* Rating */}
                    <HStack spacing={1}>
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Icon
                          key={i}
                          as={FaStar}
                          color="brand.gold"
                          w={5}
                          h={5}
                        />
                      ))}
                    </HStack>

                    {/* Testimony */}
                    <Text
                      fontSize={{ base: 'lg', md: 'xl' }}
                      color={colorMode === 'dark' ? 'gray.200' : 'gray.700'}
                      fontStyle="italic"
                      lineHeight="tall"
                    >
                      {testimonials[currentIndex].testimony}
                    </Text>

                    {/* Author Info */}
                    <HStack spacing={4} pt={4}>
                      <Avatar
                        size="lg"
                        name={testimonials[currentIndex].name}
                        // src={testimonials[currentIndex]?.image || ""}
                        border="3px solid"
                        borderColor={colorMode === 'dark' ? 'brand.gold' : 'brand.marianBlue'}
                      />
                      <VStack align="start" spacing={0}>
                        <Text
                          fontWeight="bold"
                          fontSize="lg"
                          color={colorMode === 'dark' ? 'white' : 'gray.800'}
                        >
                          {testimonials[currentIndex].name}
                        </Text>
                        <Text
                          fontSize="sm"
                          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                        >
                          {testimonials[currentIndex].role}
                        </Text>
                        <Text
                          fontSize="sm"
                          color="brand.gold"
                          fontWeight="medium"
                        >
                          {testimonials[currentIndex].company}
                        </Text>
                      </VStack>
                    </HStack>
                  </VStack>
                </Box>
              </MotionBox>
            </AnimatePresence>
          </Box>

          {/* Pagination Dots */}
          <HStack spacing={2} justify="center">
            {testimonials.map((_, index) => (
              <Box
                key={index}
                w={currentIndex === index ? '32px' : '8px'}
                h="8px"
                borderRadius="full"
                bg={
                  currentIndex === index
                    ? colorMode === 'dark'
                      ? 'brand.gold'
                      : 'brand.marianBlue'
                    : colorMode === 'dark'
                    ? 'gray.600'
                    : 'gray.300'
                }
                cursor="pointer"
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                transition="all 0.3s ease"
                _hover={{
                  bg: colorMode === 'dark' ? 'brand.gold' : 'brand.marianBlue',
                }}
              />
            ))}
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
}
