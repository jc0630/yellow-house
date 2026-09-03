import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { CurrencySelector } from "./CurrencySelector";

export function Header() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, localePath } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const getNavClass = (path: string) => {
    const isActive = location === path;
    return isActive
      ? "font-label-caps transition-colors text-white border-b-2 border-[#FFA601] pb-1"
      : "font-label-caps text-white/80 hover:text-white transition-colors pb-1";
  };

  const navLinks = [
    { href: localePath("/"), label: t("nav.home") },
    { href: localePath("/services"), label: t("nav.services") },
    { href: localePath("/company"), label: t("nav.company") },
    { href: localePath("/cases"), label: t("nav.cases") },
    { href: localePath("/news"), label: t("nav.news") },
    { href: localePath("/careers"), label: t("nav.careers") },
    { href: localePath("/contact"), label: t("nav.contact") },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-black/85 backdrop-blur-sm border-b border-white/5"
      }`}
    >
      <div className="h-20 w-full px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        <Link href={localePath("/")} className="flex items-center gap-3 cursor-pointer group">
          <img
            alt="Yellow House"
            className="h-10 sm:h-11 w-auto max-w-[140px] sm:max-w-[180px] object-contain transition-transform group-hover:scale-105"
            src="/yellow_house.png"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={getNavClass(item.href)}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-1 md:gap-2">
          {/* Language + Currency (separate, low visual weight) */}
          <LanguageSwitcher />
          <span className="w-[1px] h-4 bg-white/15 hidden sm:block"></span>
          <CurrencySelector />

          <Link href={localePath("/company")} className="ml-2 p-1 border border-white/20 rounded-full hover:border-[#FFA601] transition-colors hidden sm:block" title="Company Profile">
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=160&h=160&q=85"
            />
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:text-[#FFA601] transition-colors flex items-center justify-center focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-black/95 border-t border-white/10 px-margin-mobile py-6 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2 px-3 rounded-md text-base font-label-caps transition-colors ${
                  location === item.href
                    ? "bg-white/15 text-white font-bold"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/10 flex items-center gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-white/50 text-[11px] font-label-caps uppercase tracking-widest">Language</span>
              <LanguageSwitcher className="-ml-2" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white/50 text-[11px] font-label-caps uppercase tracking-widest">Currency</span>
              <CurrencySelector className="-ml-2" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
