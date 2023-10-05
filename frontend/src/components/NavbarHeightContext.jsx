import React, { createContext, useContext, useState, useEffect } from "react";

const NavbarHeightContext = createContext();

export const useNavbarHeight = () => {
  return useContext(NavbarHeightContext);
};

export const NavbarHeightProvider = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    // Get the height of the fixed navbar
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      setNavbarHeight(navbarElement.offsetHeight);
    }
    console.log("Navbar Height:", navbarHeight)
  }, [navbarHeight]); // This effect runs once after the initial render

  return (
    <NavbarHeightContext.Provider value={navbarHeight}>
      {children}
    </NavbarHeightContext.Provider>
  );
};
