"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// SVG Icons
const MailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.058.3.102.605.102.913 0 1.11.889 2 1.99 2h1.064c1.236 0 2.429.888 2.922 2.022.493 1.133.72 2.427.72 3.978 0 1.55-.227 2.845-.72 3.978-.493 1.134-1.686 2.022-2.922 2.022H9.064c-1.236 0-2.429-.888-2.922-2.022C5.15 18.845 4.922 17.55 4.922 16c0-1.55.227-2.845.72-3.978.493-1.134 1.686-2.022 2.922-2.022h1.064c1.1 0 1.99-.89 1.99-2 0-.308-.044-.613-.102-.913l-1.548-.773a1 1 0 01-.54-1.06l.74-4.435a1 1 0 01.986-.836h2.153a1 1 0 011 1v14a2 2 0 01-2 2H4a2 2 0 01-2-2V3z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.951-2.976 5.951 2.976a1 1 0 001.169-1.409l-7-14z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.798.272-1.148.6-1.65 1.102-.552.552-.83.853-1.102 1.65-.267.788-.468 1.657-.528 2.935C.016 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.935.272.798.6 1.148 1.102 1.65.552.552.853.83 1.65 1.102.788.267 1.657.468 2.935.528C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.935-.528.798-.272 1.148-.6 1.65-1.102.552-.552.83-.853 1.102-1.65.267-.788.468-1.657.528-2.935.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.528-2.935-.272-.798-.6-1.148-1.102-1.65-.552-.552-.853-.83-1.65-1.102-.788-.267-1.657-.468-2.935-.528C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.645.07 4.849 0 3.205-.009 3.584-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.645.07-4.849.07-3.206 0-3.584-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.645-.07-4.849 0-3.204.009-3.584.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.645-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
  </svg>
);

export default function Contact() {

  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✓ Pesan terkirim! Terima kasih telah menghubungi saya.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus(t("kontak.emaileror"));
      }
    } catch (error) {
      setStatus(t("kontak.emailsucces"));
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MailIcon,
      label: "Email",
      value: "giogialcantara@gmail.com",
      href: "mailto:giogialcantara@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: t("kontak.phone"),
      value: "+62 85921343713",
      href: "https://wa.me/6285921343713",
    },
    {
      icon: MapPinIcon,
      label: t("kontak.location"),
      value: "Indonesia",
      href: "https://maps.app.goo.gl/T2b8ZUCySQMMVCqu9",
    },
  ];

  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      href: "https://github.com/zethboy",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yogi-nugraha-07860031b/",
    },
    {
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/yyooogii/",
    },
  ];

  return (
    <section id="contact" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 md:mb-4">
            {t("kontak.judul")}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-base lg:text-lg">
            {t("kontak.deskripsi")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {/* Contact Info Cards */}
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <a
                key={i}
                href={info.href}
                className="p-6 bg-[#060010] border border-[#392e4e] rounded-lg hover:border-[#840aff] hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                    <p className="text-white font-semibold text-sm sm:text-base">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[#060010] border border-[#392e4e] rounded-lg p-4 md:p-6 lg:p-8 backdrop-blur-sm hover:border-[#840aff]/50 transition-colors duration-300">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6">{t("kontak.f1")}</h3>
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  {t("kontak.f2")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0a0015] border border-[#392e4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#840aff] focus:ring-1 focus:ring-[#840aff] transition-colors text-sm md:text-base"
                  placeholder={t("kontak.fi1")}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  {t("kontak.f3")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0a0015] border border-[#392e4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#840aff] focus:ring-1 focus:ring-[#840aff] transition-colors text-sm md:text-base"
                  placeholder={t("kontak.fi2")}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  {t("kontak.f4")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0a0015] border border-[#392e4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#840aff] focus:ring-1 focus:ring-[#840aff] transition-colors text-sm md:text-base"
                  placeholder={t("kontak.fi3")}
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  {t("kontak.f5")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2 md:py-3 bg-[#0a0015] border border-[#392e4e] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-[#840aff] focus:ring-1 focus:ring-[#840aff] transition-colors resize-none text-sm md:text-base"
                  placeholder={t("kontak.fi4")}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-[#840aff] to-purple-600 hover:shadow-lg hover:shadow-purple-500/50 text-white font-semibold py-2 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {loading ? "Mengirim..." : <>
                  <SendIcon />
                  {t("kontak.f1")}
                </>}
              </button>

              {status && (
                <p className={`text-center text-xs md:text-sm mt-3 md:mt-4 ${status.includes("✓") ? "text-green-400" : "text-red-400"}`}>
                  {status}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Additional Info */}
          <div className="space-y-4 md:space-y-6 lg:space-y-8">
            {/* Quick Response */}
            <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-[#392e4e] rounded-lg p-4 md:p-6 backdrop-blur-sm">
              <h4 className="text-base md:text-lg lg:text-xl font-bold text-white mb-2 md:mb-3">{t("kontak.i1")}</h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                {t("kontak.i2")}
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4">{t("kontak.i3")}</h4>
              <div className="flex gap-2 md:gap-4">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 md:p-3 bg-[#060010] border border-[#392e4e] rounded-lg hover:border-[#840aff] hover:bg-purple-500/10 transition-all duration-300 group text-gray-400 hover:text-[#840aff]"
                      title={social.label}
                    >
                      <social.icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-[#060010] border border-[#392e4e] rounded-lg p-4 md:p-6">
              <div className="flex items-center gap-3 mb-2 md:mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <h4 className="text-base md:text-lg font-bold text-white">{t("kontak.i4")}</h4>
              </div>
              <p className="text-gray-300 text-xs md:text-sm">
                {t("kontak.i5")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
