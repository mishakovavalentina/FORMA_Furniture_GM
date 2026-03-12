import { Armchair, Layers, Palette, BadgeCheck } from "lucide-react";

const steps = [
  { num: "01", icon: Armchair, title: "Выберите тип мебели", desc: "Шкаф, кухня или трансформер" },
  { num: "02", icon: Layers, title: "Соберите из модулей", desc: "Комбинируйте блоки как нужно" },
  { num: "03", icon: Palette, title: "Настройте внешний вид", desc: "Цвет, материал, фурнитура" },
  { num: "04", icon: BadgeCheck, title: "Получите цену и результат", desc: "Итог — сразу, без сюрпризов" },
];

const Solution = () => (
  <section id="how-it-works" className="py-20 md:py-28 bg-section-dark text-section-dark-foreground">
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
        Просто. Пошагово. Без&nbsp;ошибок.
      </h2>
      <p className="text-center mb-14 max-w-md mx-auto opacity-70">
        Четыре шага до готового проекта мебели
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`card-elevated !bg-section-dark border border-section-dark-foreground/10 flex flex-col gap-4 animate-fade-slide-up animate-delay-${(i + 1) * 100}`}
          >
            <span className="text-xs font-bold tracking-widest text-accent-foreground/60 uppercase">{s.num}</span>
            <s.icon size={28} strokeWidth={1.6} />
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-sm opacity-60">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Solution;
