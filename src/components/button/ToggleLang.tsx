"use client"; // Menandakan ini adalah komponen sisi-klien

import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const LanguageToggle = () => {
	const router = useRouter();
	const pathname = usePathname();
	const languagePrefix = pathname.split("/")[1];
	const [language, setLanguage] = useState<string>(languagePrefix);

	const handleLanguageChange = (locale: string) => {
		if (languagePrefix === locale) {
			return;
		}
		const updatedPathname = pathname.replace(
			`/${languagePrefix}`,
			`/${locale}`
		);

		router.replace(updatedPathname, { scroll: false });
	};

	return (
		<button
			onClick={() => {
				setLanguage(language === "en" ? "" : "en");
				handleLanguageChange(language === "en" ? "id" : "en");
			}}
			className="relative h-8 w-[45px] cursor-pointer">
			<div className="relative h-8 w-full">
				{/* English Flag */}
				<Image
					src="/english.svg"
					alt="English"
					width={32}
					height={32}
					className={`absolute h-8 w-8 transition-all border-2 rounded-full  border-black dark:border-white 
						${language === "en" ? "top-0 z-20 translate-x-0" : "top-0 z-0 translate-x-3"}
					`}
				/>

				<div
					className={`absolute h-8 w-8 transition-all border-2 rounded-full bg-black/50 
						top-0 z-10 translate-x-3`}
				/>

				{/* Indonesian Flag */}
				<Image
					src="/indonesia.svg"
					alt="Indonesian"
					width={32}
					height={32}
					className={`
						absolute h-8 w-8 transition-all border-2 rounded-full  border-black dark:border-white 
						${language === "" ? "top-0 z-20 translate-x-0" : "top-0 z-0 translate-x-3"} 
					`}
				/>
			</div>
		</button>
	);
};

export default LanguageToggle;
