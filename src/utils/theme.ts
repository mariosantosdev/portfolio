import { extendTheme } from "@chakra-ui/react";

export const config: any = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  ...config,
  colors: {
    bgHeader: "#0b1026",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "gray.800" : "whiteAlpha.900",
        color: props.colorMode === "dark" ? "white" : "gray.800",
      },
    }),
  },
});
