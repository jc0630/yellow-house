import { useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";
import { ArrowChip } from "../components/ArrowChip";
import { pickLang } from "../lib/utils";

export function Company() {
  const { t, lang, localePath } = useLanguage();

  useEffect(() => {
    document.title = pickLang(
      lang,
      "Yellow House - 公司簡介 | 株式会社イエローハウスカンパニー",
      "Yellow House - Company Profile | Yellow House Company Inc.",
      "Yellow House - 会社案内 | 株式会社イエローハウスカンパニー"
    );
  }, [lang]);

  return (
    <div className="flex flex-col w-full relative">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
          <div className="md:col-span-8 flex flex-col gap-4">
            <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
              <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
              {t("company.banner.tag")}
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
              {t("company.banner.h1")}
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
              {t("company.banner.desc")}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-start md:justify-end mt-4 md:mt-0">
            <div className="flex flex-col gap-2 items-start md:items-end border-l border-white/30 md:border-l-0 md:border-r border-r-white/30 pl-4 md:pl-0 md:pr-4">
              <span className="font-label-caps text-label-caps text-white/75 uppercase tracking-widest">
                {pickLang(lang, "實務經驗 15 年", "15 YEARS TRACK RECORD", "実務経験15年")}
              </span>
              <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest font-semibold">KANAGAWA, JAPAN</span>
            </div>
          </div>
        </div>
      </section>

      {/* REPRESENTATIVE MESSAGE (02 代表人背景) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="rounded-xl md:col-span-5 relative group cursor-pointer overflow-hidden aspect-[3/4] shadow-xl border border-outline-variant animate-float">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85')",
              }}
            ></div>
          </div>
          <div className="md:col-span-7 flex flex-col justify-center gap-8 md:pl-16 pt-12 md:pt-0">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#FFA601]"></span>
                <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  {t("company.rep.tag")}
                </h2>
              </div>
              <h3 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary whitespace-pre-line">
                {t("company.rep.headline")}
              </h3>
            </div>
            <div className="flex flex-col gap-6 font-body-md text-body-md text-on-surface-variant max-w-prose leading-relaxed">
              <p>{t("company.rep.p1")}</p>
              <p>{t("company.rep.p2")}</p>
            </div>
            <div className="pt-2">
              <span className="font-label-caps text-sm text-primary font-semibold tracking-wider">
                {pickLang(
                  lang,
                  "黃經祐 ｜ 代表人・房東・不動產投資人",
                  "Kei-Yu Huang ｜ Representative Director ・ Landlord ・ Investor",
                  "黄経祐 ｜ 代表・オーナー・不動産投資家"
                )}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW TABLE (COMPANY INFORMATION 唯一依據) */}
      <section className="w-full bg-surface-container-low px-margin-mobile md:px-margin-desktop py-section-gap relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-surface-container-highest/30 to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="w-12 h-px bg-[#FFA601]"></span>
              <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                {t("company.overview.tag")}
              </h2>
            </div>
            <h3 className="font-headline-md text-headline-md text-primary">
              {t("company.overview.title")}
            </h3>
          </motion.div>
          <div className="md:col-span-8">
            <motion.ul 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="flex flex-col"
            >
              {[
                { label: t("company.overview.name_label"), val: t("company.overview.name_val") },
                { label: t("company.overview.loc_label"), val: t("company.overview.loc_val") },
                { label: t("company.overview.lic_label"), val: t("company.overview.lic_val") },
                { label: t("company.overview.email_label"), val: t("company.overview.email_val") },
                { label: t("company.overview.phone_label"), val: t("company.overview.phone_val") },
                { label: t("company.overview.hours_label"), val: t("company.overview.hours_val") }
              ].map((item, idx) => (
                <motion.li 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="grid grid-cols-1 md:grid-cols-3 py-8 border-b border-primary/10 hover:bg-surface/50 transition-colors duration-300"
                >
                  <div className="font-label-caps text-label-caps text-on-surface-variant mb-2 md:mb-0">
                    {item.label}
                  </div>
                  <div className="md:col-span-2 font-body-md text-body-md text-primary font-medium whitespace-pre-line leading-relaxed">
                    {item.val}
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>


      {/* CORE PHILOSOPHY */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap bg-brand-tint">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
          <span className="material-symbols-outlined text-[#FFA601] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight whitespace-pre-line">
            {t("company.quote")}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mt-4 leading-relaxed">
            {t("company.quote_desc")}
          </p>
        </div>
      </section>

      {/* VISIT US / LOCATION */}
      <section className="w-full px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 pr-0 lg:pr-12 order-2 lg:order-1">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#FFA601]"></span>
                <h2 className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
                  {t("company.visit.tag")}
                </h2>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary">
                {t("company.visit.title")}
              </h3>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant text-xs">{t("company.overview.loc_label")}</span>
                <p className="font-body-md text-body-md text-primary whitespace-pre-line leading-relaxed">
                  {t("company.overview.loc_val")}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant text-xs">{t("contact.info.contact_label")}</span>
                <p className="font-body-md text-body-md text-primary">
                  contact@yellowhouse.jp
                </p>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-label-caps text-on-surface-variant text-xs">{t("contact.info.hours_label")}</span>
                <p className="font-body-md text-body-md text-primary whitespace-pre-line text-sm leading-relaxed">
                  {t("contact.info.hours_val")}
                </p>
              </div>
            </div>
            <Link
              href={localePath("/contact")}
              className="rounded-lg self-start mt-4 px-8 py-4 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-white transition-colors duration-300 flex items-center gap-2 group uppercase"
            >
              <span>{t("cta.button")}</span>
              <ArrowChip className="w-6 h-6" />
            </Link>
          </div>
          <div className="rounded-xl lg:col-span-7 h-[400px] md:h-[500px] w-full relative overflow-hidden group order-1 lg:order-2 shadow-xl border border-primary/10">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1600&q=85')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-black/70 px-4 py-2 border border-white/20 rounded-md">
              <span className="font-label-caps text-white text-xs tracking-widest uppercase">KANAGAWA HEADQUARTERS</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="w-full bg-[#FFA601] py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-8 relative overflow-hidden">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary relative z-10 leading-tight">
          {t("cta.title")}
        </h2>
        <Link href={localePath("/contact")} className="rounded-lg relative z-10 px-10 py-5 bg-primary text-white font-label-caps text-label-caps hover:bg-primary/90 transition-colors duration-300 flex items-center gap-3 group uppercase">
          <span>{t("cta.button")}</span>
          <ArrowChip className="w-6 h-6" />
        </Link>
      </section>
    </div>
  );
}
