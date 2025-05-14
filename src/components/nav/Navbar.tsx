"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
// import ToggleDarkMode from "../button/ToggleDarkMode";
import LanguageToggle from "../button/ToggleLang";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import ToggleDarkMode from "../../theme/ToggleDarkMode";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [openNavbar, setOpenNavbar] = useState(true);
	const t = useTranslations();

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (openNavbar) {
				setVisible(
					prevScrollPos > currentScrollPos || currentScrollPos < 20
				);
				setPrevScrollPos(currentScrollPos);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [prevScrollPos, visible, openNavbar]);

	return (
		<header
			className={`fixed inset-0 z-[999] w-full border-b-2 border-black bg-background transition-all duration-200 ease-in-out dark:border-white dark:bg-background ${
				visible ? `translate-y-0` : `-translate-y-20`
			} ${openNavbar ? "h-20" : "h-screen xl:h-20"} `}>
			<div className="flex h-20 items-center justify-between gap-10 px-7 text-foreground xl:container dark:text-foreground md:px-20 xl:mx-auto">
				<div>
					<p className="text-2xl">LOGO</p>
				</div>
				<nav className="hidden h-20 items-center justify-center font-playfair-display text-2xl font-black xl:flex">
					<Link
						href="#"
						className=" flex h-20 items-center justify-center border-x-2 border-black px-7 dark:border-white">
						{t("navbar.home")}
					</Link>
					<Link
						href="#"
						className="flex h-20 items-center justify-center border-r-2 border-black px-7 dark:border-white">
						{t("navbar.portfolio")}
					</Link>
					<Link
						href="#"
						className="flex h-20 items-center justify-center whitespace-nowrap border-black px-7 dark:border-white">
						{t("navbar.about-me")}
					</Link>
					<Link
						href="#"
						className="flex h-20 items-center justify-center border-l-2 border-black px-7 dark:border-white">
						{t("navbar.blog")}
					</Link>
					<Link
						href="#"
						className="flex h-20 items-center justify-center border-x-2 border-black px-7 dark:border-white">
						{t("navbar.contact")}
					</Link>
				</nav>
				<div className="relative flex items-center justify-center gap-3">
					<ToggleDarkMode />
					<LanguageToggle />
					<label className="flex flex-col gap-2 w-8 xl:hidden cursor-pointer">
						<input
							className="peer hidden"
							type="checkbox"
							checked={!openNavbar}
							onChange={() => setOpenNavbar((prev) => !prev)}
						/>
						<div className="rounded-2xl h-[3px] w-1/2 bg-foreground dark:bg-foreground duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"></div>
						<div className="rounded-2xl h-[3px] w-full bg-foreground dark:bg-foreground duration-500 peer-checked:-rotate-45"></div>
						<div className="rounded-2xl h-[3px] w-1/2 bg-foreground dark:bg-foreground duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"></div>
					</label>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
