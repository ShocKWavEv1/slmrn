import Cursor from "@/components/cursor/cursor";
import Layout from "@/components/layout/layout";
import Preloader from "@/components/preloader/preloader";
import PageTransition from "@/components/transition/transition";
import "@/styles/globals.css";
import Fonts from "@/theme/fonts/fonts";
import theme from "@/theme/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isPreloader, setPreloader] = useState(true);

  const router = useRouter();

  const transitionVariants = {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: "0%" },
    exit: { opacity: 0, y: "-100%" },
  };

  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Cursor />
      <Preloader />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.route}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            },
            exitState: {
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            },
          }}
          className="base-page-size"
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </ChakraProvider>
  );
}
