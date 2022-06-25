import React, { useState } from "react";
import MobileMenuServer from "./MobileMenu/MobileMenuServer";
import NavbarServer from "./Navbar/NavbarServer";

const HeaderServer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen(!menuOpen);

  return (
    <>
      <MobileMenuServer menuOpen={menuOpen} menuToggler={menuToggler} />
      <NavbarServer menuToggler={menuToggler} />
    </>
  );
};

export default HeaderServer;
