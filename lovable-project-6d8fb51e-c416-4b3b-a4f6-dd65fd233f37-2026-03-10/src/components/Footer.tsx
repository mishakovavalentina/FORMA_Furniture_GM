const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="section-container flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
      <div>
        <span className="text-lg font-bold text-foreground">FORMA</span>
        <p className="mt-1 text-sm text-muted-foreground">Онлайн-конструктор мебели</p>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-muted-foreground">
        <a href="mailto:hello@forma.ru" className="hover:text-foreground transition-colors">hello@forma.ru</a>
        <span className="hidden md:inline">·</span>
        <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
        <span className="hidden md:inline">·</span>
        <span>© {new Date().getFullYear()} FORMA</span>
      </div>
    </div>
  </footer>
);

export default Footer;
