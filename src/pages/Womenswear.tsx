import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import heroWomen from "@/assets/hero-women.jpg";

const Womenswear = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative w-full h-[60vh] overflow-hidden">
          <img
            src={heroWomen}
            alt={t("hero.women")}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-hero-text text-4xl md:text-6xl font-light tracking-[0.2em] uppercase">
              {t("hero.women")}
            </h1>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16 text-center">
          <p className="text-muted-foreground text-lg">
            {t("page.comingSoon")}
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Womenswear;
