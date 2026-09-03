import React, { useEffect, useState } from "react";
import { useLanguage } from "../lib/LanguageContext";
import { motion } from "motion/react";
import { SocialLinks } from "../components/SocialLinks";
import { SOCIAL_LINKS } from "../lib/socialLinks";
import { pickLang } from "../lib/utils";

export function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = pickLang(
      lang,
      "Yellow House - 聯絡我們 | 株式会社イエローハウスカンパニー",
      "Yellow House - Contact | Yellow House Company Inc.",
      "Yellow House - お問い合わせ | 株式会社イエローハウスカンパニー"
    );
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        type: "",
        message: "",
      });
    }, 800);
  };

  return (
    <div className="flex flex-col w-full bg-background relative overflow-hidden">
      {/* UNIFIED BANNER WITH BACKGROUND IMAGE */}
      <section className="w-full relative min-h-[380px] md:min-h-[460px] flex items-center pt-32 md:pt-44 pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-[#FFA601]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=2000&q=85')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/60 md:from-black/85 md:via-black/70 md:to-black/50"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl flex flex-col gap-4"
        >
          <span className="font-label-caps text-label-caps text-[#FFA601] tracking-widest uppercase flex items-center gap-2">
            <span className="w-6 h-[2px] bg-[#FFA601] inline-block"></span>
            {t("contact.banner.tag")}
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-white tracking-tight">
            {t("contact.banner.h1")}
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mt-2 leading-relaxed">
            {t("contact.banner.desc")}
          </p>
        </motion.div>
      </section>

      {/* CONTACT FORM & INFO SECTION */}
      <section className="w-full px-margin-mobile md:px-margin-desktop py-section-gap bg-brand-tint">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
          {/* FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 border border-outline-variant shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-6 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#FFA601]/20 flex items-center justify-center text-[#FFA601]">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h3 className="font-headline-lg text-primary">{t("contact.form.success")}</h3>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  {pickLang(
                    lang,
                    "感謝您的填寫。株式会社イエローハウスカンパニー 不動產顧問已收到您的諮詢，將儘速透過 Email 與您聯繫。",
                    "Thank you for reaching out. Yellow House Company advisory team has received your message and will respond via email shortly.",
                    "お問い合わせいただき誠にありがとうございます。株式会社イエローハウスカンパニーの担当者が内容を確認の上、追ってメールにてご連絡いたします。"
                  )}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="rounded-lg mt-4 px-8 py-3 border border-primary text-primary font-label-caps hover:bg-primary hover:text-white transition-colors"
                >
                  {pickLang(lang, "填寫另一則詢問", "SUBMIT ANOTHER INQUIRY", "別の問い合わせを送る")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                      {t("contact.form.company")}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Yellow House Ltd."
                      className="rounded-md w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                      {t("contact.form.name")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Taro Yamada"
                      className="rounded-md w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                      {t("contact.form.email")} <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. taro@example.com"
                      className="rounded-md w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                      {t("contact.form.phone")}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +81 90-1234-5678"
                      className="rounded-md w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                    {t("contact.form.type")} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors cursor-pointer"
                  >
                    <option value="">{t("contact.form.type_placeholder")}</option>
                    <option value="brokerage_res">{t("contact.form.type_res")}</option>
                    <option value="brokerage_com">{t("contact.form.type_com")}</option>
                    <option value="management">{t("contact.form.type_mgmt")}</option>
                    <option value="resale">{t("contact.form.type_resale")}</option>
                    <option value="development">{t("contact.form.type_dev")}</option>
                    <option value="hospitality">{t("contact.form.type_hospitality")}</option>
                    <option value="other">{t("contact.form.type_other")}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-caps text-on-surface-variant text-xs uppercase tracking-widest">
                    {t("contact.form.message")} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={pickLang(
                      lang,
                      "請描述您的置產需求、諮詢事項或具體目標...",
                      "Please describe your property objectives, inquiry topics, or specific goals...",
                      "ご希望の物件条件やご相談内容、具体的なご要望をご記入ください..."
                    )}
                    className="w-full p-4 border border-outline-variant bg-surface focus:border-primary focus:outline-none font-body-md text-primary transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-lg w-full py-5 bg-primary text-white font-label-caps tracking-widest hover:bg-primary/90 transition-colors uppercase cursor-pointer disabled:opacity-50"
                >
                  {loading ? t("contact.form.submitting") : t("contact.form.submit")}
                </button>
              </form>
            )}
          </motion.div>

          {/* OFFICIAL COMPANY INFORMATION (COMPANY INFORMATION 唯一依據) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between gap-12"
          >
            <div className="flex flex-col gap-6">
              {/* Company Name */}
              <div className="flex flex-col gap-1 border-b border-primary/20 pb-5">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">business</span>
                  {t("contact.info.company_name_label")}
                </span>
                <p className="font-body-md text-primary font-medium text-lg whitespace-pre-line leading-snug mt-1">
                  {t("contact.info.company_name_val")}
                </p>
              </div>

              {/* Address */}
              <div className="flex flex-col gap-1 border-b border-primary/20 pb-5">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  {t("contact.info.hq_label")}
                </span>
                <p className="font-body-md text-primary whitespace-pre-line text-base leading-relaxed mt-1">
                  {t("contact.info.hq_val")}
                </p>
              </div>

              {/* License */}
              <div className="flex flex-col gap-1 border-b border-primary/20 pb-5">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">workspace_premium</span>
                  {t("contact.info.license_label")}
                </span>
                <p className="font-body-md text-primary text-base mt-1">
                  {t("contact.info.license_val")}
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1 border-b border-primary/20 pb-5">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">mail</span>
                  {t("contact.info.contact_label")}
                </span>
                <p className="font-body-md text-primary text-base mt-1">
                  {t("contact.info.contact_val")}
                </p>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1 border-b border-primary/20 pb-5">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">call</span>
                  {t("contact.info.phone_label")}
                </span>
                <p className="font-body-md text-primary text-base mt-1">
                  {t("contact.info.phone_val")}
                </p>
              </div>

              {/* Hours */}
              <div className="flex flex-col gap-1">
                <span className="font-label-caps text-[#FFA601] tracking-widest uppercase text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">schedule</span>
                  {t("contact.info.hours_label")}
                </span>
                <p className="font-body-md text-primary text-sm whitespace-pre-line leading-relaxed mt-1">
                  {t("contact.info.hours_val")}
                </p>
              </div>
            </div>

            <div className="bg-tertiary text-white p-8 rounded-r-xl border-l-4 border-[#FFA601] hover:-translate-y-1 transition-transform duration-300">
              <p className="font-body-md italic text-white/90 leading-relaxed">
                {t("contact.quote")}
              </p>
              {SOCIAL_LINKS.some((s) => s.url) && (
                <div className="mt-6 pt-6 border-t border-white/15 flex flex-col gap-3">
                  <span className="font-label-caps text-[11px] text-white/60 uppercase tracking-widest">
                    {lang === "zh" ? "社群媒體" : lang === "jp" ? "ソーシャルメディア" : "Social Media"}
                  </span>
                  <SocialLinks />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
