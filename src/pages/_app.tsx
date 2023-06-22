import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProps } from "next/app";

const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
