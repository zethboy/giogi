"use client";
import SplitText from "./bahan/SplitText";
import Link from "next/link";
import { useTranslation } from "react-i18next"; // <-- Pastikan ini sudah benar

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function Hero() {
  // Ambil t DAN i18n
  const { t, i18n } = useTranslation(); 
  
  // Variabel yang akan berubah saat bahasa berubah
  const languageKey = i18n.language;

  return (
    <div id="home" className="w-full min-h-full py-15s flex items-center justify-center bg-transparent from-slate-900 via-slate-950 to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center space-y-4">
        {/* Main Headline */}
        <div>
          <SplitText
            // TAMBAHKAN KEY DENGAN NILAI languageKey (i18n.language)
            key={`judul-${languageKey}`} 
            text={t("hero.judul")}
            className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-lg"
            delay={50}
            duration={0.3}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        {/* Subheading */}
        <div>
          <SplitText
            // TAMBAHKAN KEY DENGAN NILAI languageKey
            key={`deskripsi-${languageKey}`} 
            text={t("hero.deskripsi")}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed drop-shadow-md"
            delay={20}
            duration={0.03}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        {/* --- Bagian Lain (tidak perlu diubah, karena Link dan div biasa akan bereaksi terhadap perubahan t() secara otomatis) --- */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <Link
            href="#projects"
            className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {t("hero.b1")}
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
          >
            {t("hero.b2")}
          </Link>
        </div>
        {/* Badge/Stats */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-gray-400 pt-8">
          <div className="flex items-center gap-2">
            <span>{t("hero.skill")}</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <span>{t("hero.skill2")}</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-600"></div>
          <div className="flex items-center gap-2">
            <span>{t("hero.skill3")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}