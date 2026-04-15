import heroWomen from "@/assets/hero-women.jpg";
import heroMen from "@/assets/hero-men.jpg";

const HeroSplit = () => {
  return (
    <section className="flex flex-col md:flex-row w-full h-[85vh] md:h-[90vh]">
      <a
        href="#"
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        <img
          src={heroWomen}
          alt="Womenswear collection"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={960}
          height={1200}
        />
        <div className="absolute inset-0 bg-hero-overlay/20 group-hover:bg-hero-overlay/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h2 className="text-hero-text text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            Womenswear
          </h2>
        </div>
      </a>

      <a
        href="#"
        className="relative flex-1 overflow-hidden group cursor-pointer"
      >
        <img
          src={heroMen}
          alt="Menswear collection"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          width={960}
          height={1200}
        />
        <div className="absolute inset-0 bg-hero-overlay/20 group-hover:bg-hero-overlay/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-end justify-center pb-12">
          <h2 className="text-hero-text text-2xl md:text-3xl font-light tracking-[0.2em] uppercase">
            Menswear
          </h2>
        </div>
      </a>
    </section>
  );
};

export default HeroSplit;
