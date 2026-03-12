import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-section-dark text-section-dark-foreground">
      <div className="section-container grid md:grid-cols-2 gap-12 items-start">

        {/* Left: info */}
        <div className="animate-fade-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Свяжитесь с нами</h2>
          <p className="mt-4 text-xl font-medium opacity-90">
            Готовы ответить на вопросы и приехать на замер.
          </p>
          <p className="mt-4 text-base opacity-70 max-w-md leading-relaxed">
            Оставьте заявку или свяжитесь с нами удобным способом — обсудим ваш проект,
            подберём решение и согласуем время выезда замерщика.
          </p>

          <ul className="mt-8 space-y-4 text-base">
            <li>
              <span className="opacity-50 text-sm uppercase tracking-widest">Телефон</span>
              <a
                href="tel:+79057716340"
                className="block mt-1 font-medium hover:opacity-80 transition-opacity"
              >
                +7 905 771 6340
              </a>
            </li>
            <li>
              <span className="opacity-50 text-sm uppercase tracking-widest">Email</span>
              <a
                href="mailto:geomelnikov@gmail.com"
                className="block mt-1 font-medium hover:opacity-80 transition-opacity"
              >
                geomelnikov@gmail.com
              </a>
            </li>
            <li>
              <span className="opacity-50 text-sm uppercase tracking-widest">Телеграм</span>
              <a
                href="https://t.me/MelnikovGV"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-1 font-medium hover:opacity-80 transition-opacity"
              >
                @MelnikovGV
              </a>
            </li>
          </ul>
        </div>

        {/* Right: form */}
        <div className="animate-fade-slide-up animate-delay-200">
          {submitted ? (
            <div className="rounded-2xl bg-white/10 p-8 text-center">
              <p className="text-xl font-semibold">Заявка отправлена!</p>
              <p className="mt-2 opacity-70">Мы свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white/10 p-6 md:p-8 space-y-4"
            >
              <p className="text-lg font-semibold">Заявка на замер</p>

              <div>
                <label className="block text-sm opacity-60 mb-1" htmlFor="name">
                  Ваше имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label className="block text-sm opacity-60 mb-1" htmlFor="phone">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+7 000 000 0000"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label className="block text-sm opacity-60 mb-1" htmlFor="address">
                  Адрес объекта
                </label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Москва, ул. Примерная, 1"
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>

              <div>
                <label className="block text-sm opacity-60 mb-1" htmlFor="comment">
                  Комментарий
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  value={form.comment}
                  onChange={handleChange}
                  placeholder="Расскажите о вашем проекте..."
                  className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-2.5 text-sm placeholder:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-section-dark-foreground text-section-dark font-semibold py-3 hover:opacity-90 transition-opacity"
              >
                Записаться на замер
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
