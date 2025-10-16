import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    royalBlue: '#00296b',
    marianBlue: '#003f88',
    polynesianBlue: '#00509d',
    mikadoYellow: '#fdc500',
    gold: '#ffd500',
  },
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
  }),
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'lg',
    },
    variants: {
      solid: (props: any) => ({
        bg: props.colorMode === 'dark' ? 'brand.polynesianBlue' : 'brand.marianBlue',
        color: 'white',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.marianBlue' : 'brand.polynesianBlue',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.3s ease',
      }),
      outline: (props: any) => ({
        borderColor: props.colorMode === 'dark' ? 'brand.gold' : 'brand.marianBlue',
        color: props.colorMode === 'dark' ? 'brand.gold' : 'brand.marianBlue',
        _hover: {
          bg: props.colorMode === 'dark' ? 'brand.gold' : 'brand.marianBlue',
          color: props.colorMode === 'dark' ? 'gray.900' : 'white',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        transition: 'all 0.3s ease',
      }),
    },
  },
  Heading: {
    baseStyle: {
      fontWeight: 'bold',
    },
  },
};

const fonts = {
  heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
};

const theme = extendTheme({
  config,
  colors,
  styles,
  components,
  fonts,
});

export default theme;
