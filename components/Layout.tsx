import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
  // eslint-disable-next-line react-hooks/exhaustive-deps
const Layout = ( {children}:{children: React.ReactNode} ) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
