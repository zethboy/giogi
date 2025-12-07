"use client";
import MagicBento from './bahan/MagicBento';
import ProfileCard from './bahan/ProfileCard';
import CountUp from './bahan/CountUp';
import { useTranslation } from "react-i18next";

export default function Highlights() {

  const { t } = useTranslation();

  return (
    <section id='about' className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-18 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center px-10 mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            {t("highlights.judul")}
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            {t("highlights.deskripsi")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center w-full">
          {/* Left: Profile Card */}
          <div className="flex pl-8 md:justify-center w-full">
            <div className="w-full max-w-xs md:max-w-sm">
              <ProfileCard
                name="Yogi Nugraha"
                title="Data Scientist & Web Developer"
                handle="yyooogii"
                status="Online"
                contactText={t("highlights.kontak")}
                avatarUrl="/public/image/avatar.jpg"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log('Contact clicked')}
              />
            </div>
          </div>

          {/* Right: Magic Bento */}
          <div className="flex justify-center w-full">
            <div className="w-full">
              <MagicBento 
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
              />
            </div>
          </div>
        </div>

        {/* Stats/Skills Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 md:mt-24">
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              <CountUp
                from={0}
                to={2}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+
            </div>
            <div className="text-xs md:text-sm text-gray-400">{t("highlights.p1")}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              <CountUp
                from={0}
                to={34}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+
            </div>
            <div className="text-xs md:text-sm text-gray-400">{t("highlights.p2")}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              <CountUp
                from={0}
                to={20}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />+
            </div>
            <div className="text-xs md:text-sm text-gray-400">{t("highlights.p3")}</div>
          </div>
          <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition">
            <div className="text-2xl md:text-3xl font-bold text-white mb-1">
              <CountUp
                from={0}
                to={17}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text"
              />/7
            </div>
            <div className="text-xs md:text-sm text-gray-400">{t("highlights.p4")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}