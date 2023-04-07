import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
  // eslint-disable-next-line react-hooks/exhaustive-deps
function Layout( props:any ) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
