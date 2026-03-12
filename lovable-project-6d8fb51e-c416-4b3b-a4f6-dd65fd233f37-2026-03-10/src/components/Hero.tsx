import heroImg from "@/assets/hero-mockup.png";

const Hero = () => (
  <section className="min-h-[85vh] flex items-center pt-16">
    <div className="section-container grid md:grid-cols-2 gap-12 md:gap-16 items-center py-16 md:py-24">
      <div className="animate-fade-slide-up">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
          FORMA — онлайн-конструктор мебели
        </h1>
        <p className="mt-5 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
          Соберите шкаф, кухню или мебель-трансформер из&nbsp;готовых модулей.
          Видите результат и&nbsp;цену сразу.
        </p>
        <a
          href="#cta"
          className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground text-base font-semibold px-8 py-3.5 hover:opacity-90 transition-opacity"
        >
          Начать сборку
        </a>
      </div>
      <div className="animate-fade-slide-up animate-delay-200 flex justify-center">
        <img
          src={heroImg}
          alt="Модульная мебель FORMA"
          className="w-full max-w-md md:max-w-lg rounded-2xl"
          loading="eager"
        />
      </div>
    </div>
  </section>
);

export default Hero;
