import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const items = [
	{ name: "HTML", image: "/logos/html.svg" },
	{ name: "CSS", image: "/logos/css.svg" },
	{
		name: "JAVASCRIPT",
		image: "/logos/javascript.svg",
	},
	{ name: "BOOTSTRAP", image: "/logos/bootstrap.svg" },
	{
		name: "TAILWIND CSS",
		image: "/logos/tailwindcss.svg",
	},
	{ name: "PHP", image: "/logos/php.svg" },
	{ name: "NODE JS", image: "/logos/nodejs.svg" },
	{
		name: "TYPESCRIPT",
		image: "/logos/typescript.svg",
	},
	{ name: "GIT(HUB)", image: "/logos/github.svg" },
	{ name: "REACT JS", image: "/logos/react.svg" },
	{
		name: "EXPRESS JS",
		image: "/logos/expressjs.svg",
	},
	{ name: "NEXT JS", image: "/logos/nextjs.svg" },
	{ name: "LARAVEL", image: "/logos/laravel.svg" },
	{ name: "NEST JS", image: "/logos/nestjs.svg" },
	{ name: "MYSQL", image: "/logos/mysql.svg" },
	{
		name: "POSTGRESQL",
		image: "/logos/postgresql.svg",
	},
	{ name: "PHOTOSHOP", image: "/logos/photoshop.svg" },
	{ name: "FIGMA", image: "/logos/figma.svg" },
	{ name: "CANVA", image: "/logos/canva.svg" },
	{ name: "AI", image: "/logos/chatgpt.svg" },
];

const bgMap: Record<string, string> = {
	HTML: "bg-[#FF4B00]",
	CSS: "bg-[#2196f3]",
	JAVASCRIPT: "bg-[#dab92d]",
	BOOTSTRAP: "bg-[#7810f6]",
	"TAILWIND CSS": "bg-[#2197bc]",
	PHP: "bg-[#777bb3]",
	"NODE JS": "bg-[#539e43]",
	TYPESCRIPT: "bg-[#3178c6]",
	"GIT(HUB)": "bg-[#161514]",
	"REACT JS": "bg-[#4daaf6]",
	"EXPRESS JS": "bg-[#363636]",
	"NEXT JS": "bg-[#161514]",
	LARAVEL: "bg-[#ff2d20]",
	"NEST JS": "bg-[#e0234e]",
	MYSQL: "bg-[#e58f00]",
	POSTGRESQL: "bg-[#336791]",
	PHOTOSHOP: "bg-[#10212d]",
	FIGMA: "bg-[#ff7262]",
	CANVA: "bg-[#5a3cf1]",
	AI: "bg-[#0ea982]",
};

const SkillSection = async () => {
	const t = await getTranslations();

	return (
		<section className="w-full px-10 xl:container md:px-20 xl:mx-auto py-32 relative">
			<div className="flex flex-col justify-start items-center relative gap-6">
				<p className="self-stretch text-[clamp(2rem,3cqw,4rem)] font-bold text-center text-foreground font-inria-serif">
					{t("skill-section.title")}
				</p>
				<div className="flex justify-center items-start gap-8 2xl:gap-10 3xl:gap-12 flex-wrap font-playfair-display cursor-default">
					{items.map((item, index) => (
						<div
							key={index}
							className={`group transition-all duration-300 ease-in-out hover:bg-transparent flex justify-center items-center relative gap-6 px-6 py-2.5 ${
								bgMap[item.name]
							}`}>
							<p className=" text-[clamp(1.5rem,2.5cqw,3.5rem)] transition-all duration-300 ease-in-out font-black text-left text-white group-hover:text-foreground">
								{item.name}
							</p>
							<div className="absolute -top-8 -right-8 scale-0 rotate-0 group-hover:rotate-[-25deg] group-hover:scale-90 2xl:group-hover:scale-100 3xl:group-hover:scale-115 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
								<div className="relative h-20 w-20">
									<Image
										alt={item.name.toLowerCase()}
										src={item.image}
										fill
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
