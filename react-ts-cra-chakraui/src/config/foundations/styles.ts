import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    "html, body": {
      fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
      fontSize: "0.95rem",
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      lineHeight: "tall",
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

export default styles;
