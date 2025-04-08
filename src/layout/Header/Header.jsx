import DesktopNavbar from "./DesktopNavbar"; 
import MobileHeader from "./MobileHeader";
import SummerCollection from "./SummerCollection";

function Header() {
  return (
    <>
      {/* Mobile Header */}
      <header className="block lg:hidden">
        <MobileHeader />
        <SummerCollection />
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white">
        <DesktopNavbar />
        <SummerCollection />
      </header>
    </>
  );
}

export default Header;
