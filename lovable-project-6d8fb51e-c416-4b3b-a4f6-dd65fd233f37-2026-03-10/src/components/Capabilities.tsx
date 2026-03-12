import { LayoutGrid, CookingPot, Archive, RefreshCw } from "lucide-react";

const categories = [
  { icon: LayoutGrid, name: "Шкафы", desc: "Встроенные и корпусные, любых размеров" },
  { icon: CookingPot, name: "Кухни", desc: "Модульные кухонные гарнитуры" },
  { icon: Archive, name: "Системы хранения", desc: "Полки, стеллажи, гардеробные" },
  { icon: RefreshCw, name: "Мебель-трансформер", desc: "Многофункциональные решения" },
];

const Capabilities = () => (
  <section id="capabilities" className="py-20 md:py-28 bg-section-alt">
    <div className="section-container">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
        Что можно собрать
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((c, i) => (
          <div
            key={i}
            className={`card-elevated text-center flex flex-col items-center gap-4 animate-fade-slide-up animate-delay-${(i + 1) * 100}`}
          >
            <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center">
              <c.icon size={26} className="text-accent" strokeWidth={1.6} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{c.name}</h3>
            <p className="text-sm text-muted-foreground">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
