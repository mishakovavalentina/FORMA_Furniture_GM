import shiftRoom from "@/assets/shift-room.png";

const Shift = () => (
  <section id="shift" className="py-20 md:py-28 bg-section-dark text-section-dark-foreground">
    <div className="section-container grid md:grid-cols-2 gap-12 items-center">
      <div className="animate-fade-slide-up">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">SHIFT</h2>
        <p className="mt-4 text-xl font-medium opacity-90">
          Мебель, которая меняет сценарий использования.
        </p>
        <p className="mt-4 text-base opacity-70 max-w-md leading-relaxed">
          Один предмет — два режима. День и ночь. Работа и отдых.
          Трансформируемые модули позволяют менять назначение пространства в&nbsp;одно движение.
        </p>
      </div>
      <div className="animate-fade-slide-up animate-delay-200">
        <img
          src={shiftRoom}
          alt="SHIFT — трансформация пространства: день и ночь"
          className="w-full rounded-2xl"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default Shift;
