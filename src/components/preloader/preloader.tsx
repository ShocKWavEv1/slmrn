import { Box, Fade, Heading, ScaleFade, SlideFade } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { curtain, timer } from "./constants";
import { PreloaderProps } from "./model";
import { motion } from "framer-motion";

const Preloader: React.FC<PreloaderProps> = () => {
  const [showTimer, setTimer] = useState(true);
  useEffect(() => {
    timer();
    curtain();
    setTimeout(() => {
      setTimer(false);
    }, 5400);
  }, []);

  return (
    <Box
      w="100%"
      h="100vh"
      bg="black"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      zIndex={2}
      className="preloader"
    >
      <motion.div
        key={"curtain"}
        exit={{ transition: { duration: 1 }, opacity: 0, display: "none" }}
        initial={{ opacity: 0 }}
        animate={{ transition: { delay: 0.3, duration: 1 }, opacity: 1 }}
      >
        <SlideFade in={showTimer} offsetY="-100px">
          <Box
            w="300px"
            height="300px"
            border="2px solid white"
            borderRadius="25em"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Heading variant="H4" className="timer">
              0%
            </Heading>
          </Box>
        </SlideFade>
      </motion.div>
    </Box>
  );
};

export default Preloader;
