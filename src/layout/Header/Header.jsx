import MobileHeader from "./MobileHeader";
import SummerCollection from "./SummerCollection";

function Header() {
  return (
    <header className="block lg:hidden">
      <MobileHeader />
      <SummerCollection />  
    </header>
  );
}

export default Header;
