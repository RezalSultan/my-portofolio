import { getTranslations } from "next-intl/server";
import Image from "next/image";
import HeroSection from "../components/section/HeroSection";

export default async function Home() {
  const t = await getTranslations("navbar");
  return (
    <main className="w-full mt-20 ">
      <HeroSection />
    </main>
  );
}
