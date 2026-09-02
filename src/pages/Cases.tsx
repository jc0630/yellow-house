import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";
import { CASES_DATA } from "../data/casesData";
import { ArrowChip } from "../components/ArrowChip";
import { CurrencySelector } from "../components/CurrencySelector";
import { PriceBlock } from "../components/PriceBlock";

export function Cases() {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

  useEffect(() => {
    document.title = lang === "zh" ? "Yellow House - 實績案例" : "Yellow House - Case Studies";
  }, [lang]);

  // Categories list
  const categories = [
    { key: "ALL", labelZh: "全部案例", labelEn: "All Cases" },
    { key: "RESIDENTIAL", labelZh: "住宅不動產", labelEn: "Residential" },
    { key: "COMMERCIAL", labelZh: "商業與收益型", labelEn: "Commercial" },
    { key: "DEVELOPMENT", labelZh: "土地開發與自建", labelEn: "Development" },
    { key: "RENOVATION", labelZh: "收購再販與翻新", labelEn: "Renovation & Resale" },
    { key: "HOSPITALITY", labelZh: "住宿設施營運", labelEn: "Hospitality" },
  ];

  // Category change handler (resets page)
  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setCurrentPage(1);
  };

  // Filtered cases
  const filteredCases = CASES_DATA.filter((item) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "RESIDENTIAL") return item.categoryEn === "Residential";
    if (activeCategory === "COMMERCIAL") return item.categoryEn === "Commercial";
    if (activeCategory === "DEVELOPMENT") return item.categoryEn === "Development";
    if (activeCategory === "RENOVATION") return item.categoryEn === "Renovation & Resale";
    if (activeCategory === "HOSPITALITY") return item.categoryEn === "Hospitality";
    return true;
  });

  // Calculate dynamic total pages
  const totalPages = Math.ceil(filteredCases.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCases = filteredCases.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    const gridEl = document.getElementById("cases-grid");
    if (gridEl) {
      gridEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex flex-col w-full font-body-md text-on-surface bg-background">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
            {t("cases.banner.tag")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            {t("cases.banner.h1")}
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
            {t("cases.banner.desc")}
          </p>
        </div>
      </section>

      {/* FEATURED CASE — asymmetric image + brand-dark text panel */}
      <section className="w-full bg-primary text-white overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          <div className="md:col-span-7 h-[280px] md:h-[520px] relative overflow-hidden group order-1">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${CASES_DATA[0].image}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/40 md:hidden"></div>
          </div>
          <div className="md:col-span-5 flex flex-col justify-center gap-5 p-8 md:p-14 order-2">
            <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
              {lang === "zh" ? "焦點案例" : "FEATURED CASE"}
            </span>
            <h2 className="font-headline-lg text-white leading-tight">
              {lang === "zh" ? CASES_DATA[0].titleZh : CASES_DATA[0].titleEn}
            </h2>
            <p className="font-body-md text-white/75 leading-relaxed">
              {lang === "zh" ? CASES_DATA[0].descZh : CASES_DATA[0].descEn}
            </p>
            <Link
              href={`/cases/${CASES_DATA[0].slug}`}
              className="group mt-2 self-start rounded-lg border border-white/40 px-6 py-3 font-label-caps text-xs uppercase tracking-wider text-white hover:bg-white hover:text-primary transition-colors flex items-center gap-3"
            >
              {lang === "zh" ? "查看專案詳情" : "VIEW CASE DETAILS"}
              <ArrowChip className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS & CASES GRID */}
      <section id="cases-grid" className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface scroll-mt-20">
        <div className="flex flex-col gap-12">
          {/* CATEGORY BUTTONS + CURRENCY SELECTOR */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-wrap gap-2 md:gap-3 items-center justify-center md:justify-start">
              {categories.map((cat) => {
                const label = lang === "zh" ? cat.labelZh : cat.labelEn;
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => handleCategoryChange(cat.key)}
                    className={`rounded-md px-4 py-2 text-xs font-label-caps tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary border border-outline-variant"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3">
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-widest">
                {t("currency.label")}
              </span>
              <CurrencySelector />
            </div>
          </div>

          {/* CASES 3-COLUMN GRID */}
          <motion.div 
            key={`${activeCategory}-${currentPage}`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentCases.map((item) => {
              const title = lang === "zh" ? item.titleZh : item.titleEn;
              const desc = lang === "zh" ? item.descZh : item.descEn;
              const category = lang === "zh" ? item.categoryZh : item.categoryEn;
              const location = lang === "zh" ? item.locationZh : item.locationEn;

              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <Link
                    href={`/cases/${item.slug}`}
                    className="rounded-xl flex flex-col h-full bg-surface-container-lowest border border-outline-variant hover:border-[#FFA601] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group overflow-hidden"
                  >
                    {/* Featured Image */}
                    <div className="relative h-64 overflow-hidden bg-black/10">
                      <img
                        src={item.image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="rounded-full px-3 py-1 bg-primary/90 backdrop-blur-sm text-white font-label-caps text-xs uppercase tracking-wider">
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-6">
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center justify-between text-xs text-on-surface-variant font-label-caps">
                          <span className="flex items-center gap-1">
                            <span className="material-symbols-outlined text-xs text-[#FFA601]">location_on</span>
                            {location}
                          </span>
                          <span>{item.date}</span>
                        </div>
                        <h3 className="font-headline-md text-xl text-primary font-medium group-hover:text-[#FFA601] transition-colors leading-snug line-clamp-2">
                          {title}
                        </h3>
                        <p className="font-body-md text-sm text-on-surface-variant line-clamp-3 leading-relaxed">
                          {desc}
                        </p>
                        {item.priceJPY != null && <PriceBlock priceJPY={item.priceJPY} variant="compact" className="pt-1" />}
                      </div>

                      {/* Read More link */}
                      <div className="pt-4 border-t border-outline-variant flex items-center justify-between text-xs font-label-caps text-primary group-hover:text-[#FFA601] uppercase tracking-wider">
                        <span>{lang === "zh" ? "查看專案詳情" : "VIEW CASE DETAILS"}</span>
                        <ArrowChip className="w-6 h-6" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* DYNAMIC PAGINATION */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-8 border-t border-outline-variant">
              {/* Prev button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`rounded-md px-4 py-2 border font-label-caps text-xs tracking-wider uppercase flex items-center gap-1 transition-colors ${
                  currentPage === 1
                    ? "border-outline-variant text-on-surface-variant/40 cursor-not-allowed"
                    : "border-outline-variant text-primary hover:border-[#FFA601] hover:text-[#FFA601] cursor-pointer"
                }`}
              >
                <span className="material-symbols-outlined text-sm">chevron_left</span>
                <span>{lang === "zh" ? "上一頁" : "Previous"}</span>
              </button>

              {/* Page numbers */}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`rounded-md w-10 h-10 border font-numeral-display text-sm font-medium transition-colors cursor-pointer ${
                    currentPage === pageNum
                      ? "bg-[#FFA601] border-[#FFA601] text-primary"
                      : "border-outline-variant bg-surface text-primary hover:border-primary"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              {/* Next button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`rounded-md px-4 py-2 border font-label-caps text-xs tracking-wider uppercase flex items-center gap-1 transition-colors ${
                  currentPage === totalPages
                    ? "border-outline-variant text-on-surface-variant/40 cursor-not-allowed"
                    : "border-outline-variant text-primary hover:border-[#FFA601] hover:text-[#FFA601] cursor-pointer"
                }`}
              >
                <span>{lang === "zh" ? "下一頁" : "Next"}</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="w-full bg-[#FFA601] py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-headline-lg text-primary text-2xl md:text-3xl font-medium">
          {t("cases.cta.title")}
        </h2>
        <Link
          href="/contact"
          className="rounded-lg group px-8 py-4 bg-primary text-white font-label-caps text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-3"
        >
          <span>{t("cases.cta.btn")}</span>
          <ArrowChip className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
