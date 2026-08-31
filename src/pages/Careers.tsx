import { useEffect, useState } from "react";
import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";

export function Careers() {
  const { t, lang } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  useEffect(() => {
    document.title = lang === "zh" ? "Yellow House - 招募公告" : "Yellow House - Careers";
  }, [lang]);

  const jobs = [
    {
      id: 1,
      typeZh: "全職",
      typeEn: "FULL-TIME",
      locationZh: "台北市 / 東京都",
      locationEn: "TAIPEI / TOKYO",
      titleZh: "未經驗歡迎！元氣不動產人員募集",
      titleEn: "Real Estate Advisory Specialist (Fresh Graduates & No Experience Welcome)",
      descZh: "我們正在尋找充滿熱情、具備強烈企圖心的人才加入我們的銷售與顧問團隊。無需相關經驗，我們提供完整的培訓計畫，幫助您在頂級房地產市場建立專業職涯。",
      descEn: "We are seeking passionate, growth-minded talents to join our prime property advisory team. Comprehensive mentorship provided to fast-track your high-end real estate career.",
      requirementsZh: [
        "對建築美學與不動產投資有高度興趣與熱忱",
        "具備良好的人際溝通與團隊協作能力",
        "中英雙語流利（具備日語溝通能力者尤佳）",
        "積極主動，具備持續學習的企圖心"
      ],
      requirementsEn: [
        "Passionate about architectural aesthetics and luxury real estate",
        "Strong interpersonal presentation and client empathy skills",
        "Bilingual proficiency in Chinese & English (Japanese is an advantage)",
        "Self-starter with commitment to professional excellence"
      ]
    },
    {
      id: 2,
      typeZh: "全職",
      typeEn: "FULL-TIME",
      locationZh: "東京都港區",
      locationEn: "TOKYO, MINATO-KU",
      titleZh: "資深豪宅資產顧問 (需具備宅建士執照)",
      titleEn: "Senior Luxury Property Advisor (Licensed Real Estate Specialist)",
      descZh: "專門負責億元級以上豪宅與整棟收益型物業之買賣媒合，深入對接全球高淨值客戶與家族辦公室。",
      descEn: "Leading benchmark transactions in ultra-prime residential and multi-family commercial assets for high-net-worth families.",
      requirementsZh: [
        "具備日本宅地建物取引士執照",
        "3年以上日本不動產實務經紀經驗",
        "熟悉跨國資金流程與稅務法規"
      ],
      requirementsEn: [
        "Licensed Japanese Real Estate Broker (宅地建物取引士)",
        "3+ years proven brokerage track record in prime Tokyo districts",
        "Deep familiarity with cross-border financing and tax structuring"
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-background relative overflow-hidden">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-3xl flex flex-col gap-4">
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
            {t("careers.banner.tag")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            {t("careers.banner.h1")}
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
            {t("careers.banner.desc")}
          </p>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex items-center justify-between mb-16 border-b border-primary pb-6">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            {t("careers.open_positions")}
          </h2>
          <span className="font-label-caps text-label-caps text-[#FFA601]">
            0{jobs.length} ROLES
          </span>
        </div>

        <div className="flex flex-col gap-12">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border border-outline-variant bg-surface-container-lowest p-8 md:p-12 hover:border-[#FFA601] transition-all duration-300 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="bg-primary text-white text-xs px-3 py-1 font-label-caps tracking-widest">
                  {lang === "zh" ? job.typeZh : job.typeEn}
                </span>
                <span className="text-on-surface-variant text-xs font-label-caps tracking-widest">
                  {lang === "zh" ? job.locationZh : job.locationEn}
                </span>
              </div>
              <h3 className="font-headline-lg text-primary mb-4">
                {lang === "zh" ? job.titleZh : job.titleEn}
              </h3>
              <p className="font-body-md text-on-surface-variant mb-6 max-w-3xl leading-relaxed">
                {lang === "zh" ? job.descZh : job.descEn}
              </p>

              {/* Requirements */}
              <div className="mb-8 pt-4 border-t border-outline-variant">
                <h4 className="font-label-caps text-primary text-xs mb-3 tracking-widest uppercase">
                  {lang === "zh" ? "條件需求 / REQUIREMENTS" : "REQUIREMENTS"}
                </h4>
                <ul className="space-y-2 font-body-md text-on-surface-variant">
                  {(lang === "zh" ? job.requirementsZh : job.requirementsEn).map((req, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#FFA601] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-[#FFA601] text-primary font-label-caps text-label-caps font-bold hover:bg-primary hover:text-white transition-colors duration-300 uppercase tracking-widest inline-block"
                >
                  {t("careers.join.btn")}
                </Link>
                <button
                  onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                  className="px-6 py-3 border border-primary text-primary font-label-caps text-label-caps hover:bg-surface-container transition-colors uppercase tracking-widest cursor-pointer"
                >
                  {selectedJob === job.id ? (lang === "zh" ? "收起說明" : "LESS INFO") : (lang === "zh" ? "查看詳情" : "DETAILS")}
                </button>
              </div>

              {selectedJob === job.id && (
                <div className="mt-6 p-6 bg-surface-container rounded font-body-md text-on-surface animate-in fade-in duration-300">
                  <h5 className="font-bold mb-2">{lang === "zh" ? "福利與支援計畫" : "Benefits & Support System"}</h5>
                  <p className="text-on-surface-variant leading-relaxed">
                    {lang === "zh"
                      ? "• 提供日本留學/打工度假簽證轉工作簽證輔導\n• 高額業績獎金制度與透明晉升管道\n• 定期舉辦日本建築考察與大師講座"
                      : "• Visa sponsorship support for eligible candidates\n• Competitive incentive model and transparent career progression\n• Regular architectural field excursions and masterclasses"}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE / QUOTE */}
      <section className="w-full bg-tertiary text-white py-section-gap px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
          <span className="material-symbols-outlined text-[#FFA601] text-5xl">format_quote</span>
          <p className="font-headline-lg-mobile md:font-headline-lg leading-relaxed text-white">
            {t("careers.quote")}
          </p>
          <div className="flex flex-col items-center gap-1">
            <span className="font-label-caps text-[#FFA601] tracking-widest">{t("careers.quote_author")}</span>
            <span className="font-body-md text-white/60">{t("careers.quote_dept")}</span>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="w-full bg-[#FFA601] py-24 px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-8">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary">
          {t("careers.join.title")}
        </h2>
        <p className="font-body-lg text-primary/80 max-w-xl">
          {t("careers.join.desc")}
        </p>
        <Link
          href="/contact"
          className="px-12 py-4 bg-primary text-white font-label-caps tracking-widest hover:bg-surface-tint transition-colors duration-300 uppercase inline-block"
        >
          {t("careers.join.btn")}
        </Link>
      </section>
    </div>
  );
}
