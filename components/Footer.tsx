"use client";

import React from "react";
import { useTranslation } from "react-i18next";



const GitHubIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
		<path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.563 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
	</svg>
);

const LinkedinIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
		<path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5zM8 19H5V9h3v10zm-1.5-11.268A1.75 1.75 0 015.75 6.0 1.75 1.75 0 017.5 4.25 1.75 1.75 0 019.25 6 1.75 1.75 0 016.5 7.732zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V9h3v1.765C16.396 8.179 20 7.988 20 12.464V19z" />
	</svg>
);

const InstagramIcon = () => (
	<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
		<path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.054 1.805.244 2.227.408.562.217.961.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.645.07 4.849s-.009 3.584-.07 4.849c-.054 1.17-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.645.07-4.849.07s-3.584-.009-4.849-.07c-1.17-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.227C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.849c.054-1.17.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.227-.408C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.174 0-3.548.012-4.797.069-1.046.05-1.614.226-1.99.377-.511.195-.876.43-1.262.816-.386.386-.621.751-.816 1.262-.151.376-.327.944-.377 1.99-.057 1.249-.069 1.623-.069 4.797s.012 3.548.069 4.797c.05 1.046.226 1.614.377 1.99.195.511.43.876.816 1.262.386.386.751.621 1.262.816.376.151.944.327 1.99.377 1.249.057 1.623.069 4.797.069s3.548-.012 4.797-.069c1.046-.05 1.614-.226 1.99-.377.511-.195.876-.43 1.262-.816.386-.386.621-.751.816-1.262.151-.376.327-.944.377-1.99.057-1.249.069-1.623.069-4.797s-.012-3.548-.069-4.797c-.05-1.046-.226-1.614-.377-1.99-.195-.511-.43-.876-.816-1.262-.386-.386-.751-.621-1.262-.816-.376-.151-.944-.327-1.99-.377-1.249-.057-1.623-.069-4.797-.069zM12 7.838A4.162 4.162 0 1012 16.162 4.162 4.162 0 0012 7.838zm0 6.838A2.676 2.676 0 1112 9.999 2.676 2.676 0 0112 14.676zM18.406 6.594a1.0 1.0 0 11-2.0 0 1 1 0 012.0 0z" />
	</svg>
);

export default function Footer() {
const { t } = useTranslation();

	return (
		<footer className="w-full border-t border-[#392e4e] mt-2 mb-2">
			<div className="max-w-6xl mx-auto px-4 py-8 lg:py-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
					{/* Left column: name and short info */}
					<div className=" p-6">
						<h3 className="text-xl font-bold text-white">Giogi</h3>
						<p className="text-sm text-gray-300 mt-2">Yogi Nugraha — Data Scientist & Web Developer</p>
						<div className="flex items-center gap-3 mt-4">
							<a href="https://github.com/zethboy" target="_blank" rel="noopener noreferrer" className="theme-icon p-2 text-gray-300 hover:text-white">
								<GitHubIcon />
							</a>
							<a href="https://www.linkedin.com/in/yogi-nugraha-07860031b/" target="_blank" rel="noopener noreferrer" className="theme-icon p-2 text-gray-300 hover:text-white">
								<LinkedinIcon />
							</a>
							<a href="https://www.instagram.com/yyooogii/" target="_blank" rel="noopener noreferrer" className="theme-icon p-2 text-gray-300 hover:text-white">
								<InstagramIcon />
							</a>
						</div>
					</div>

					{/* Right column: navigation links */}
					<div className="p-6">
						
						<nav className="mt-4 grid grid-cols-4 gap-4">
							<a href="#home" className="text-gray-300 hover:text-white">{t("navbar.home")}</a>
							<a href="#projects" className="text-gray-300 hover:text-white">{t("navbar.project")}</a>
							<a href="#about" className="text-gray-300 hover:text-white">{t("navbar.about")}</a>
							<a href="#contact" className="text-gray-300 hover:text-white">{t("navbar.contact")}</a>
						</nav>
					</div>
				</div>

				<div className="text-center text-xs text-gray-500 mt-6" suppressHydrationWarning>
					© {new Date().getFullYear()} {t("footer.teks")}
					 <div>
    </div>
				</div>
			</div>
		</footer>
	);
}

