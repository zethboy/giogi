
import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Aurora from "@/components/bahan/Aurora";
import Hero from "@/components/Hero";
import Highlight from "@/components/Higlights";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import "../i18n";
import I18nProvider from "@/i18n/providers";

  

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${figtree.variable}min-h-screen relative antialiased`}>
        <I18nProvider>
         <Aurora
               colorStops={[ "#480487","#010170", "#480487"]}
               blend={0.5}
               amplitude={1.0}
               speed={1.0}
              
             />
       
        <div className="relative z-10">
          <Navbar /> 
          <Hero />
          <Highlight />
          <Projects />
          <Contact />
          <Footer />
          {children}
        </div>
        </I18nProvider>
      </body>
    </html>
  );
}
