import { useState } from "react";
import { Search, ShoppingBag, Menu } from "lucide-react";
import logo from "@/assets/logo.jpg";
import { useCart } from "@/context/CartContext";
import SearchOverlay from "./SearchOverlay";

const Navbar = () => {
  const { count, openCart } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
        <div className="flex items-center justify-between px-4 py-3">
          <a href="/" className="flex items-center" aria-label="Home">
            <img src={logo} alt="Logo" className="h-8 w-auto mix-blend-screen" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/womenswear" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
              Women
            </a>
            <a href="/menswear" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
              Men
            </a>
            <a href="#" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
              Denim
            </a>
            <a href="#" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
              New In
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="text-nav-foreground hover:opacity-60 transition-opacity"
              aria-label="Search"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className="text-nav-foreground hover:opacity-60 transition-opacity relative"
              aria-label="Cart"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] min-w-3.5 h-3.5 px-1 flex items-center justify-center rounded-full">
                {count}
              </span>
            </button>
            <button className="text-nav-foreground hover:opacity-60 transition-opacity md:hidden" aria-label="Menu">
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </nav>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
