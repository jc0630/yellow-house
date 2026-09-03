import { useState, useEffect } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { CASES_DATA } from "../data/casesData";
import { ArrowChip } from "../components/ArrowChip";
import { PriceBlock } from "../components/PriceBlock";
import { pickLang } from "../lib/utils";

export function CaseDetail() {
  const [, params] = useRoute<{ slug: string }>("/:locale/cases/:slug");
  const { lang, t, localePath } = useLanguage();
  const [copied, setCopied] = useState(false);

  const slug = params?.slug;
  const item = CASES_DATA.find((c) => c.slug === slug) || CASES_DATA[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const title = pickLang(lang, item.titleZh, item.titleEn, item.titleJp);
    document.title = `${title} | Yellow House`;
  }, [slug, lang, item]);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareTitle = pickLang(lang, item.titleZh, item.titleEn, item.titleJp);

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

  const title = pickLang(lang, item.titleZh, item.titleEn, item.titleJp);
  const category = pickLang(lang, item.categoryZh, item.categoryEn, item.categoryJp);
  const location = pickLang(lang, item.locationZh, item.locationEn, item.locationJp);
  const details = pickLang(lang, item.detailsZh, item.detailsEn, item.detailsJp);

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
              <span className="rounded-full px-3 py-1 bg-[#FFA601] text-primary font-label-caps text-xs font-semibold uppercase tracking-wider">
                {category}
              </span>
              <span className="font-label-caps text-xs text-white/80 tracking-wider">
                {item.date}
              </span>
              <span className="text-white/40">/</span>
              <span className="font-label-caps text-xs text-white/90 tracking-wider flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-[#FFA601]">location_on</span>
                {location}
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
              href={localePath("/cases")}
              className="font-label-caps text-xs text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 uppercase tracking-wider group"
            >
              <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform">arrow_back</span>
              {pickLang(lang, "返回實績案例", "Back to Case Studies", "実績紹介に戻る")}
            </Link>

            <button
              onClick={handleShare}
              className="rounded-md px-4 py-2 border border-outline-variant hover:border-[#FFA601] bg-surface-container-lowest font-label-caps text-xs text-primary flex items-center gap-2 uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#FFA601]">share</span>
              <span>{copied ? pickLang(lang, "已複製連結！", "Link Copied!", "リンクをコピーしました！") : pickLang(lang, "分享文章", "Share", "シェア")}</span>
            </button>
          </div>

          {/* Main Content Layout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-12"
          >
            {item.priceJPY != null && <PriceBlock priceJPY={item.priceJPY} variant="detail" />}

            {/* Overview */}
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-px bg-[#FFA601]"></span>
                {pickLang(lang, "專案概述", "PROJECT OVERVIEW", "案件概要")}
              </span>
              <p className="max-w-[70ch] font-body-lg text-primary text-lg md:text-xl leading-relaxed">
                {details.overview}
              </p>
            </div>

            {/* Featured Photo in Article */}
            <div className="rounded-xl w-full aspect-[16/9] overflow-hidden shadow-lg border border-outline-variant">
              <img
                src={item.image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Highlights */}
            <div className="rounded-r-xl p-8 bg-brand-tint border-l-4 border-[#FFA601] flex flex-col gap-6">
              <h3 className="font-headline-md text-xl text-primary font-medium">
                {pickLang(lang, "關鍵規格與配置重點", "Key Project Specifications & Highlights", "主要な仕様・特長")}
              </h3>
              <ul className="flex flex-col gap-3">
                {details.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#FFA601] text-lg mt-0.5 shrink-0">check_circle</span>
                    <span className="font-body-md text-primary text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy & Execution */}
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-px bg-[#FFA601]"></span>
                {pickLang(lang, "執行策略與專業視角", "STRATEGY & EXECUTION", "実行戦略とプロの視点")}
              </span>
              <h3 className="font-headline-md text-2xl text-primary font-medium">
                {pickLang(
                  lang,
                  "從實際持有者視角的盡職調查與談判",
                  "Due Diligence & Execution with an Owner's Mindset",
                  "オーナー目線によるデューデリジェンスと交渉"
                )}
              </h3>
              <p className="max-w-[70ch] font-body-md text-on-surface-variant text-base md:text-lg leading-relaxed">
                {details.strategy}
              </p>
            </div>

            {/* Outcome */}
            <div className="rounded-xl flex flex-col gap-4 p-8 bg-surface-container-lowest border border-outline-variant">
              <span className="font-label-caps text-xs text-primary uppercase tracking-widest">
                {pickLang(lang, "成效與資產價值", "PROJECT OUTCOME", "成果と資産価値")}
              </span>
              <p className="font-body-md text-primary text-base leading-relaxed font-medium">
                {details.outcome}
              </p>
            </div>

            {/* Bottom Actions: Share + Back */}
            <div className="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={localePath("/cases")}
                className="rounded-lg w-full sm:w-auto px-8 py-4 bg-primary text-white hover:bg-primary/90 font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                <span>{pickLang(lang, "返回全部案例", "Back to All Cases", "すべての実績に戻る")}</span>
              </Link>

              <button
                onClick={handleShare}
                className="rounded-lg w-full sm:w-auto px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white font-label-caps text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-sm">share</span>
                <span>{copied ? pickLang(lang, "已複製連結！", "Link Copied!", "リンクをコピーしました！") : pickLang(lang, "分享此專案", "Share Case Study", "この実績をシェア")}</span>
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
          href={localePath("/contact")}
          className="rounded-lg group px-8 py-4 bg-primary text-white font-label-caps text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-3"
        >
          <span>{t("cta.button")}</span>
          <ArrowChip className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
