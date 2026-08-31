import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";
import { NEWS_DATA } from "../data/newsData";

export function News() {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  useEffect(() => {
    document.title = lang === "zh" ? "Yellow House - 最新消息" : "Yellow House - News & Market Insights";
  }, [lang]);

  const categories = [
    { key: "ALL", labelZh: "全部消息", labelEn: "All Updates" },
    { key: "MARKET", labelZh: "市場動態", labelEn: "Market Insights" },
    { key: "GUIDE", labelZh: "實務指南", labelEn: "Practical Guide" },
    { key: "MGMT", labelZh: "管理實務", labelEn: "Asset Management" },
    { key: "REG", labelZh: "法規政策", labelEn: "Regulations" },
  ];

  const filteredNews = NEWS_DATA.filter((item) => {
    if (selectedCategory === "ALL") return true;
    if (selectedCategory === "MARKET") return item.categoryEn === "Market Insights";
    if (selectedCategory === "GUIDE") return item.categoryEn === "Practical Guide";
    if (selectedCategory === "MGMT") return item.categoryEn === "Asset Management";
    if (selectedCategory === "REG") return item.categoryEn === "Regulations";
    return true;
  });

  return (
    <div className="flex flex-col w-full bg-background relative font-body-md text-on-surface">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
            {t("news.banner.tag")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            {t("news.banner.h1")}
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
            {t("news.banner.desc")}
          </p>
        </div>
      </section>

      {/* ARTICLE LIST & CATEGORIES */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 relative z-10 bg-surface">
        {/* Category Sidebar on Desktop */}
        <div className="md:col-span-3 flex flex-col gap-6 sticky top-28 self-start">
          <div className="border-b border-[#FFA601] pb-4">
            <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest block mb-1">
              CATEGORY
            </span>
            <h3 className="font-headline-md text-xl text-primary font-medium">
              {t("news.category.title")}
            </h3>
          </div>

          <div className="flex flex-wrap md:flex-col gap-2">
            {categories.map((cat) => {
              const label = lang === "zh" ? cat.labelZh : cat.labelEn;
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-3 text-xs font-label-caps tracking-wider text-left uppercase transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? "bg-primary text-white font-medium"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary border border-outline-variant/60"
                  }`}
                >
                  <span>{label}</span>
                  {isActive && <span className="material-symbols-outlined text-xs text-[#FFA601]">arrow_forward</span>}
                </button>
              );
            })}
          </div>
        </div>

        {/* News Article List */}
        <div className="md:col-span-9 flex flex-col gap-0 border-t border-outline-variant">
          <motion.div
            key={selectedCategory}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col"
          >
            {filteredNews.map((item) => {
              const title = lang === "zh" ? item.titleZh : item.titleEn;
              const excerpt = lang === "zh" ? item.excerptZh : item.excerptEn;
              const category = lang === "zh" ? item.categoryZh : item.categoryEn;
              const readTime = lang === "zh" ? item.readTimeZh : item.readTimeEn;

              return (
                <motion.article
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="border-b border-outline-variant py-10 group"
                >
                  <Link
                    href={`/news/${item.slug}`}
                    className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-pointer"
                  >
                    {/* Thumbnail */}
                    <div className="md:col-span-4 h-52 md:h-60 relative overflow-hidden bg-black/10 border border-outline-variant">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={item.image}
                        alt={title}
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-primary/90 text-white font-label-caps text-[11px] uppercase tracking-wider">
                          {category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-8 flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-3 text-xs text-on-surface-variant font-label-caps">
                        <span>{item.date}</span>
                        <span className="w-1 h-1 bg-[#FFA601] rounded-full"></span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-xs text-[#FFA601]">schedule</span>
                          {readTime}
                        </span>
                      </div>

                      <h3 className="font-headline-md text-xl md:text-2xl text-primary font-medium leading-snug group-hover:text-[#FFA601] transition-colors">
                        {title}
                      </h3>

                      <p className="font-body-md text-sm md:text-base text-on-surface-variant line-clamp-2 leading-relaxed">
                        {excerpt}
                      </p>

                      <div className="inline-flex items-center gap-2 font-label-caps text-xs text-primary mt-2 uppercase tracking-wider group-hover:text-[#FFA601] transition-colors self-start font-medium">
                        <span>{t("news.read_more")}</span>
                        <span className="material-symbols-outlined text-xs transform group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="w-full bg-[#FFA601] py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-headline-lg text-primary text-2xl md:text-3xl font-medium">
          {t("cta.title")}
        </h2>
        <Link
          href="/contact"
          className="px-8 py-4 bg-primary text-white font-label-caps text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <span>{t("cta.button")}</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
}
