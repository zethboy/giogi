"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onChange?: (lang: "id" | "en") => void;
};

export default function LanguageToggle({ onChange }: Props) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<"id" | "en">("id");

  // set awal language
  useEffect(() => {
    const stored = localStorage.getItem("lang") as "id" | "en" | null;
    const initial = stored || (i18n.language as "id" | "en") || "id";

    i18n.changeLanguage(initial);
    setLang(initial);
  }, []);

  const changeLang = (l: "id" | "en") => {
    i18n.changeLanguage(l);
    setLang(l);
    localStorage.setItem("lang", l);
    onChange?.(l);
  };

  return (
    <div className="inline-flex items-center rounded-full bg-white/5 p-0.5">
      <button
        onClick={() => changeLang("id")}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-lg transition ${
          lang === "id" ? "bg-white/20 scale-105" : "hover:bg-white/10"
        }`}
      >
        🇮🇩
      </button>

      <button
        onClick={() => changeLang("en")}
        className={`w-8 h-8 flex items-center justify-center rounded-full text-lg transition ${
          lang === "en" ? "bg-white/20 scale-105" : "hover:bg-white/10"
        }`}
      >
        🇺🇸
      </button>
    </div>
  );
}
