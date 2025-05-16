import CircularGallery from "@/components/animation/CircularGallery";
import FlowingMenu from "@/components/animation/FlowingMenu";
import { getTranslations } from "next-intl/server";
import React from "react";

const CertificateSection = async () => {
	const t = await getTranslations();

	const actionItems = [
		{
			link: "#",
			text: `${t("button.explore-gallery")}`,
			image: "https://picsum.photos/600/400?random=1",
		},
	];

	return (
		<section className="relative pt-10 w-full h-full">
			<div></div>
			<div className="h-[500px] relative">
				<CircularGallery bend={3} borderRadius={0} />
			</div>
			<p className="text-center text-[clamp(5rem,5cqw,10rem)] font-bold font-inria-serif mb-10 -mt-20">
				{t("certificate-section.title")}
			</p>
			<div className="relative h-[117px]">
				<FlowingMenu items={actionItems} />
			</div>
		</section>
	);
};

export default CertificateSection;
