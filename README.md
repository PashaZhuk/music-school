# Resonance — Музыкальная школа

Full-stack проект на React + TypeScript + Vite + Tailwind CSS + Shadcn-UI + Supabase.

## Стек технологий

- **React 18** + **TypeScript**
- **Vite 5** — сборщик
- **Tailwind CSS** + **tailwindcss-animate**
- **Framer Motion** — анимации
- **Radix UI / Shadcn UI** — компоненты
- **Supabase** — база данных (таблица `leads`)
- **React Router v6** — роутинг
- **React Hook Form** — формы

## Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка Supabase

1. Создайте проект на [supabase.com](https://supabase.com)
2. Выполните SQL-миграцию (см. ниже)
3. Скопируйте `.env.example` в `.env` и заполните переменные:

```bash
cp .env.example .env
```

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 3. Запуск dev-сервера

```bash
npm run dev
```

### 4. Сборка

```bash
npm run build
```

---

## SQL — создание таблицы `leads` в Supabase

Выполните в редакторе SQL вашего Supabase-проекта:

```sql
create table if not exists public.leads (
  id         bigserial primary key,
  name       text        not null,
  phone      text        not null,
  email      text,
  instrument text        not null,
  message    text,
  created_at timestamptz not null default now()
);

-- Включить Row Level Security
alter table public.leads enable row level security;

-- Разрешить вставку для всех (anon ключ)
create policy "Allow insert for all"
  on public.leads
  for insert
  to anon
  with check (true);

-- (Опционально) Разрешить чтение только для авторизованных
create policy "Allow select for authenticated"
  on public.leads
  for select
  to authenticated
  using (true);
```

---

## Структура проекта

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx        — Шапка сайта с навигацией
│   │   ├── Footer.tsx        — Подвал
│   │   └── RootLayout.tsx    — Корневой layout
│   ├── pages/
│   │   ├── HomePage.tsx      — Главная
│   │   ├── DirectionsListPage.tsx
│   │   ├── DirectionPage.tsx — Страница одного направления
│   │   ├── TeachersPage.tsx
│   │   ├── PricesPage.tsx
│   │   ├── ContactsPage.tsx  — Контакты + карта + форма
│   │   └── NotFoundPage.tsx
│   ├── sections/
│   │   ├── Hero.tsx          — Главный баннер
│   │   ├── DirectionsGrid.tsx
│   │   ├── TeachersSection.tsx
│   │   ├── CtaBanner.tsx
│   │   └── TrialForm.tsx     — Форма записи → Supabase leads
│   └── ui/
│       ├── button.tsx
│       ├── input.tsx
│       ├── form-elements.tsx — Label, Select, Textarea
│       └── fade-in.tsx       — Framer Motion анимации
├── hooks/
│   └── useLeadForm.ts        — Хук формы + Supabase insert
├── lib/
│   ├── supabase.ts
│   ├── utils.ts
│   └── data.ts               — Данные: направления, преподаватели, тарифы
└── types/
    └── index.ts
```

## Страницы

| Путь | Описание |
|------|----------|
| `/` | Главная — Hero, Почему мы, Направления, Преподаватели, CTA |
| `/directions` | Список всех направлений |
| `/directions/guitar` | Гитара |
| `/directions/vocal` | Вокал |
| `/directions/drums` | Барабаны |
| `/directions/piano` | Фортепиано |
| `/directions/saxophone` | Саксофон |
| `/directions/ensemble` | Ансамбли |
| `/teachers` | Преподаватели |
| `/prices` | Тарифы + FAQ |
| `/contacts` | Контакты + Google Maps + Соцсети |
| `/contacts#trial` | Прокручивает к форме записи |

## Дизайн

- **Тема**: тёмная (Dark Mode), без переключателя
- **Шрифты**: Cormorant Garamond (display) + DM Sans (body)
- **Акценты**: золото `#C9A84C`
- **Анимации**: Framer Motion — fade-in при скролле, stagger-анимации, hover-эффекты
