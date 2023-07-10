import Cursor from "@/components/cursor/cursor";
import Layout from "@/components/layout/layout";
import "@/styles/globals.css";
import Fonts from "@/theme/fonts/fonts";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Cursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
