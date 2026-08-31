import { useEffect } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";

export function Services() {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = lang === "zh" ? "Yellow House - 服務項目" : "Yellow House - Services";
  }, [lang]);

  const acquisitionSteps = lang === "zh" ? [
    { title: "初步諮詢與需求確認", desc: "深入了解您的購置目的、預算範圍及特定偏好，為後續物件篩選奠定基礎。" },
    { title: "物件提案與篩選", desc: "提供符合條件之精選物件清單，包含獨家未公開案源，並進行優劣勢分析。" },
    { title: "現場看屋與環境勘查", desc: "安排專人陪同視察物件實況，檢視周邊環境機能與建築結構品質。" },
    { title: "價格協商與條件斡旋", desc: "代表買方與賣方進行價格及交易條件交涉，確保客戶利益最大化。" },
    { title: "重要事項說明與簽約", desc: "由專業宅地建物取引士進行詳盡的產權及法規說明，確認無誤後簽署買賣契約。" },
    { title: "貸款協助與資金規劃", desc: "協助外籍人士對接合適之金融機構辦理貸款，並規劃跨國匯款流程。" },
    { title: "交屋結算與產權移轉", desc: "會同司法書士辦理尾款結算及所有權移轉登記，正式交付鑰匙與產權文件。" },
  ] : [
    { title: "Initial Consultation & Goal Alignment", desc: "Deep dive into your purchase purpose, budget structure, and timeline to form a strategic baseline." },
    { title: "Curated Proposal & Off-Market Sourcing", desc: "Shortlist prime and exclusive off-market properties with exhaustive comparative analysis." },
    { title: "Private Viewings & Site Inspection", desc: "Coordinate discreet on-site or high-definition live virtual tours covering architectural build and neighborhood." },
    { title: "Price Negotiation & Terms Structuring", desc: "Actively advocate for your financial and contract terms to maximize value and security." },
    { title: "Explanation of Important Matters & Contract", desc: "Conducted by licensed Real Estate Transaction Specialists (宅建士) before formal signing." },
    { title: "Cross-Border Financing & Fund Flow", desc: "Introduce leading banks for non-resident mortgages and structure compliant capital routing." },
    { title: "Final Settlement & Title Transfer", desc: "Complete deed transfer and title registration with licensed judicial scriveners, followed by key handover." },
  ];

  const transactionPhases = lang === "zh" ? [
    {
      phase: "PHASE 01",
      icon: "account_balance_wallet",
      title: "準備階段",
      desc: "資金規劃與文件審核，確保買賣資格與跨境資金流暢到位。",
      items: ["資金證明備妥", "護照與身分認證文件", "印鑑證明申請"]
    },
    {
      phase: "PHASE 02",
      icon: "description",
      title: "執行階段",
      desc: "出具正式買付證明書，代表買方進行價格條件斡旋與簽約期程確認。",
      items: ["提出買付證明書", "賣方承諾與條件合意", "安排簽約日程"]
    },
    {
      phase: "PHASE 03",
      icon: "draw",
      title: "契約階段",
      desc: "宅建士重要事項說明與公證契約締結，確保法令產權無虞。",
      items: ["繳交訂金 (房價5-10%)", "簽署買賣契約書", "印花稅票貼付"]
    },
    {
      phase: "PHASE 04",
      icon: "key",
      title: "結算階段",
      desc: "司法書士共同會審完成尾款清算、稅費繳交與所有權移轉登記。",
      items: ["支付尾款與各項稅費", "辦理登記手續", "房屋點交與鑰匙交付"]
    },
  ] : [
    {
      phase: "PHASE 01",
      icon: "account_balance_wallet",
      title: "Preparation",
      desc: "Capital planning, KYC verification, and notarized identity documentation readiness.",
      items: ["Proof of funds readiness", "Passport & notarized affidavit", "Affidavit of seal verification"]
    },
    {
      phase: "PHASE 02",
      icon: "description",
      title: "Execution",
      desc: "Issuing formal Letter of Intent, price negotiation, and timeline alignment with vendor.",
      items: ["Letter of Intent (買付證明書)", "Terms alignment with vendor", "Contract scheduling"]
    },
    {
      phase: "PHASE 03",
      icon: "draw",
      title: "Contract",
      desc: "Statutory explanation of important matters by licensed specialist and agreement execution.",
      items: ["Deposit payment (typically 5-10%)", "Purchase agreement execution", "Stamp duty tax handling"]
    },
    {
      phase: "PHASE 04",
      icon: "key",
      title: "Settlement",
      desc: "Closing settlement, title deed registration with judicial scrivener, and physical key handover.",
      items: ["Balance payment & tax clearance", "Judicial scrivener registration", "Physical handover of keys"]
    },
  ];

  return (
    <div className="flex flex-col w-full font-body-md text-on-surface bg-background">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
            {t("services.banner.tag")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            {t("services.banner.h1")}
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
            {t("services.banner.desc")}
          </p>
        </div>
      </section>

      {/* CORE BUSINESSES DETAILED SECTIONS */}
      <div className="w-full flex flex-col">
        {[
          { 
            id: 0,
            num: "home.biz1.num", 
            title: "home.biz1.title", 
            desc: "home.biz1.desc", 
            items: ["home.biz1.item1", "home.biz1.item2", "home.biz1.item3"], 
            img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
            icon: "real_estate_agent"
          },
          { 
            id: 1,
            num: "home.biz2.num", 
            title: "home.biz2.title", 
            desc: "home.biz2.desc", 
            items: ["home.biz2.item1", "home.biz2.item2", "home.biz2.item3"], 
            img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
            icon: "manage_accounts",
            reverse: true
          },
          { 
            id: 2,
            num: "home.biz3.num", 
            title: "home.biz3.title", 
            desc: "home.biz3.desc", 
            items: ["home.biz3.item1", "home.biz3.item2", "home.biz3.item3"], 
            img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
            icon: "domain_add"
          },
          { 
            id: 3,
            num: "home.biz4.num", 
            title: "home.biz4.title", 
            desc: "home.biz4.desc", 
            items: ["home.biz4.item1", "home.biz4.item2", "home.biz4.item3"], 
            img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85",
            icon: "architecture",
            reverse: true
          },
          { 
            id: 4,
            num: "home.biz5.num", 
            title: "home.biz5.title", 
            desc: "home.biz5.desc", 
            items: ["home.biz5.item1", "home.biz5.item2", "home.biz5.item3"], 
            img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
            icon: "hotel"
          }
        ].map((svc) => (
          <section key={svc.id} className="w-full py-16 md:py-24 px-margin-mobile md:px-margin-desktop border-b border-outline-variant/50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: svc.reverse ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:col-span-5 flex flex-col justify-center ${svc.reverse ? 'md:col-start-8 order-2 md:order-2' : 'order-2 md:order-1'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#FFA601] flex items-center justify-center bg-[#FFA601]/10 text-[#FFA601]">
                    <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                  </div>
                  <h2 className="font-numeral-display text-[#FFA601] text-3xl">{t(svc.num)}</h2>
                </div>
                <h3 className="font-headline-lg text-primary mb-4">{t(svc.title)}</h3>
                <p className="font-body-md text-on-surface-variant leading-relaxed mb-8">{t(svc.desc)}</p>
                <ul className="flex flex-col gap-4">
                  {svc.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#FFA601] text-xl shrink-0 mt-0.5">check_circle</span>
                      <span className="font-body-md text-primary">{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`md:col-span-6 h-[380px] md:h-[480px] relative group overflow-hidden shadow-md border border-outline-variant ${svc.reverse ? 'md:col-start-1 order-1 md:order-1' : 'md:col-start-7 order-1 md:order-2'}`}
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${svc.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* SERVICE FLOW / 交易服務流程 (REDESIGNED: ICON + STEP NUMBER + TITLE + DESCRIPTION) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-low border-b border-outline-variant">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FFA601] pb-6 gap-4"
        >
          <div>
            <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase block mb-1">
              SERVICE FLOW
            </span>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              {t("services.flow.title")}
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            {lang === "zh" ? "從前期準備、條件斡旋到尾款登記，嚴格把關每一階段法令與資金安全。" : "Guiding you with institutional precision from due diligence to final title registration."}
          </p>
        </motion.div>

        {/* 4-COLUMN ON DESKTOP, 2X2 ON TABLET, VERTICAL ON MOBILE */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {transactionPhases.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="p-8 border border-outline-variant bg-surface flex flex-col justify-between hover:border-[#FFA601] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Step indicator and Icon */}
              <div>
                <div className="flex items-center justify-between border-b border-outline-variant/60 pb-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-[#FFA601] flex items-center justify-center bg-[#FFA601]/10 text-[#FFA601] group-hover:bg-[#FFA601] group-hover:text-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                  </div>
                  <span className="font-numeral-display text-[#FFA601] font-medium text-sm tracking-wider">
                    {item.phase}
                  </span>
                </div>

                <h3 className="font-headline-md text-xl text-primary font-medium mb-3">
                  {item.title}
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              {/* Bullet Points */}
              <div className="pt-4 border-t border-outline-variant/40">
                <span className="font-label-caps text-[11px] text-on-surface-variant uppercase tracking-wider block mb-2">
                  {lang === "zh" ? "核心執行事項" : "Key Deliverables"}
                </span>
                <ul className="flex flex-col gap-2">
                  {item.items.map((li, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-primary font-medium">
                      <span className="text-[#FFA601] font-bold">・</span>
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* DETAILED ACQUISITION WORKFLOW (7 STEPS) */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap bg-surface-container-lowest">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 border-b border-[#FFA601] pb-6"
        >
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase block mb-1">
            STEP BY STEP
          </span>
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            {t("services.steps.title")}
          </h2>
        </motion.div>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-primary/20"></div>
          <div className="flex flex-col gap-10 relative z-10">
            {acquisitionSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-8 items-start group"
              >
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-lowest z-10 flex-shrink-0 group-hover:bg-[#FFA601] group-hover:border-[#FFA601] transition-colors duration-300 shadow-sm">
                  <span className="font-numeral-display text-primary group-hover:text-white font-medium transition-colors duration-300">
                    0{i + 1}
                  </span>
                </div>
                <div className={`flex flex-col pt-2 pb-6 w-full ${i === acquisitionSteps.length - 1 ? "" : "border-b border-primary/10"}`}>
                  <h4 className="font-headline-md text-xl text-primary mb-2 font-medium">{step.title}</h4>
                  <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ASSOCIATED FEES & TAXES */}
      <div className="w-full bg-primary text-white py-14 px-margin-mobile md:px-margin-desktop overflow-hidden relative border-y border-[#FFA601]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-4">
            <span className="font-label-caps text-xs text-[#FFA601] uppercase tracking-widest block mb-2">
              COST STRUCTURE
            </span>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-white m-0 font-medium">
              {t("services.taxes.title")}
            </h2>
          </div>
          <div className="md:col-span-8 flex flex-wrap gap-x-12 gap-y-6 font-body-md text-white/80">
            <div className="flex flex-col">
              <span className="font-label-caps text-xs text-[#FFA601] mb-1 uppercase tracking-wider">{t("services.taxes.buy_label")}</span>
              <span className="text-white text-base font-medium">{t("services.taxes.buy_val")}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs text-[#FFA601] mb-1 uppercase tracking-wider">{t("services.taxes.hold_label")}</span>
              <span className="text-white text-base font-medium">{t("services.taxes.hold_val")}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-xs text-[#FFA601] mb-1 uppercase tracking-wider">{t("services.taxes.sell_label")}</span>
              <span className="text-white text-base font-medium">{t("services.taxes.sell_val")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* LEASING & PROPERTY MANAGEMENT */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 md:p-12 flex flex-col justify-between border border-outline-variant shadow-sm relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 border border-[#FFA601] rounded-full flex items-center justify-center bg-[#FFA601]/10 text-[#FFA601] mb-8">
                <span className="material-symbols-outlined text-2xl">vpn_key</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-6">
                {t("services.mgmt.title")}
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8">
                {t("services.mgmt.desc")}
              </p>
            </div>
            <ul className="space-y-4 font-body-md text-primary relative z-10 border-t border-outline-variant pt-8">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#FFA601] text-lg">check_circle</span>
                <span>{t("services.mgmt.item1")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#FFA601] text-lg">check_circle</span>
                <span>{t("services.mgmt.item2")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#FFA601] text-lg">check_circle</span>
                <span>{t("services.mgmt.item3")}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-[#FFA601] text-lg">check_circle</span>
                <span>{t("services.mgmt.item4")}</span>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] md:min-h-[500px] w-full bg-cover bg-center shadow-md border border-outline-variant group overflow-hidden"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85')",
            }}
          ></motion.div>
        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="w-full bg-[#FFA601] py-20 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-6">
        <h2 className="font-headline-lg text-primary text-2xl md:text-3xl font-medium">
          {t("services.cta.title")}
        </h2>
        <Link 
          href="/contact" 
          className="px-8 py-4 bg-primary text-white font-label-caps text-xs uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center gap-2"
        >
          <span>{t("services.cta.btn")}</span>
          <span className="material-symbols-outlined text-xs">arrow_forward</span>
        </Link>
      </section>
    </div>
  );
}
