import { Search, Heart, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-nav sticky top-0 z-50 border-b border-border">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="/" className="text-nav-foreground text-lg font-semibold tracking-tight">
          Jaded London
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
            Women
          </a>
          <a href="#" className="text-nav-foreground text-sm font-medium tracking-wide hover:opacity-60 transition-opacity">
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
          <button className="text-nav-foreground hover:opacity-60 transition-opacity" aria-label="Search">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="text-nav-foreground hover:opacity-60 transition-opacity hidden sm:block" aria-label="Wishlist">
            <Heart size={18} strokeWidth={1.5} />
          </button>
          <button className="text-nav-foreground hover:opacity-60 transition-opacity relative" aria-label="Cart">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[9px] w-3.5 h-3.5 flex items-center justify-center">
              0
            </span>
          </button>
          <button className="text-nav-foreground hover:opacity-60 transition-opacity md:hidden" aria-label="Menu">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
