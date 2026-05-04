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
        <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            src={heroMen}
            alt={t("mens.editorialTitle")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-start justify-center px-6 md:px-20 max-w-2xl">
            <h3 className="text-hero-text text-3xl md:text-5xl font-light tracking-[0.15em] uppercase mb-4 leading-tight">
              {t("mens.editorialTitle")}
            </h3>
            <p className="text-hero-text/80 text-sm md:text-base font-light max-w-md mb-6 leading-relaxed">
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
