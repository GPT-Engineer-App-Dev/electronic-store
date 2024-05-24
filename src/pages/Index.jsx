import { Box, Container, VStack, Text, Image, Heading, SimpleGrid, Link, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4}>
        <HStack spacing={8}>
          <Link href="/" fontSize="xl" fontWeight="bold">ElectroShop</Link>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" padding={10} textAlign="center">
        <Image src="/images/hero-banner.jpg" alt="Featured Electronics" borderRadius="md" />
        <Heading as="h1" size="2xl" marginTop={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="lg" marginTop={2}>Your one-stop shop for the latest and greatest in electronics.</Text>
      </Box>

      {/* Featured Products */}
      <Container maxW="container.xl" marginTop={10}>
        <Heading as="h2" size="xl" marginBottom={6}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product1.jpg" alt="Product 1" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 1</Text>
              <Text fontSize="lg" color="gray.600">$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product2.jpg" alt="Product 2" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 2</Text>
              <Text fontSize="lg" color="gray.600">$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="/images/product3.jpg" alt="Product 3" />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">Product 3</Text>
              <Text fontSize="lg" color="gray.600">$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" padding={10} marginTop={10}>
        <Container maxW="container.xl">
          <Flex>
            <Box>
              <Heading as="h4" size="md">ElectroShop</Heading>
              <Text marginTop={2}>© 2023 ElectroShop. All rights reserved.</Text>
            </Box>
            <Spacer />
            <HStack spacing={4}>
              <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} />
              <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} />
              <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;