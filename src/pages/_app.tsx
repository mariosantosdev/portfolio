import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import { theme } from "@/utils/theme";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        themeColor="#ffffff"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://www.devmario.me",
          siteName: "Mário Santos - Portfolio",
          images: [
            {
              url: "https://www.devmario.me/images/memoji-writting.png",
              width: 800,
              height: 600,
              alt: "Mário Memoji",
              type: "image/png",
            },
          ],
        }}
      />
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
