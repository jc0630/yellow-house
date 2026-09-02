import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { NEWS_DATA } from "../data/newsData";
import { ArrowChip } from "../components/ArrowChip";

export function NewsDetail() {
  const [, params] = useRoute<{ slug: string }>("/news/:slug");
  const { lang, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const slug = params?.slug;
  const item = NEWS_DATA.find((n) => n.slug === slug) || NEWS_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const title = lang === "zh" ? item.titleZh : item.titleEn;
    document.title = `${title} | Yellow House`;
  }, [slug, lang, item]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = lang === "zh" ? item.titleZh : item.titleEn;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // user cancelled or fallback
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (e) {
      // fallback
    }
  };

  const title = lang === "zh" ? item.titleZh : item.titleEn;
  const category = lang === "zh" ? item.categoryZh : item.categoryEn;
  const readTime = lang === "zh" ? item.readTimeZh : item.readTimeEn;
  const content = lang === "zh" ? item.contentZh : item.contentEn;

  return (
    <div className="flex flex-col w-full relative">
      {/* UNIFIED BANNER WITH HERO IMAGE */}
      <section className="w-full relative min-h-[420px] md:min-h-[500px] flex items-center pt-32 md:pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${item.image}')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60 md:bg-gradient-to-r md:from-black/90 md:via-black/75 md:to-black/60"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-9 flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 bg-[#FFA601] text-primary font-label-caps text-xs font-semibold uppercase tracking-wider">
                {category}
              </span>
              <span className="font-label-caps text-xs text-white/80 tracking-wider">
                {item.date}
              </span>
              <span className="text-white/40">/</span>
              <span className="font-label-caps text-xs text-white/90 tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-[#FFA601]">schedule</span>
                {readTime}
              </span>
            </div>
            <h1 className="font-display-lg-mobile md:font-headline-lg text-display-lg-mobile md:text-display-md text-white tracking-tight leading-tight">
              {title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Top Back */}
          <div className="mb-10 pb-6 border-b border-outline-variant flex items-center justify-between">
            <Link
              href="/news"
              className="font-label-caps text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider group"
            >
              <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
              {lang === "zh" ? "返回最新消息" : "Back to News"}
            </Link>

            <button
              onClick={handleShare}
              className="px-4 py-2 border border-outline-variant hover:border-[#FFA601] bg-surface-container-lowest font-label-caps text-xs text-primary flex items-center gap-2 uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#FFA601]">share</span>
              <span>{copied ? (lang === "zh" ? "已複製連結！" : "Link Copied!") : (lang === "zh" ? "分享文章" : "Share")}</span>
            </button>
          </div>

          {/* Main Content */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-10"
          >
            {/* Lead Paragraph */}
            <p className="font-body-lg text-primary text-lg md:text-xl leading-relaxed border-l-4 border-[#FFA601] pl-6 py-2 bg-surface-container-low/50">
              {content.lead}
            </p>

            {/* Featured Photo in Article */}
            <div className="w-full aspect-[16/9] overflow-hidden shadow-lg border border-outline-variant my-4">
              <img
                src={item.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Sections */}
            <div className="flex flex-col gap-10">
              {content.sections.map((sec, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <h2 className="font-headline-md text-2xl text-primary font-medium">
                    {sec.heading}
                  </h2>
                  <p className="font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
                    {sec.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Summary Box */}
            <div className="p-8 bg-surface-container-low border border-outline-variant mt-4">
              <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest block mb-2">
                {lang === "zh" ? "總結觀點" : "EXECUTIVE SUMMARY"}
              </span>
              <p className="font-body-md text-primary text-base md:text-lg leading-relaxed font-medium">
                {content.summary}
              </p>
            </div>

            {/* Bottom Actions: Share + Back */}
            <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/news"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white hover:bg-primary/90 font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>{lang === "zh" ? "返回最新消息" : "Back to All News"}</span>
              </Link>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">share</span>
                <span>{copied ? (lang === "zh" ? "已複製連結！" : "Link Copied!") : (lang === "zh" ? "分享此文章" : "Share Article")}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="w-full bg-[#FFA601] py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-headline-lg text-primary text-2xl md:text-3xl font-medium">
          {t("cta.title")}
        </h2>
        <Link
          href="/contact"
          className="group px-8 py-4 bg-primary text-white font-label-caps text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-3"
        >
          <span>{t("cta.button")}</span>
          <ArrowChip className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
