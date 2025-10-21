"use client";

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Icon,
  useColorMode,
  List,
  ListItem,
  ListIcon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCode,
  FaMobileAlt,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const MotionBox = motion(Box);

const servicesDetailed = [
  {
    icon: FaSearch,
    title: "SEO Optimization",
    description:
      "Elevate your online presence with our comprehensive SEO strategies designed to boost your search engine rankings and drive organic traffic.",
    features: [
      "Keyword Research & Analysis",
      "On-Page SEO Optimization",
      "Technical SEO Audits",
      "Link Building Strategies",
      "Content Optimization",
      "Local SEO Services",
      "Performance Tracking & Reporting",
    ],
    color: "brand.marianBlue",
  },
  {
    icon: FaCode,
    title: "Website Design & Development",
    description:
      "Create stunning, responsive websites that captivate your audience and deliver exceptional user experiences across all devices.",
    features: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration",
      "UI/UX Design",
      "Website Maintenance",
      "Performance Optimization",
    ],
    color: "brand.polynesianBlue",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile & Web Applications",
    description:
      "Build powerful, scalable applications that transform your business operations and engage your users with cutting-edge technology.",
    features: [
      "Cross-Platform Development",
      "Native iOS & Android Apps",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "Cloud-Based Solutions",
      "App Maintenance & Support",
      "Quality Assurance Testing",
    ],
    color: "brand.mikadoYellow",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Development Training",
    description:
      "Empower your team with professional training programs covering the latest web and mobile development technologies and best practices.",
    features: [
      "Mobile App Development Courses",
      "Frontend & Backend Training",
      "Data Analyics Training",
      "Modern Framework Training",
      "Hands-on Project Experience",
      "Certification Programs",
      "Corporate Training Solutions",
    ],
    color: "brand.gold",
  },
];

export default function ServicesPage() {
  const { colorMode } = useColorMode();

  return (
    <>
      <Navbar />
      <Box pt={20}>
        {/* Hero Section */}
        <Box
          minH={{ sm: "60vh", md: "100vh" }}
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
            bgImage="url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            _after={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg:
                colorMode === "dark"
                  ? "linear-gradient(135deg, rgba(0, 41, 107, 0.60) 0%, rgba(0, 63, 136, 0.60) 50%, rgba(26, 32, 44, 0.70) 100%)"
                  : "linear-gradient(135deg, rgba(0, 41, 107, 0.55) 0%, rgba(0, 63, 136, 0.55) 50%, rgba(255, 255, 255, 0.65) 100%)",
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
              colorMode === "dark"
                ? "radial-gradient(circle at 30% 40%, rgba(253, 197, 0, 0.12) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0, 105, 148, 0.15) 0%, transparent 50%)"
                : "radial-gradient(circle at 30% 40%, rgba(253, 197, 0, 0.10) 0%, transparent 50%), radial-gradient(circle at 70% 70%, rgba(0, 105, 148, 0.12) 0%, transparent 50%)"
            }
            animate={{
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            zIndex={1}
          />

          {/* Floating Decorative Elements */}
          <MotionBox
            position="absolute"
            top="20%"
            right="10%"
            w={{ base: "200px", md: "300px" }}
            h={{ base: "200px", md: "300px" }}
            borderRadius="full"
            bg={
              colorMode === "dark" ? "brand.polynesianBlue" : "brand.marianBlue"
            }
            opacity={0.08}
            filter={{ base: "blur(60px)", md: "blur(80px)" }}
            animate={{
              y: [0, -30, 0],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            zIndex={1}
            display={{ base: "none", sm: "block" }}
          />

          <MotionBox
            position="absolute"
            bottom="15%"
            left="8%"
            w={{ base: "180px", md: "250px" }}
            h={{ base: "180px", md: "250px" }}
            borderRadius="full"
            bg="brand.gold"
            opacity={0.08}
            filter={{ base: "blur(50px)", md: "blur(70px)" }}
            animate={{
              y: [0, 25, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            zIndex={1}
            display={{ base: "none", sm: "block" }}
          />

          <Container
            maxW={{
              base: "100%",
              sm: "container.sm",
              md: "container.md",
              lg: "container.lg",
              xl: "container.xl",
              "2xl": "container.2xl",
            }}
            position="relative"
            zIndex={2}
            px={{ base: 4, sm: 6, md: 8 }}
          >
            <VStack spacing={{ base: 6, md: 8 }} textAlign="center">
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "85px" }}
                  fontWeight="extrabold"
                  color="white"
                  mb={4}
                  textShadow="0 4px 20px rgba(0, 0, 0, 0.3)"
                >
                  Our{" "}
                  <Box
                    as="span"
                    bgGradient="linear(to-r, brand.mikadoYellow, brand.gold)"
                    bgClip="text"
                    animation="gradient 8s ease infinite"
                    sx={{
                      "@keyframes gradient": {
                        "0%, 100%": {
                          backgroundPosition: "0% 50%",
                        },
                        "50%": {
                          backgroundPosition: "100% 50%",
                        },
                      },
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Services
                  </Box>
                </Heading>
              </MotionBox>

              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                maxW={{ base: "full", md: "3xl" }}
              >
                <Text
                  fontSize={{ base: "md", sm: "lg", md: "4xl" }}
                  color="whiteAlpha.900"
                  textShadow="0 2px 10px rgba(0, 0, 0, 0.3)"
                  px={{ base: 2, sm: 0 }}
                >
                  Comprehensive digital solutions tailored to your business
                  needs. From SEO to custom development, we&apos;ve got you
                  covered.
                </Text>
              </MotionBox>

              {/* Optional: Breadcrumb or CTA */}
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <HStack
                  spacing={2}
                  justify="center"
                  color="whiteAlpha.800"
                  fontSize={{ base: "sm", md: "md" }}
                >
                  <Text>Home</Text>
                  <Text>/</Text>
                  <Text fontWeight="bold" color="brand.gold">
                    Services
                  </Text>
                </HStack>
              </MotionBox>
            </VStack>
          </Container>
        </Box>

        {/* Services Details */}
        <Box py={20} bg={colorMode === "dark" ? "gray.800" : "gray.50"}>
          <Container maxW="container.xl">
            <VStack spacing={16}>
              {servicesDetailed.map((service, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  w="full"
                >
                  <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={12}
                    alignItems="center"
                    flexDirection={index % 2 === 0 ? "row" : "row-reverse"}
                  >
                    <Box order={{ base: 1, lg: index % 2 === 0 ? 1 : 2 }}>
                      <VStack align="start" spacing={6}>
                        <Box
                          p={4}
                          bg={
                            colorMode === "dark"
                              ? "whiteAlpha.100"
                              : "blackAlpha.50"
                          }
                          borderRadius="xl"
                          display="inline-block"
                        >
                          <Icon
                            as={service.icon}
                            w={12}
                            h={12}
                            color={service.color}
                          />
                        </Box>
                        <Heading
                          as="h2"
                          fontSize={{ base: "2xl", md: "3xl" }}
                          color={colorMode === "dark" ? "white" : "gray.800"}
                        >
                          {service.title}
                        </Heading>
                        <Text
                          fontSize={{ base: "md", md: "lg" }}
                          color={colorMode === "dark" ? "gray.300" : "gray.600"}
                        >
                          {service.description}
                        </Text>
                        <Link href="/contact">
                          <Button
                            size="lg"
                            bg={
                              colorMode === "dark"
                                ? "brand.polynesianBlue"
                                : "brand.marianBlue"
                            }
                            color="white"
                            _hover={{
                              bg:
                                colorMode === "dark"
                                  ? "brand.marianBlue"
                                  : "brand.polynesianBlue",
                              transform: "translateY(-2px)",
                              boxShadow: "lg",
                            }}
                            transition="all 0.3s ease"
                          >
                            Get Started
                          </Button>
                        </Link>
                      </VStack>
                    </Box>

                    <Box order={{ base: 2, lg: index % 2 === 0 ? 2 : 1 }}>
                      <Box
                        p={8}
                        bg={colorMode === "dark" ? "gray.700" : "white"}
                        borderRadius="xl"
                        boxShadow="xl"
                        borderWidth="1px"
                        borderColor={
                          colorMode === "dark" ? "gray.600" : "gray.200"
                        }
                      >
                        <Heading
                          as="h3"
                          fontSize="xl"
                          mb={6}
                          color={colorMode === "dark" ? "white" : "gray.800"}
                        >
                          What&apos;s Included
                        </Heading>
                        <List spacing={3}>
                          {service.features.map((feature, idx) => (
                            <ListItem
                              key={idx}
                              display="flex"
                              alignItems="center"
                              color={
                                colorMode === "dark" ? "gray.300" : "gray.700"
                              }
                            >
                              <ListIcon
                                as={FaCheckCircle}
                                color={service.color}
                              />
                              {feature}
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Box>
                  </SimpleGrid>
                </MotionBox>
              ))}
            </VStack>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box py={20} bg={colorMode === "dark" ? "gray.900" : "white"}>
          <Container maxW="container.xl">
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Box
                p={12}
                bg={colorMode === "dark" ? "gray.800" : "gray.50"}
                borderRadius="2xl"
                textAlign="center"
                position="relative"
                overflow="hidden"
              >
                <VStack spacing={6}>
                  <Heading
                    as="h2"
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    bgGradient="linear(to-r, brand.marianBlue, brand.polynesianBlue, brand.gold)"
                    bgClip="text"
                  >
                    Ready to Start Your Project?
                  </Heading>
                  <Text
                    fontSize={{ base: "md", md: "lg" }}
                    color={colorMode === "dark" ? "gray.300" : "gray.600"}
                    maxW="2xl"
                  >
                    Let&apos;s discuss how we can help you achieve your digital
                    goals. Contact us today for a free consultation.
                  </Text>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      bg={
                        colorMode === "dark"
                          ? "brand.polynesianBlue"
                          : "brand.marianBlue"
                      }
                      color="white"
                      px={8}
                      py={6}
                      fontSize="lg"
                      _hover={{
                        bg:
                          colorMode === "dark"
                            ? "brand.marianBlue"
                            : "brand.polynesianBlue",
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 40px rgba(0, 80, 157, 0.3)",
                      }}
                      transition="all 0.3s ease"
                    >
                      Contact Us Now
                    </Button>
                  </Link>
                </VStack>
              </Box>
            </MotionBox>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
