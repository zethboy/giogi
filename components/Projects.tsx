"use client";

import React from "react";
import CardSwap, { Card } from "./bahan/CardSwap";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: 'Game',
    name: 'Burjaw',
    image: '/image/burjaw.png',
    href: 'https://burjaw.vercel.app/'
  },
  {
    id: 'portfolio',
    name: 'Portfolio Agency',
    image: '/image/agency.png',
    href: 'https://gio-agency.vercel.app/'
  },
  {
    id: 'ecommerce',
    name: 'Web Kursus',
    image: '/image/kelas.png',
    href: 'https://web-kursus.vercel.app/'
  },
  {
    id: 'Dashboard',
    name: 'Dashboard Neuro',
    image: '/image/neuro.png',
    href: 'https://neuroluka.vercel.app/'
  },
  {
    id: 'Machine Learning',
    name: 'App Deteksi Diabetes',
    image: '/image/diabet.png',
    href: 'https://zethboy-diabetes-risk-detection-app-h9evba.streamlit.app/'
  }
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-10 md:py-14 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(260px,360px)_minmax(0,1fr)] items-start">
          <div className="space-y-4 lg:pt-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{t("projects.judul")}</h2>
            <p className="text-sm md:text-base text-gray-400 max-w-xl leading-relaxed">{t("projects.deskripsi")}</p>
          </div>

          <div className="w-full">
            <div className="hidden sm:block w-full min-h-[28rem] md:min-h-[36rem] rounded-[28px] border border-white/10 bg-[#060010]/55 backdrop-blur-xl p-4 md:p-6">
              <CardSwap delay={4200} pauseOnHover={true} width="100%" height="100%">
                {PROJECTS.map((p) => (
                  <Card key={p.id} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40">
                    <a href={p.href} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <div
                        className="relative h-full"
                        style={{
                          backgroundImage: `url('${p.image}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                          <p className="text-sm uppercase tracking-[0.2em] text-purple-300">{p.id}</p>
                          <h3 className="text-lg font-semibold mt-1">{p.name}</h3>
                        </div>
                      </div>
                    </a>
                  </Card>
                ))}
              </CardSwap>
            </div>

            <div className="sm:hidden grid gap-4">
              {PROJECTS.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-[26px] border border-white/10 bg-[#060010]/95 transition hover:border-purple-500/40 hover:bg-[#100021]"
                >
                  <div
                    className="aspect-[4/3] bg-cover bg-center"
                    style={{ backgroundImage: `url('${p.image}')` }}
                  />
                  <div className="p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-purple-300">{p.id}</p>
                    <h3 className="mt-2 text-lg font-semibold text-white">{p.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
