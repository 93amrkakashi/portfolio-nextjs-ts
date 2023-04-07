import { Box } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
  // eslint-disable-next-line react-hooks/exhaustive-deps
const Layout = ( {children}:{children: React.ReactNode} ) => {
  return (
    <Box
    height={"100vh"}
    // width={"100vw"}
    >
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
}

export default Layout;
