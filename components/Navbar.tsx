"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./bahan/LanguageToggle";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false); // <— state hamburger
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "project", href: "#projects" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <nav
      className="w-full sticky top-0 z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-4 lg:py-6">

        {/* Logo */}
        <span className="font-bold text-3xl lg:text-5xl text-white">Giogi</span>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 bg-transparent backdrop-blur-3xl shadow-md shadow-blue-950 text-slate-400 h-16 px-6 rounded-full">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="hover:text-white transition-colors duration-200 font-medium text-sm"
              >
                {mounted ? t(`navbar.${link.key}`) : link.key}
              </Link>
            ))}
          </div>
          <LanguageToggle />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-7 h-1 bg-white rounded transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-50 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="backdrop-blur-xl bg-black/60 px-6 py-4 flex flex-col gap-4 text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-white transition-colors duration-200 font-medium"
            >
              {mounted ? t(`navbar.${link.key}`) : link.key}
            </Link>
          ))}

          <div className="mt-2">
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
