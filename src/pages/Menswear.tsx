import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import heroMen from "@/assets/hero-men.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product1 from "@/assets/product-1.jpg";

const Menswear = () => {
  const { t } = useTranslation();

  const categories = [
    { key: "tops", image: product1 },
    { key: "bottoms", image: product2 },
    { key: "outerwear", image: product6 },
    { key: "denim", image: product4 },
  ];

  const featured = [
    { id: 1, name: "Washed Logo Tee", price: "$72.00", image: product1, badge: "New" },
    { id: 2, name: "Cargo Jogger Pants", price: "$110.00", image: product2 },
    { id: 3, name: "Acid-Wash Hoodie", price: "$120.00", image: product3, badge: "Trending" },
    { id: 4, name: "Wide-Leg Denim", price: "$140.00", image: product4 },
    { id: 5, name: "Distressed Denim Jacket", price: "$155.00", image: product6, badge: "Hot" },
    { id: 6, name: "Parachute Cargo Shorts", price: "$100.00", image: product7 },
  ];

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

        {/* SHOP BY CATEGORY */}
        <section className="px-4 py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              {t("mens.shopByCategory")}
            </h2>
            <Link
              to="/menswear"
              className="text-muted-foreground text-[10px] md:text-xs tracking-[0.25em] uppercase hover:text-foreground transition-colors"
            >
              {t("mens.categories.all")} →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.key}
                to="/menswear"
                className="group relative block aspect-[3/4] overflow-hidden bg-secondary"
              >
                <img
                  src={cat.image}
                  alt={t(`mens.categories.${cat.key}`)}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-hero-text text-sm md:text-base tracking-[0.25em] uppercase font-light">
                    {t(`mens.categories.${cat.key}`)}
                  </span>
                </div>
              </Link>
            ))}
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
            <Link
              to="/menswear"
              className="inline-block border border-hero-text text-hero-text text-[11px] tracking-[0.25em] uppercase px-8 py-3 hover:bg-hero-text hover:text-foreground transition-colors duration-300"
            >
              {t("mens.editorialCta")}
            </Link>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="px-4 py-16 md:py-24">
          <div className="flex items-end justify-between mb-10">
            <h2 className="text-foreground text-xs md:text-sm tracking-[0.3em] uppercase font-medium">
              {t("mens.newArrivals")}
            </h2>
            <Link
              to="/menswear"
              className="text-muted-foreground text-[10px] md:text-xs tracking-[0.25em] uppercase hover:text-foreground transition-colors"
            >
              {t("mens.viewAll")} →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 md:gap-x-4 gap-y-8">
            {featured.map((p) => (
              <a key={p.id} href="#" className="group cursor-pointer">
                <div className="relative overflow-hidden mb-3 aspect-[3/4] bg-secondary">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {p.badge && (
                    <span className="absolute top-2 left-2 bg-product-badge text-product-badge-foreground text-[9px] tracking-[0.1em] uppercase px-2 py-1 font-medium">
                      {p.badge}
                    </span>
                  )}
                </div>
                <p className="text-foreground text-xs md:text-sm font-medium tracking-wide leading-tight">
                  {p.name}
                </p>
                <p className="text-muted-foreground text-xs mt-1">{p.price}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Menswear;
