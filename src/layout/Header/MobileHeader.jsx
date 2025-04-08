import NavbarIcons from "./NavbarIcons";
import NavbarMenu from "./NavbarMenu";

function MobileHeader() {
  return (
    <nav className="flex overflow-hidden flex-col px-9 pt-9 pb-24 bg-white max-w-[414px] mx-auto">
      <div className="flex gap-10 w-full">
        <h1 className="grow shrink text-2xl font-bold tracking-normal leading-none text-slate-800 w-[86px]">
          Bandage
        </h1>
        <NavbarIcons />
      </div>
      <NavbarMenu />
    </nav>
  );
}

export default MobileHeader;
