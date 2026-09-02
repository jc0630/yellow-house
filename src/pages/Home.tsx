import { useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";
import { ArrowChip } from "../components/ArrowChip";
import { SectionWatermark } from "../components/SectionWatermark";

export function Home() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = lang === "zh" 
      ? "Yellow House - 日本在地的實務不動產夥伴 | 株式会社イエローハウスカンパニー" 
      : "Yellow House - Your Practical Real Estate Partner in Japan | Yellow House Company Inc.";
  }, [lang]);

  return (
    <div className="flex flex-col w-full">
      {/* HERO SECTION */}
      <section className="w-full pt-36 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative">
        <div className="md:col-span-6 flex flex-col justify-center gap-8 z-10">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#FFA601]"></span>
            <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest">
              {lang === "zh" ? "日本正式宅建業執照 ｜ 實務顧問" : "LICENSED REAL ESTATE BROKERAGE IN JAPAN"}
            </span>
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">
            {t("home.hero.title_line1")}<br/>{t("home.hero.title_line2")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            {t("home.hero.desc")}
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link href="/contact" className="border border-primary px-8 py-4 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-colors uppercase tracking-widest">
              {t("home.hero.consult")}
            </Link>
            <Link href="/services" className="group border border-transparent px-8 py-4 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest flex items-center gap-3">
              {t("home.hero.view_properties")}
              <ArrowChip />
            </Link>
          </div>
        </div>
        <div className="md:col-span-5 md:col-start-8 relative mt-12 md:mt-0">
          <div className="w-full aspect-[3/4] bg-surface-container relative overflow-hidden group shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=85')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="font-label-caps text-label-caps text-white bg-black/60 px-3 py-1.5 border border-white/20">KANAGAWA / TOKYO</span>
              <span className="font-numeral-display text-numeral-display text-[#FFA601] text-3xl font-light">15Y</span>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNATURE TRUST BAR */}
      <section className="w-full bg-[#FFA601] border-y border-primary">
        <div className="px-margin-mobile md:px-margin-desktop py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-gutter divide-y md:divide-y-0 md:divide-x divide-primary">
            <div className="flex flex-col items-center justify-center text-center pt-4 md:pt-0">
              <span className="font-label-caps text-label-caps text-primary mb-2 opacity-80">{t("home.stat.experience_label")}</span>
              <span className="font-headline-md text-headline-md text-primary">{t("home.stat.experience_val")}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center pt-4 md:pt-0">
              <span className="font-label-caps text-label-caps text-primary mb-2 opacity-80">{t("home.stat.certified_label")}</span>
              <span className="font-headline-md text-headline-md text-primary">{t("home.stat.certified_val")}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center pt-4 md:pt-0">
              <span className="font-label-caps text-label-caps text-primary mb-2 opacity-80">{t("home.stat.global_label")}</span>
              <span className="font-headline-md text-headline-md text-primary">{t("home.stat.global_val")}</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center pt-4 md:pt-0">
              <span className="font-label-caps text-label-caps text-primary mb-2 opacity-80">{t("home.stat.license_label")}</span>
              <span className="font-headline-md text-headline-md text-primary text-sm md:text-base font-semibold">{t("home.stat.license_val")}</span>
            </div>
          </div>
        </div>
      </section>

      

      {/* SECTION 04 & 05: 5 CORE BUSINESSES */}
      <section className="w-full py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low border-t border-outline-variant">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FFA601] pb-6 gap-4"
        >
          <SectionWatermark text="BUSINESS" />
          <div className="relative z-10">
            <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest">{t("home.services.tag")}</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2">{t("home.services.title")}</h2>
          </div>
          <p className="relative z-10 font-body-md text-on-surface-variant max-w-md">
            {t("home.services.desc")}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { num: "home.biz1.num", title: "home.biz1.title", desc: "home.biz1.desc", i1: "home.biz1.item1", i2: "home.biz1.item2", i3: "home.biz1.item3", label: "BROKERAGE" },
            { num: "home.biz2.num", title: "home.biz2.title", desc: "home.biz2.desc", i1: "home.biz2.item1", i2: "home.biz2.item2", i3: "home.biz2.item3", label: "MANAGEMENT" },
            { num: "home.biz3.num", title: "home.biz3.title", desc: "home.biz3.desc", i1: "home.biz3.item1", i2: "home.biz3.item2", i3: "home.biz3.item3", label: "VALUE-ADD" },
            { num: "home.biz4.num", title: "home.biz4.title", desc: "home.biz4.desc", i1: "home.biz4.item1", i2: "home.biz4.item2", i3: "home.biz4.item3", label: "DEVELOPMENT" },
            { num: "home.biz5.num", title: "home.biz5.title", desc: "home.biz5.desc", i1: "home.biz5.item1", i2: "home.biz5.item2", i3: "home.biz5.item3", label: "HOSPITALITY" },
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 bg-surface border border-outline-variant flex flex-col justify-between gap-6 hover:border-[#FFA601] hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-outline-variant/60 pb-3">
                  <span className="font-numeral-display text-[#FFA601] text-xl font-medium">{t(item.num)}</span>
                  <span className="font-label-caps text-xs text-on-surface-variant uppercase">{item.label}</span>
                </div>
                <h3 className="font-headline-md text-xl text-primary font-medium">{t(item.title)}</h3>
                <p className="font-body-md text-sm text-on-surface-variant">{t(item.desc)}</p>
                <ul className="flex flex-col gap-2 pt-2 text-sm text-primary">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFA601] font-bold">・</span>
                    <span>{t(item.i1)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFA601] font-bold">・</span>
                    <span>{t(item.i2)}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FFA601] font-bold">・</span>
                    <span>{t(item.i3)}</span>
                  </li>
                </ul>
              </div>
              <Link href="/services" className="font-label-caps text-xs text-primary hover:text-[#FFA601] uppercase tracking-wider flex items-center gap-2 mt-4 group">
                {lang === "zh" ? "查看服務說明" : "LEARN MORE"} <ArrowChip className="w-6 h-6" />
              </Link>
            </motion.div>
          ))}

          {/* Cross-border Advisory summary box */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="p-8 bg-primary text-white flex flex-col justify-between gap-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest">ADVISORY</span>
              <h3 className="font-headline-md text-xl text-white font-medium">
                {lang === "zh" ? "站在實際持有者立場的顧問諮詢" : "Practical Advisory from Owner's Lens"}
              </h3>
              <p className="font-body-md text-sm text-white/80 leading-relaxed">
                {lang === "zh"
                  ? "從取得、持有、管理、開發、營運到出售，以15年累積之在地實務經驗協助您做更客觀、完整的判斷。"
                  : "From acquisition, holding, management, development, and operations to resale, empowering you with deep practical insights."}
              </p>
            </div>
            <Link href="/contact" className="px-6 py-3 bg-[#FFA601] text-primary font-label-caps text-xs font-semibold hover:bg-white transition-colors self-start uppercase tracking-wider">
              {t("cta.button")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 03 & 07: 6 PERSPECTIVE ANGLES */}
      <section className="w-full py-section-gap px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FFA601] pb-6 gap-4"
        >
          <SectionWatermark text="PERSPECTIVE" />
          <div className="relative z-10">
            <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest">{t("home.perspective.tag")}</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2">{t("home.perspective.title")}</h2>
          </div>
          <p className="relative z-10 font-body-md text-on-surface-variant max-w-lg">
            {t("home.perspective.desc")}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { tag: "01 / ASSET VALUE", title: "home.perspective.item1_title", desc: "home.perspective.item1_desc" },
            { tag: "02 / HOLDING COST", title: "home.perspective.item2_title", desc: "home.perspective.item2_desc" },
            { tag: "03 / OPERATION RISK", title: "home.perspective.item3_title", desc: "home.perspective.item3_desc" },
            { tag: "04 / MAINTENANCE", title: "home.perspective.item4_title", desc: "home.perspective.item4_desc" },
            { tag: "05 / DEVELOPMENT", title: "home.perspective.item5_title", desc: "home.perspective.item5_desc" },
            { tag: "06 / EXIT STRATEGY", title: "home.perspective.item6_title", desc: "home.perspective.item6_desc" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="p-6 border-l-2 border-[#FFA601] bg-surface-container-lowest flex flex-col gap-2 hover:bg-surface-container-low transition-colors duration-300"
            >
              <span className="font-label-caps text-xs text-on-surface-variant uppercase tracking-wider">{item.tag}</span>
              <h4 className="font-headline-md text-lg text-primary">{t(item.title)}</h4>
              <p className="font-body-md text-sm text-on-surface-variant">{t(item.desc)}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* REPRESENTATIVE PROFILE (02) */}
      <section className="w-full bg-surface-container-low py-section-gap px-margin-mobile md:px-margin-desktop border-t border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="w-full max-w-sm aspect-[3/4] bg-surface relative overflow-hidden group shadow-lg border border-outline-variant">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85')",
                }}
              ></div>
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-6">
            <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest">{t("home.advisor.tag")}</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary whitespace-pre-line">{t("home.advisor.title")}</h2>
            <div>
              <h3 className="font-headline-md text-2xl text-primary font-medium">{t("home.advisor.name")}</h3>
              <p className="font-label-caps text-sm text-on-surface-variant mt-1">{t("home.advisor.role")}</p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-lg leading-relaxed">
              {t("home.advisor.desc")}
            </p>
            <Link href="/company" className="border border-primary px-8 py-3 font-label-caps text-label-caps text-primary hover:bg-primary hover:text-on-primary transition-colors self-start uppercase tracking-widest mt-2">
              {t("home.advisor.cta")}
            </Link>
          </div>
        </div>
      </section>

      {/* 6-STEP SERVICE FLOW (06) */}
      <section className="w-full py-section-gap px-margin-mobile md:px-margin-desktop">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FFA601] pb-6 gap-4"
        >
          <SectionWatermark text="PROCESS" />
          <div className="relative z-10">
            <span className="font-label-caps text-label-caps text-[#FFA601] uppercase tracking-widest">{t("home.process.tag")}</span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mt-2">{t("home.process.title")}</h2>
          </div>
          <p className="relative z-10 font-body-md text-on-surface-variant max-w-md">
            {t("home.process.desc")}
          </p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { num: "1", icon: "search", title: "home.process.step1.title", desc: "home.process.step1.desc" },
            { num: "2", icon: "plumbing", title: "home.process.step2.title", desc: "home.process.step2.desc" },
            { num: "3", icon: "draw", title: "home.process.step3.title", desc: "home.process.step3.desc" },
            { num: "4", icon: "key", title: "home.process.step4.title", desc: "home.process.step4.desc" },
            { num: "5", icon: "manage_accounts", title: "home.process.step5.title", desc: "home.process.step5.desc" },
            { num: "6", icon: "sell", title: "home.process.step6.title", desc: "home.process.step6.desc" }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 border border-outline-variant bg-surface-container-lowest flex flex-col gap-4 hover:-translate-y-1 hover:shadow-lg hover:border-[#FFA601]/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 border-b border-outline-variant/60 pb-4 mb-2 group-hover:border-[#FFA601]/50 transition-colors">
                <div className="w-10 h-10 rounded-full border border-[#FFA601] flex items-center justify-center bg-[#FFA601]/10 text-[#FFA601]">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-numeral-display text-[#FFA601] font-medium text-sm">STEP {item.num}</span>
                  <h3 className="font-headline-md text-lg text-primary font-medium leading-tight">{t(item.title)}</h3>
                </div>
              </div>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{t(item.desc)}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link href="/services" className="font-label-caps text-label-caps text-primary flex items-center gap-3 uppercase hover:text-[#FFA601] transition-colors border-b border-primary pb-1 group">
            {t("home.process.cta")} <ArrowChip className="w-6 h-6" />
          </Link>
        </motion.div>
      </section>

      {/* CLOSING BANNER */}
      <section className="w-full bg-[#FFA601] border-y border-primary py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center gap-8 text-center">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          {t("cta.title")}
        </h2>
        <Link href="/contact" className="bg-primary text-on-primary px-10 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface-tint transition-colors">
          {t("cta.button")}
        </Link>
      </section>
    </div>
  );
}
