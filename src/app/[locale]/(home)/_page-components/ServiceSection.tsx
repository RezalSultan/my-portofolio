import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";

const ServiceSection = async () => {
	const t = await getTranslations();
	return (
		<section className="w-full px-10 xl:container md:px-20 xl:mx-auto pt-20 pb-32 ">
			<div className="relative">
				<div className="absolute top-0 right-0 flex flex-col items-end justify-end font-inria-serif text-foreground z-20">
					<p className="pr-4 text-[clamp(5rem,5cqw,10rem)] font-bold">
						{t("service-section.title")}
					</p>
					<p className="-mt-4 pr-6 text-[28px] font-normal">
						{t("service-section.desc")}
					</p>
					<Button className="mt-8">
						<p className="text-[28px] font-bold text-primary-foreground">
							{t("button.lets-go")}
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
				<div className="flex justify-between items-start pt-16">
					<div className="group cursor-pointer flex flex-col justify-start items-start relative gap-2">
						<div className="transition-shadow duration-300 w-[clamp(325px,23vw,538px)] h-[clamp(350px,23vw,580px)] relative shadow-[0px_0px_20px_5px_rgba(255,212,0,0.2)] group-hover:shadow-[0px_0px_40px_10px_rgba(255,212,0,0.3)] dark:shadow-[0px_0px_20px_5px_rgba(98,3,183,0.15)] dark:group-hover:shadow-[0px_0px_40px_10px_rgba(98,3,183,0.25)]">
							<div className="overflow-hidden w-[clamp(325px,23vw,538px)] h-[clamp(350px,23vw,580px)] relative">
								<Image
									alt="Web Development"
									className="object-cover transition-transform duration-300 group-hover:scale-110 "
									src="/images/Web Development.png"
									fill
								/>
							</div>
						</div>
						<p className="text-[clamp(1.7rem,1.5cqw,2.5rem)] font-black text-center text-foreground font-playfair-display ">
							WEB DEVELOPMENT
						</p>
					</div>
					<div className="group cursor-pointer flex flex-col justify-start items-start relative gap-2 mt-[160px] 3xl:mt-[200px]">
						<div className="transition-shadow duration-300 w-[clamp(325px,23vw,538px)] h-[clamp(350px,23vw,580px)] relative shadow-[0px_0px_20px_5px_rgba(255,212,0,0.20)] group-hover:shadow-[0px_0px_40px_10px_rgba(255,212,0,0.3)] dark:shadow-[0px_0px_20px_5px_rgba(98,3,183,0.15)] dark:group-hover:shadow-[0px_0px_40px_10px_rgba(98,3,183,0.25)]">
							<div className="overflow-hidden w-[clamp(325px,23vw,538px)] h-[clamp(350px,23vw,580px)] relative">
								<Image
									alt="UI UX Design"
									className="object-cover transition-transform duration-300 group-hover:scale-110 "
									src="/images/UI UX Design.png"
									fill
								/>
							</div>
						</div>

						<p className="text-[clamp(1.7rem,1.5cqw,2.5rem)] font-black text-center text-foreground font-playfair-display ">
							UI UX DESIGN
						</p>
					</div>
					<div className="cursor-default flex flex-col justify-start items-start relative gap-2 mt-[320px] 3xl:mt-[400px]">
						<div className="w-[clamp(325px,23vw,538px)] h-[clamp(350px,23vw,580px)] relative">
							<Image
								alt="Mobile Development"
								className="object-cover opacity-15"
								src="/images/Mobile Development.png"
								fill
							/>
						</div>

						<p className="cursor-default text-[clamp(1.7rem,1.5cqw,2.5rem)] font-black text-center text-foreground/15 font-playfair-display">
							MOBILE DEVELOPMENT
						</p>
						<div className="absolute inset-0 inset-y-0 flex justify-center items-center mx-4">
							<p className="font-bold text-left text-foreground font-inria-serif text-[clamp(100px,7cqw,170px)] break-all leading-[1.1] ">
								{t("service-section.disable-1")}
								<br />
								{t("service-section.disable-2")}
							</p>
						</div>
					</div>
				</div>
				<div className="absolute left-20 -bottom-16 w-[228.61px] h-[215px] 2xl:scale-125 3xl:scale-150">
					<div className="relative -z-50 w-[228.61px] h-[215px]">
						<div>
							<svg
								width={229}
								height={215}
								viewBox="0 0 229 215"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[228.61px] h-[215px] drop-shadow-[0px_0px_20px_rgba(0,0,0,0.4)] dark:drop-shadow-[0px_0px_20px_rgba(255,255,255,0.25)] fill-primary"
								preserveAspectRatio="none">
								<path
									d="M220.646 92.505C203.244 109.144 185.843 125.784 168.442 142.423C159.844 150.645 151.246 158.866 142.647 167.089C134.389 174.984 126.298 183.093 117.069 189.835C111.706 193.752 106.583 184.728 111.896 180.847C121.063 174.151 129.04 165.809 137.241 157.967C145.635 149.941 154.028 141.915 162.422 133.889C179.414 117.641 196.406 101.393 213.397 85.1449C218.198 80.5544 225.46 87.9006 220.646 92.505Z"
									fill="#6203B7"
								/>
								<path
									d="M221.071 183.773C180.678 157.078 139.075 132.314 96.4036 109.566C90.561 106.451 95.7359 97.4645 101.576 100.578C144.247 123.327 185.851 148.091 226.244 174.785C231.753 178.425 226.622 187.441 221.071 183.773Z"
									fill="#6203B7"
								/>
								<path
									d="M164.113 73.2102C166.673 118.748 167.475 164.373 166.519 209.975C166.378 216.663 156.129 216.687 156.269 209.975C157.226 164.373 156.424 118.748 153.864 73.2102C153.488 66.5172 163.739 66.5393 164.113 73.2102Z"
									fill="#6203B7"
								/>
							</svg>
						</div>
						<div className="absolute top-0 left-0">
							<svg
								width={106}
								height={101}
								viewBox="0 0 106 101"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="w-[105.46px] h-[100.09px] drop-shadow-[0px_0px_20px_rgba(255,212,0,0.5)] dark:drop-shadow-[0px_0px_20px_rgba(98,3,183,0.5)] fill-foreground"
								preserveAspectRatio="none">
								<path d="M55.5235 3.80027C57.5584 18.9403 59.4242 34.1177 60.0919 49.393C60.7568 64.6207 60.2203 79.8594 59.4561 95.0726C59.1213 101.738 48.8699 101.779 49.2068 95.0726C49.9499 80.2774 50.483 65.4567 49.8942 50.6457C49.3073 35.8822 47.6059 21.1988 45.6402 6.56774C45.2633 3.7617 46.3086 1.01428 49.2197 0.165845C51.6044 -0.530148 55.1499 1.01836 55.5235 3.80027Z" />
								<path d="M95.3066 28.3384C68.8063 44.767 42.8916 62.0227 16.8865 79.2432C11.3454 82.9129 6.20309 73.9049 11.7136 70.256C37.7187 53.0341 63.6327 35.7792 90.1337 19.3506C95.7786 15.8506 100.935 24.8495 95.3066 28.3384Z" />
								<path d="M97.6506 76.0498C65.9788 60.7918 34.307 45.5331 2.63456 30.2751C-3.32148 27.4056 1.87383 18.4287 7.80746 21.2872C39.4792 36.5459 71.151 51.8039 102.823 67.0619C108.78 69.9314 103.585 78.909 97.6506 76.0498Z" />
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceSection;
