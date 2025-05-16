import HeroSection from "./_page-components/HeroSection";
import IntroductionSection from "./_page-components/IntroductionSection";
import ServiceSection from "./_page-components/ServiceSection";
import PortfolioSection from "./_page-components/PortfolioSection";
import AboutMeSection from "./_page-components/AboutMeSection";
import SkillSection from "./_page-components/SkillSection";
import CertificateSection from "./_page-components/CertificateSection";
import NewBlogSection from "./_page-components/NewBlogSection";
import CallToAction from "@/components/nav/CallToAction";

export default async function Home({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	return (
		<>
			<main className="mt-20 w-full">
				<HeroSection />
				<IntroductionSection />
				<ServiceSection />
				<PortfolioSection />
				<AboutMeSection />
				<SkillSection />
				<CertificateSection />
				<NewBlogSection paramsLocale={locale} />
				<CallToAction />
			</main>
		</>
	);
}
