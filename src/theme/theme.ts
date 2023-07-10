import { extendTheme } from "@chakra-ui/react";
import { getColors } from "./colors/getColors";
import colorsToken from "./colors/colors.json";
import { HeadingTheme as Heading } from "./designSystem/headingTheme/headingTheme";
import { TextTheme as Text } from "./designSystem/textTheme/textTheme";

// HOUSECOLOR COMPONENTS

const colors = getColors({ colors: colorsToken.color });

const breakpoints = {
  xs: "414px",
  sm: "550px",
  md: "744px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  breakpoints,
  config,
  colors,
  components: {
    Heading,
    Text,
  },
  styles: {
    global: {
        body: {
            bg: "primary.500",
            width: "100%",
        }
    }
  },
});

export default theme;
