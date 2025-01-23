import React from "react";
import Navbar from "./../components/Navbar.jsx"

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Barre de navigation */}
      <main>{children}</main> {/* Ici, les composants enfants seront rendus */}
    </div>
  );
};

export default MainLayout;
