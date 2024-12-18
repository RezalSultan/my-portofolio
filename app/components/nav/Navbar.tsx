"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ToggleDarkMode from "../button/ToggleDarkMode";
import LanguageToggle from "../button/ToggleLang";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const t = useTranslations();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 20);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (
    <header
      className={`w-full border-b-2 border-black dark:border-white fixed inset-0 bg-l-background dark:bg-d-background transition-all duration-300 ease-in-out z-[999] h-20 ${
        visible ? "translate-y-0" : `-translate-y-20`
      }`}
    >
      <div className="container mx-auto h-full flex justify-between items-center text-black dark:text-white gap-10">
        <div>
          <p className="text-2xl">LOGO</p>
        </div>
        <nav className="flex justify-center items-center font-display font-black text-2xl h-20 ">
          <Link
            href="#"
            className="px-12 border-x-2 h-20 flex justify-center items-center border-black dark:border-white"
          >
            {t("navbar.service")}
          </Link>
          <Link
            href="#"
            className="px-12 border-r-2 h-20 flex justify-center items-center border-black dark:border-white"
          >
            {t("navbar.portfolio")}
          </Link>
          <Link
            href="#"
            className="px-12 whitespace-nowrap h-20 flex justify-center items-center border-black dark:border-white"
          >
            {t("navbar.about-me")}
          </Link>
          <Link
            href="#"
            className="px-12 border-x-2 h-20 flex justify-center items-center border-black dark:border-white"
          >
            {t("navbar.contact")}
          </Link>
        </nav>
        <div className="flex justify-center items-center gap-3 relative">
          <ToggleDarkMode />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
