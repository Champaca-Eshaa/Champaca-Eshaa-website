import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX} from "react-icons/fi";
import logo from "../assets/logo.svg";
import Background from "./Background";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className=" fixed z-50 bg-black inline-flex items-center justify-between w-full text-xl text-white font-semibold  bg-opacity-10 backdrop-blur-lg border-b border-opacity-20 ">
        
        <div className="inline-flex p-3 text-center items-center">
          <img className="w-12 h-12" src={logo} alt="logo" />
          <div className=" font-bold text-2xl pl-5 text-white">
            <HashLink to="/#hero" onClick={() => setMenuOpen(false)}>
              Champaca Eshaa
            </HashLink>
          </div>
        </div>
        <div className="px-5 md:hidden">
          <FiMenu
            size={30}
            color="white"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
        <div className="inline-flex justify-evenly text-base flex-grow  max-md:hidden">
          <HashLink to="/#about">About Us</HashLink>
          <HashLink to="/#products">Products</HashLink>
          <HashLink to="/#contactUs">Contact Us</HashLink>
        </div>
        {/* <div className="inline-flex left-0 justify-end items-center max-md:hidden">
          <TbBrandWhatsapp size="50" color="white" />
          <p className="px-5 ">Whatsapp</p>
        </div> */}
        {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bg-black bg-opacity-80 backdrop-blur-md backdrop-filter text-white text-lg flex flex-col items-center md:hidden h-screen">
          <Background/>
          <div className="absolute top-5 right-5">
            <FiX size={30} color="white" onClick={() => setMenuOpen(false)} />
          </div>
          <div className="flex flex-col justify-center items-center h-full space-y-8 font-bold text-xl">
            <HashLink className="py-2" to="/#hero" onClick={() => setMenuOpen(false)}>
              <p>Home</p>
            </HashLink>
            <HashLink className="py-2" to="/#about" onClick={() => setMenuOpen(false)}>
              <p>About</p>
            </HashLink>
            <HashLink className="py-2" to="/#products" onClick={() => setMenuOpen(false)}>
              <p>Products</p>
            </HashLink>
            <HashLink className="py-2" to="/#contactUs" onClick={() => setMenuOpen(false)}>
              <p>Contact Us</p>
            </HashLink>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Header;
