import React from "react";
import styles from "@/styles/nav.module.css";
import Link from "next/link";
import { useRef } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = () => {
  const navRef = useRef ();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }
  
  return (
    <>
      <div className="w-full h-20 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/Home">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <Button>
              <FaTimes/>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;