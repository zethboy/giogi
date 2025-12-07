"use client";

import React from "react";
import CardSwap, { Card } from "./bahan/CardSwap";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: 'portfolio',
    image: '/image/agency.png',
    href: 'https://gio-agency.vercel.app/'
  },
  {
    id: 'ecommerce',
    image: '/image/kelas.png',
    href: 'https://web-kursus.vercel.app/'
  },
  {
    id: 'dashboard',
    image: '/image/neuro.png',
    href: 'https://neuroluka.vercel.app/'
  },
  {
    id: 'chat',
    image: '/image/diabet.png',
    href: 'https://zethboy-diabetes-risk-detection-app-h9evba.streamlit.app/'
  }
];

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section id="projects" className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile heading */}
        <div className="sm:hidden mb-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">{t("projects.judul")}</h2>
          <p className="text-sm text-gray-400 px-3">{t("projects.deskripsi")}</p>
        </div>
        
        <div  className="relative lg:h-120 h-86 ">
          {/* Desktop Left-side heading */}
          <div className="absolute top-1/2 -translate-y-1/2 hidden sm:block" aria-hidden>
            <p className="text-3xl md:text-4xl lg:text-4xl font-bold text-white">{t("projects.judul")}</p>
            <p className="text-sm md:text-base text-gray-400 max-w-xs mt-2">{t("projects.deskripsi")}</p>
          </div>

          <CardSwap cardDistance={60} verticalDistance={70} delay={4000} pauseOnHover={false}>
            {PROJECTS.map((p, i) => (
              <Card key={p.id}>
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <div
                    className="p-6 flex flex-col h-full"
                    style={{
                      position: 'relative',
                      backgroundImage: `url('${p.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-purple-500/10" />
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      
                    </div>
                  </div>
                </a>
              </Card>
            ))}
          </CardSwap>
        </div>
      </div>
    </section>
  );
}
