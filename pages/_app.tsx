import BG from "@/components/BG";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      {/* <BG /> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
