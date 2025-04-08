import NavbarMenuItem from "./NavbarMenuItem";

function NavbarMenu() {
  const menuItems = ["Home", "Product", "Pricing", "Contact"];

  return (
    <ul className="flex overflow-hidden flex-col items-center self-center mt-24 text-3xl tracking-wide text-center whitespace-nowrap text-neutral-500">
      {menuItems.map((item, index) => (
        <NavbarMenuItem
          key={item}
          label={item}
          className={index > 0 ? "mt-8" : ""}
        />
      ))}
    </ul>
  );
}

export default NavbarMenu;
