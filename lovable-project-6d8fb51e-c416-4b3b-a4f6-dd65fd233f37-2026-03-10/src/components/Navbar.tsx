import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Как это работает", href: "#how-it-works" },
  { label: "Возможности", href: "#capabilities" },
  { label: "SHIFT", href: "#shift" },
  { label: "Почему FORMA", href: "#why-forma" },
  { label: "Контакты", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold tracking-tight text-foreground">FORMA</a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 hover:opacity-90 transition-opacity"
        >
          Начать сборку
        </a>

        {/* Mobile burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Меню"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border animate-fade-slide-up">
          <nav className="section-container flex flex-col gap-4 py-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 mt-2 w-full"
            >
              Начать сборку
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
