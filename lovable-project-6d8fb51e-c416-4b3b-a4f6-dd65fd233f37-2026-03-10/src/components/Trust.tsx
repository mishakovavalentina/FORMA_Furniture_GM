import { Check } from "lucide-react";

const points = [
  "Стандартные и совместимые модули",
  "Понятные размеры и ограничения",
  "Прозрачная цена в процессе сборки",
  "Реальный, реализуемый результат",
  "Никакого дизайнера и долгих согласований",
];

const Trust = () => (
  <section id="why-forma" className="py-20 md:py-28">
    <div className="section-container max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
        Почему FORMA
      </h2>
      <ul className="space-y-5">
        {points.map((p, i) => (
          <li
            key={i}
            className={`flex items-start gap-4 animate-fade-slide-up animate-delay-${(i + 1) * 100}`}
          >
            <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-secondary flex items-center justify-center">
              <Check size={16} className="text-accent" strokeWidth={2.5} />
            </span>
            <span className="text-base md:text-lg text-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Trust;
