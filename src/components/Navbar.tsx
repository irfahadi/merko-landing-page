import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import merkoLogo from "@/assets/merko-logo.png";

const navLinks = [
  { label: "BERANDA", href: "/" },
  { label: "LAYANAN", href: "/layanan" },
  { label: "RUANG INFORMASI", href: "/ruang-informasi" },
  {
    label: "HUBUNGI KAMI",
    href: "https://api.whatsapp.com/send/?phone=%2B6282211771426",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center">
          <img src={merkoLogo} alt="PT. Merko" className="h-10 w-auto" />
        </div>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                className="px-4 py-2 text-xs font-semibold tracking-wider transition-colors rounded text-muted-foreground hover:text-foreground"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-t border-border pb-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="block px-6 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground"
              activeClassName="text-primary"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
