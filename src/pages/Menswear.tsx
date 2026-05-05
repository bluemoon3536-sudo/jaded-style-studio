import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroMen from "@/assets/hero-men.jpg";

const Menswear = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative w-full h-[70vh] md:h-[88vh] overflow-hidden">
          <img
            src={heroMen}
            alt={t("hero.men")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 md:pb-20 px-4 text-center">
            <p className="text-hero-text/80 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-3">
              {t("mens.heroTagline")}
            </p>
            <h1 className="text-hero-text text-4xl md:text-7xl font-light tracking-[0.18em] uppercase mb-6">
              {t("hero.men")}
            </h1>
            <Link
              to="/menswear"
              className="inline-block border border-hero-text/80 text-hero-text text-[11px] tracking-[0.25em] uppercase px-8 py-3 hover:bg-hero-text hover:text-foreground transition-colors duration-300"
            >
              {t("mens.heroCta")}
            </Link>
          </div>
        </section>

        {/* EDITORIAL BANNER */}
        <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-foreground text-2xl md:text-4xl font-light tracking-[0.15em] uppercase mb-6 leading-tight">
              {t("mens.editorialTitle")}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed">
              {t("mens.editorialText")}
            </p>
          </div>
        </section>

        {/* PRODUCTS PLACEHOLDER */}
        <section className="container mx-auto px-4 py-20 md:py-28 text-center">
          <p className="text-muted-foreground text-sm md:text-base tracking-[0.15em] uppercase">
            {t("page.comingSoon")}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menswear;
