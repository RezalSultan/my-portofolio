import Image from "next/image";
import Navbar from "../../../components/nav/Navbar";
import HeroSection from "./_page-components/HeroSection";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="mt-20 w-full">
				<HeroSection />
				{/* <ServiceSection /> */}
			</main>
		</>
	);
}
