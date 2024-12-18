import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("navbar");
  return (
    <div className="w-full mt-20 ">
      <p className="dark:text-white text-black">test</p>
    </div>
  );
}
