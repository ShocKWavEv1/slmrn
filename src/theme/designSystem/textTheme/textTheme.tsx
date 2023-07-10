import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseXLStyles = {
  fontFamily: "n27",
  fontSize: "46px",
};

const baseLGStyles = {
  fontFamily: "n27",
  fontSize: "40px",
};

const baseMDStyles = {
  fontFamily: "n27",
  fontSize: "34px",
};

const baseSMStyles = {
  fontFamily: "n27",
  fontSize: "28px",
};

const baseXSStyles = {
  fontFamily: "n27",
  fontSize: "20px",
};

const baseXXSStyles = {
  fontFamily: "n27",
  fontSize: "14px",
};

/* H1 VARIANTS */
const XL = defineStyle({
  ...baseXLStyles,
  fontWeight: 300,
});

const LG = defineStyle({
  ...baseLGStyles,
  fontWeight: 300,
});

const MD = defineStyle({
  ...baseMDStyles,
  fontWeight: 300,
});

const SM = defineStyle({
  ...baseSMStyles,
  fontWeight: 300,
});

const XS = defineStyle({
  ...baseXSStyles,
  fontWeight: 300,
});

const XXS = defineStyle({
  ...baseXXSStyles,
  fontWeight: 300,
});

export const TextTheme = defineStyleConfig({
  variants: {
    XL,
    LG,
    MD,
    SM,
    XS,
    XXS,
  },
});
