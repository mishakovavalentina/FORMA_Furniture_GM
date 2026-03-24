# FORMA — конструктор мебели

Маркетинговый лендинг для сервиса модульной мебели FORMA: пользователь собирает мебель из стандартных блоков, видит цену в реальном времени и оставляет заявку на замер. Целевая аудитория — частные покупатели на российском рынке.

---

## Tech Stack

| Слой | Технология |
|------|-----------|
| Framework | React 18 + TypeScript 5 |
| Build | Vite 5 (SWC) |
| Routing | React Router DOM 6 |
| Styling | Tailwind CSS 3 + CSS-переменные |
| UI-компоненты | shadcn/ui (Radix UI) |
| Иконки | Lucide React |
| Формы | React Hook Form + Zod |
| Data-fetching | TanStack React Query 5 |
| Анимации | tailwindcss-animate |
| Уведомления | Sonner (toasts) |
| Тесты | Vitest + Testing Library |
| Деплой | Netlify |

---

## Project Structure

```
FORMA_Furniture_GM/
├── netlify.toml                        # Конфиг деплоя: build-команда, SPA-редиректы
├── CLAUDE.md                           # Этот файл
└── lovable-project-*/                  # Корень приложения (Lovable export)
    ├── index.html                      # HTML-точка входа
    ├── vite.config.ts                  # Vite + path aliases (@/)
    ├── tailwind.config.ts              # Цветовая схема, кастомные классы
    ├── components.json                 # Конфиг shadcn/ui
    ├── src/
    │   ├── main.tsx                    # React DOM mount
    │   ├── App.tsx                     # Провайдеры (QueryClient, Toaster) + роутер
    │   ├── index.css                   # Глобальные стили, CSS-переменные, анимации
    │   ├── pages/
    │   │   ├── Index.tsx               # Главная страница (композиция всех секций)
    │   │   └── NotFound.tsx            # 404
    │   ├── components/
    │   │   ├── Navbar.tsx              # Фиксированная навигация + мобильное меню
    │   │   ├── Hero.tsx                # Первый экран, CTA "Начать сборку"
    │   │   ├── Solution.tsx            # 4 шага процесса
    │   │   ├── Capabilities.tsx        # 4 категории мебели
    │   │   ├── Shift.tsx               # Трансформируемая мебель SHIFT
    │   │   ├── Trust.tsx               # 5 причин выбрать FORMA
    │   │   ├── FinalCTA.tsx            # Конверсионный блок
    │   │   ├── Contact.tsx             # Форма заявки на замер + контакты
    │   │   ├── Footer.tsx              # Подвал
    │   │   ├── NavLink.tsx             # Утилитарный компонент навигации
    │   │   └── ui/                     # 42 компонента shadcn/ui (не редактировать вручную)
    │   ├── hooks/
    │   │   ├── use-mobile.tsx          # Детект мобильного брейкпоинта
    │   │   └── use-toast.ts            # Хук для toast-уведомлений
    │   ├── lib/
    │   │   └── utils.ts                # cn() — утилита для className
    │   ├── assets/                     # Изображения (hero-mockup.png, shift-room.png)
    │   └── test/                       # Тесты (Vitest)
    └── public/                         # Статика (favicon, robots.txt, _redirects)
```

---

## Conventions

### Коммиты
- Язык: английский
- Формат: `<verb> <what>` — коротко и по делу
- Примеры: `Add contact section`, `Fix netlify.toml publish path`, `Update navbar links`
- Для PR-веток: описательное название через дефис, префикс `claude/` для автоматических веток

### Именование файлов
- Компоненты: `PascalCase.tsx` (например `FinalCTA.tsx`)
- Хуки: `use-kebab-case.ts` (например `use-mobile.tsx`)
- Утилиты/конфиги: `kebab-case.ts`
- Тесты: `*.test.ts` рядом с файлом или в `src/test/`

### Ветки
- Фича-ветки: `claude/add-<feature>-<hash>` или описательное имя
- Разработка через PR, не напрямую в `main`
- Текущая рабочая ветка: `claude/add-claude-documentation-0BEKi`

### Стили
- Только Tailwind-утилиты + кастомные классы из `index.css`
- Переиспользуемые стили выносить в `@layer components` в `index.css`
- Не использовать inline `style={}` без крайней необходимости
- Тема и цвета — через CSS-переменные (`--primary`, `--background` и т.д.)

---

## Environment

Переменные окружения (добавить в `.env.local` для разработки):

```
# На текущий момент проект не требует обязательных env-переменных.
# При добавлении внешних сервисов (CRM, email, аналитика) — добавить сюда:
# VITE_API_URL=
# VITE_ANALYTICS_ID=
# VITE_FORM_ENDPOINT=
```

> Все переменные для Vite должны начинаться с `VITE_`, иначе они недоступны в браузере.

---

## What Claude Should Know

### Бизнес-контекст
- Сайт на **русском языке** — весь UI-текст, копирайт и сообщения пользователю на русском
- FORMA продаёт **модульную мебель** из стандартных блоков — никакого кастомного дизайна
- Ключевое УТП: предсказуемая цена + понятные размеры + не нужен дизайнер
- **SHIFT** — отдельная линейка трансформируемой мебели (день/ночь, работа/отдых)
- Главная конверсия — форма заявки на **замер** (`Contact.tsx`)

### Архитектурные особенности
- Проект экспортирован из **Lovable** — папка с длинным UUID-именем является корнем приложения
- `netlify.toml` в корне репозитория указывает `base` на эту папку — не переименовывать
- Это **SPA**, все маршруты редиректятся на `index.html` через `public/_redirects` и `netlify.toml`
- Path alias `@/` → `src/` настроен в `vite.config.ts` и `tsconfig`

### UI-соглашения
- shadcn/ui компоненты в `src/components/ui/` — устанавливаются через CLI (`npx shadcn-ui add ...`), не создаются вручную
- Кастомные секции-компоненты живут в `src/components/` (не в `ui/`)
- Анимации используют классы `.animate-fade-slide-up` и `.animate-delay-*` из `index.css`
- Секции с тёмным фоном используют класс `section-dark`, контейнер контента — `section-container`

### Контакты (для формы и футера)
- Телефон: +7 905 771 6340
- Email: geomelnikov@gmail.com
- Telegram: @MelnikovGV

---

## Don't

1. **Не редактировать файлы в `src/components/ui/` вручную** — эти компоненты управляются через shadcn/ui CLI. Изменения потеряются при обновлении. Для кастомизации — создавай обёртки.

2. **Не переименовывать папку `lovable-project-*/`** — `netlify.toml` жёстко ссылается на неё как на `base`-директорию. Переименование сломает деплой.

3. **Не коммитить `.env` и `.env.local`** — они в `.gitignore`. Секреты и API-ключи никогда не должны попадать в репозиторий.

4. **Не использовать `style={{}}` для цветов и отступов** — для этого есть Tailwind-классы и CSS-переменные темы. Inline-стили нарушают консистентность и тему.

5. **Не создавать новые страницы без необходимости** — сайт намеренно одностраничный (SPA-лендинг). Новые "страницы" — это секции на `Index.tsx`, а не отдельные роуты.
