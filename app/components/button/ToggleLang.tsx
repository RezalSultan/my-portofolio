"use client"; // Menandakan ini adalah komponen sisi-klien

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const languagePrefix = pathname.split("/")[1];

  const handleLanguageChange = (locale: string) => {
    if (languagePrefix === locale) {
      return;
    }
    const updatedPathname = pathname.replace(
      `/${languagePrefix}`,
      `/${locale}`
    );

    router.push(updatedPathname);
  };

  return (
    <button
      onClick={() =>
        handleLanguageChange(languagePrefix === "en" ? "id" : "en")
      }
      className="w-8 h-8 relative"
    >
      <div className="w-8 h-8 transition-all duration-300 ease-in-out">
        {/* Menampilkan gambar berdasarkan locale */}
        <Image
          src={languagePrefix === "en" ? "/english.svg" : "/indonesia.svg"} // Gambar tergantung bahasa
          alt="Language Toggle"
          fill
          className="object-contain rounded-2xl border-2 border-solid dark:border-white border-black w-8 h-8 transition-all duration-300 ease-in-out"
        />
      </div>
    </button>
  );
};

export default LanguageToggle;
