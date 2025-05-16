import ScrollVelocity from "@/components/animation/ScrollVelocity";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

const items = [
	{
		slug: "creative-identity-agency",
		title: "Creative identity for a growing design agency creative identity for a growing design agency",
		datetime: "2025-05-20",
		image: "https://picsum.photos/seed/identity/187/114",
	},
	{
		slug: "modern-ui-fintech",
		title: "Modern UI design for a fintech platform UI design for a fintech fintech platform",
		datetime: "2025-05-18",
		image: "https://picsum.photos/seed/fintech/187/114",
	},
	{
		slug: "branding-for-startup",
		title: "Branding that fuels startup success",
		datetime: "2025-05-15",
		image: "https://picsum.photos/seed/startup/187/114",
	},
];

const NewBlogSection = async ({ paramsLocale }: { paramsLocale: string }) => {
	const t = await getTranslations();
	return (
		<section className="relative pt-0 pb-32 w-full h-full overflow-hidden">
			<div
				className={`overflow-hidden absolute rotate-[-45deg] top-0  ${
					paramsLocale === "en"
						? "-left-[850px] 3xl:-left-[600px]"
						: "-left-[1470px] 3xl:-left-[1230px]"
				}`}>
				<ScrollVelocity
					texts={[
						`${t("newblog-section.velocity")} | `,
						`${t("newblog-section.velocity")} |`,
					]}
					velocity={25}
					numCopies={5}
					className="custom-scroll-text font-playfair-display text-[80px] font-bold"
					classNameIndex={["text-foreground/30", "text-muted/80"]}
				/>
			</div>
			<div className="w-full px-10 xl:container md:px-20 xl:mx-auto flex justify-start items-center relative mt-48">
				<div className="absolute text-foreground font-inria-serif w-[45%] flex flex-col top-0 pb-56 pt-5">
					<p
						className={` leading-[1.1] text-left ${
							paramsLocale === "en"
								? "text-[clamp(4rem,10cqw,14rem)]"
								: "text-[clamp(4rem,9cqw,11rem)] mb-5"
						}`}>
						{t("newblog-section.title-1")}
					</p>
					<div className="w-0.5 h-[349px] 2xl:h-[389px] 3xl:h-[449px] bg-foreground ml-14" />
					<p className="text-[clamp(4rem,10cqw,14rem)] leading-[1.1] text-left ml-24 -mt-[349px]  2xl:-mt-[389px] 3xl:-mt-[449px]">
						{t("newblog-section.title-2")}
					</p>
					<Button className="mt-8 w-fit ml-24">
						<p className="text-[28px] font-bold text-primary-foreground">
							{t("button.read-more")}
						</p>
						<div>
							<svg
								width={34}
								height={34}
								viewBox="0 0 34 34"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[34px] h-[34px] relative"
								preserveAspectRatio="xMidYMid meet">
								<path
									d="M19.6688 8.66424C19.3367 8.3321 18.8862 8.14551 18.4165 8.14551C17.9468 8.14551 17.4963 8.3321 17.1642 8.66424C16.832 8.99638 16.6454 9.44686 16.6454 9.91657C16.6454 10.3863 16.832 10.8368 17.1642 11.1689L21.2243 15.2291H8.49984C8.03018 15.2291 7.57976 15.4156 7.24767 15.7477C6.91557 16.0798 6.729 16.5303 6.729 16.9999C6.729 17.4696 6.91557 17.92 7.24767 18.2521C7.57976 18.5842 8.03018 18.7707 8.49984 18.7707H21.2243L17.1642 22.8309C16.832 23.163 16.6454 23.6135 16.6454 24.0832C16.6454 24.553 16.832 25.0034 17.1642 25.3356C17.4963 25.6677 17.9468 25.8543 18.4165 25.8543C18.8862 25.8543 19.3367 25.6677 19.6688 25.3356L26.7522 18.2522C26.9167 18.0878 27.0471 17.8926 27.1362 17.6777C27.2252 17.4628 27.271 17.2325 27.271 16.9999C27.271 16.7673 27.2252 16.537 27.1362 16.3221C27.0471 16.1073 26.9167 15.912 26.7522 15.7476L19.6688 8.66424Z"
									fill="white"
								/>
							</svg>
						</div>
					</Button>
				</div>
			</div>
			<div className="overflow-hidden">
				{items.map((item, index) => (
					<Link
						href={`/blog/detail/${item.slug}`}
						key={index}
						className="group flex justify-start items-end flex-col gap-6">
						<div className="w-full px-10 xl:container md:px-20 xl:mx-auto flex justify-end items-center mt-6">
							<div className="flex justify-between items-end w-[55%] relative gap-6 2xl:gap-14 3xl:gap-24">
								<div className="flex flex-col justify-start items-end relative gap-6 font-inria-serif w-full">
									<p className="text-2xl font-black text-left text-foreground font-playfair-display">
										{new Date(
											item.datetime
										).toLocaleDateString("id-ID", {
											day: "2-digit",
											month: "long",
											year: "numeric",
										})}
									</p>
									<p className="text-[32px] font-normal w-full text-left text-foreground line-clamp-3">
										{item.title}
									</p>
								</div>
								<div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in">
									<div className="overflow-hidden w-[187px] h-[114px] 2xl:scale-115 3xl:scale-125 relative 2xl:mb-4 3xl:mb-6">
										<Image
											alt={item.title}
											className="object-cover"
											src={item.image}
											fill
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="h-0.5 duration-500 transition-all ease-in-out w-[55%] bg-foreground 2xl:mb-4 3xl:mb-6  group-hover:bg-primary group-hover:shadow-[0px_0px_2px_#00000060] dark:group-hover:shadow-[0px_0px_2px_#ffffff60]" />
					</Link>
				))}
			</div>
		</section>
	);
};

export default NewBlogSection;
