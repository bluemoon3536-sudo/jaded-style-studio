import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSplit />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
