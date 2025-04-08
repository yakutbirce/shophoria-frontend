function NavbarMenuItem({ label, className = "" }) {
    return (
      <li className={className}>
        <a
          href={`#${label.toLowerCase()}`}
          className="hover:text-slate-800 transition-colors"
        >
          {label}
        </a>
      </li>
    );
  }
  
  export default NavbarMenuItem;
  