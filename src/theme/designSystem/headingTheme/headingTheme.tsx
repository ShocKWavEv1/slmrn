import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseH1Styles = {
  fontFamily: "n27",
  fontSize: "130px",
  letterSpacing: "-6px",
};

const baseH2Styles = {
  fontFamily: "n27",
  fontSize: "110px",
  letterSpacing: "-6px",
};

const baseH3Styles = {
  fontFamily: "n27",
  fontSize: "90px",
  letterSpacing: "-4px",
};

const baseH4Styles = {
  fontFamily: "n27",
  fontSize: "80px",
  letterSpacing: "-4px",
};

const baseH5Styles = {
  fontFamily: "n27",
  fontSize: "70px",
  letterSpacing: "-2px",
};

const baseH6Styles = {
  fontFamily: "n27",
  fontSize: "62px",
  letterSpacing: "-2px",
};

const baseH7Styles = {
  fontFamily: "n27",
  fontSize: "54px",
  letterSpacing: "-1px",
};

const baseH8Styles = {
  fontFamily: "n27",
  fontSize: "46px",
  letterSpacing: "-1px",
};

/* H1 VARIANTS */
const H1 = defineStyle({
  ...baseH1Styles,
  fontWeight: 300,
});

const H2 = defineStyle({
  ...baseH2Styles,
  fontWeight: 300,
});

const H3 = defineStyle({
  ...baseH3Styles,
  fontWeight: 300,
});

const H4 = defineStyle({
  ...baseH4Styles,
  fontWeight: 300,
});

const H5 = defineStyle({
  ...baseH5Styles,
  fontWeight: 300,
});

const H6 = defineStyle({
  ...baseH6Styles,
  fontWeight: 300,
});

const H7 = defineStyle({
  ...baseH7Styles,
  fontWeight: 300,
});

const H8 = defineStyle({
  ...baseH8Styles,
  fontWeight: 300,
});

export const HeadingTheme = defineStyleConfig({
  variants: {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    H7,
    H8,
  },
});
