import { Link } from "wouter";
import { useLanguage } from "../lib/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-tertiary text-white pt-section-gap pb-8">
      <div className="px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="inline-block">
              <img
                alt="Yellow House"
                className="h-12 md:h-14 w-auto max-w-[200px] object-contain self-start"
                src="/yellow_house.png"
              />
            </Link>
            <p className="font-body-md text-on-surface-variant max-w-sm">
              {t("footer.desc")}
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-label-caps text-tertiary-fixed-dim mb-2">{t("footer.nav")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("nav.services")}
              </Link>
              <Link href="/cases" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("nav.cases")}
              </Link>
              <Link href="/company" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("nav.company")}
              </Link>
              <Link href="/news" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("nav.news")}
              </Link>
            </nav>
          </div>
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-label-caps text-tertiary-fixed-dim mb-2">{t("footer.careers")}</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/careers" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("footer.opps")}
              </Link>
              <Link href="/careers" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("footer.culture")}
              </Link>
              <Link href="/contact" className="text-body-md text-white/80 hover:text-tertiary-fixed-dim transition-colors">
                {t("footer.contact_hr")}
              </Link>
            </nav>
          </div>
          <div className="md:col-span-4 flex flex-col gap-4">
            <h4 className="font-label-caps text-tertiary-fixed-dim mb-2">{t("footer.location")}</h4>
            <Link href="/contact" className="w-full h-40 bg-on-surface-variant/20 overflow-hidden relative group block border border-white/10 hover:border-[#FFA601] transition-all">
              <div
                className="w-full h-full bg-cover bg-center grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4 text-center">
                <span className="text-white text-xs font-label-caps tracking-widest uppercase bg-black/60 px-3 py-1.5 border border-white/20">
                  {t("footer.map_label")}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FFA601] mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-label-caps text-on-surface-variant">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-6">
            <Link href="/company" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/company" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
