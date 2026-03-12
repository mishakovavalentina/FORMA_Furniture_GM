const FinalCTA = () => (
  <section id="cta" className="py-20 md:py-28 bg-section-alt">
    <div className="section-container text-center max-w-xl mx-auto animate-fade-slide-up">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
        Попробуйте собрать мебель сами
      </h2>
      <p className="mt-4 text-muted-foreground text-lg">
        Это проще, чем кажется.
      </p>
      <a
        href="#cta"
        className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-base font-semibold px-8 py-3.5 hover:opacity-90 transition-opacity"
      >
        Начать сборку
      </a>
    </div>
  </section>
);

export default FinalCTA;
