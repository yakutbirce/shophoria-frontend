import { Search, ShoppingCart, Heart, Menu } from "lucide-react";

function NavbarIcons() {
  return (
    <div className="flex gap-7 items-start my-auto text-slate-800">
      <button className="flex gap-6 justify-center items-center" aria-label="Search">
        <Search className="w-5 h-5" />
      </button>
      <button aria-label="Cart">
        <ShoppingCart className="w-6 h-6" />
      </button>
      <button aria-label="Favorites">
        <Heart className="w-6 h-6" />
      </button>
      <button aria-label="Menu">
        <Menu className="w-6 h-6" />
      </button>
    </div>
  );
}

export default NavbarIcons;
