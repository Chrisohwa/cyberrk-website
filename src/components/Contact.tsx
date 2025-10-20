'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  useColorMode,
  useToast,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useState } from 'react';

const MotionBox = motion(Box);

const contactInfo = [
  {
    icon: FaEnvelope,
    title: 'Email',
    value: 'info@cyberrktechnology.ng',
    link: 'mailto:info@cyberrk.ng',
  },
  {
    icon: FaPhone,
    title: 'Phone',
    value: '+234 (916) 171-2400',
    link: 'tel:+23461712400',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Location',
    value: '180 Second East Circular Road, Benin City, Nigeria',
    link: '#',
  },
];

export default function Contact() {
  const { colorMode } = useColorMode();
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Message sent!',
          description: "We'll get back to you as soon as possible.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: 'Error',
          description: data.error || 'Failed to send message. Please try again.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
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
              Get in Touch
            </Heading>
            <Text
              fontSize={{ base: 'lg', md: 'xl' }}
              color={colorMode === 'dark' ? 'gray.300' : 'gray.600'}
              maxW="2xl"
              mx="auto"
            >
              Have a project in mind? Let's discuss how we can help you achieve your goals.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} w="full">
            {/* Contact Information */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <VStack spacing={6} align="stretch">
                <Heading
                  as="h3"
                  fontSize="2xl"
                  color={colorMode === 'dark' ? 'white' : 'gray.800'}
                >
                  Contact Information
                </Heading>
                {contactInfo.map((info, index) => (
                  <MotionBox
                    key={index}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HStack
                      spacing={4}
                      p={4}
                      bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                      borderRadius="lg"
                      as="a"
                      href={info.link}
                      _hover={{
                        boxShadow: 'lg',
                        borderColor: 'brand.gold',
                      }}
                      borderWidth="1px"
                      borderColor={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
                      transition="all 0.3s ease"
                    >
                      <Box
                        p={3}
                        bg={colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue'}
                        borderRadius="lg"
                      >
                        <Icon as={info.icon} w={5} h={5} color="white" />
                      </Box>
                      <VStack align="start" spacing={0}>
                        <Text
                          fontSize="sm"
                          color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
                        >
                          {info.title}
                        </Text>
                        <Text
                          fontSize="md"
                          fontWeight="semibold"
                          color={colorMode === 'dark' ? 'white' : 'gray.800'}
                        >
                          {info.value}
                        </Text>
                      </VStack>
                    </HStack>
                  </MotionBox>
                ))}
              </VStack>
            </MotionBox>

            {/* Contact Form */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                p={8}
                bg={colorMode === 'dark' ? 'gray.700' : 'white'}
                borderRadius="xl"
                boxShadow="xl"
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    <FormControl isRequired>
                      <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}>
                        Name
                      </FormLabel>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        size="lg"
                        bg={colorMode === 'dark' ? 'gray.600' : 'gray.50'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.300'}
                        _hover={{
                          borderColor: 'brand.polynesianBlue',
                        }}
                        _focus={{
                          borderColor: 'brand.marianBlue',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-marianBlue)',
                        }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}>
                        Email
                      </FormLabel>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        size="lg"
                        bg={colorMode === 'dark' ? 'gray.600' : 'gray.50'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.300'}
                        _hover={{
                          borderColor: 'brand.polynesianBlue',
                        }}
                        _focus={{
                          borderColor: 'brand.marianBlue',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-marianBlue)',
                        }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}>
                        Subject
                      </FormLabel>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        size="lg"
                        bg={colorMode === 'dark' ? 'gray.600' : 'gray.50'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.300'}
                        _hover={{
                          borderColor: 'brand.polynesianBlue',
                        }}
                        _focus={{
                          borderColor: 'brand.marianBlue',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-marianBlue)',
                        }}
                      />
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel color={colorMode === 'dark' ? 'gray.300' : 'gray.700'}>
                        Message
                      </FormLabel>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        size="lg"
                        bg={colorMode === 'dark' ? 'gray.600' : 'gray.50'}
                        borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.300'}
                        _hover={{
                          borderColor: 'brand.polynesianBlue',
                        }}
                        _focus={{
                          borderColor: 'brand.marianBlue',
                          boxShadow: '0 0 0 1px var(--chakra-colors-brand-marianBlue)',
                        }}
                      />
                    </FormControl>

                    <Button
                      type="submit"
                      size="lg"
                      w="full"
                      bg={colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue'}
                      color="white"
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      _hover={{
                        bg: colorMode === 'dark' ? 'brand.marianBlue' : 'brand.polynesianBlue',
                        transform: 'translateY(-2px)',
                        boxShadow: 'lg',
                      }}
                      _active={{
                        transform: 'translateY(0)',
                      }}
                      transition="all 0.3s ease"
                    >
                      Send Message
                    </Button>
                  </VStack>
                </form>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
