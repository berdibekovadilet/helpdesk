import React, { useState } from "react";
import MobileMenu from "./MobileMenu/MobileMenu";
import Navbar from "./Navbar/Navbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen(!menuOpen);

  return (
    <>
      <MobileMenu menuOpen={menuOpen} menuToggler={menuToggler} />
      <Navbar menuToggler={menuToggler} />
    </>
  );
};

export default Header;
