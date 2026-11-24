import PageShell from "../components/PageShell";
import { Link } from "react-router";
import EditorialImage from "../components/EditorialImage";

const categories = [
  [
    "Расслабляющие ритуалы",
    "Снимают напряжение и возвращают спокойствие",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Восстанавливающие",
    "Помогают вернуть силы и телесную лёгкость",
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Авторские ритуалы",
    "Индивидуальное сочетание массажных техник",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Для лица и головы",
    "Мягкое расслабление и естественное сияние",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
  ],
  [
    "Экспресс-ритуалы",
    "Короткая пауза с заметным эффектом",
    "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=1000&q=85",
  ],
];

const rituals = [
  [
    "Тепло и восстановление",
    "60 минут · 3 200 ₽",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Глубокое расслабление",
    "90 минут · 4 500 ₽",
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Сияние лица",
    "60 минут · 2 800 ₽",
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=85",
  ],
  [
    "Тихий вечер",
    "120 минут · 5 900 ₽",
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=85",
  ],
];

const slugs = ["relaxing", "restorative", "signature", "face-and-head", "express", "warmth", "deep-relaxation", "face-glow", "quiet-evening"];
const descriptions = [
  "Плавные движения и мягкий ритм помогают переключить внимание с повседневных задач на ощущения в теле. Интенсивность подбираем вместе с вами.",
  "Последовательная работа с мышцами спины, ног и плечевого пояса. Подходит тем, кто хочет уделить внимание ощущению скованности после насыщенного дня.",
  "Индивидуальное сочетание мягких массажных приёмов, ароматного масла и спокойных пауз. Программа формируется после короткого разговора с мастером.",
  "Деликатная работа с лицом, волосистой частью головы и шеей. Ритуал для отдыха от экранов, ежедневной суеты и привычного напряжения.",
  "Короткая программа с вниманием к одной выбранной зоне. Удобный формат, когда хочется сделать паузу посреди насыщенного дня.",
  "Уютный ритуал с тёплым маслом и размеренной работой с телом. Мягкий формат для спокойного знакомства с массажными практиками.",
  "Расширенный сеанс, в котором достаточно времени для последовательной работы с телом. Давление и темп согласовываются в начале и во время процедуры.",
  "Массаж лица, шеи и декольте с деликатными приёмами. Завершаем ритуал спокойной паузой и уходом, подобранным с учётом особенностей кожи.",
  "Два часа без спешки: мягкий прогрев, массаж тела и финальный отдых. Позвольте себе полностью переключиться и никуда не торопиться.",
];
const meta = ["60 минут · от 3 000 ₽", "90 минут · от 4 500 ₽", "120 минут · от 5 500 ₽", "60 минут · от 2 500 ₽", "30 минут · от 1 800 ₽"];
export const serviceDetails = [...categories, ...rituals].map(([title, subtitle, image], index) => ({
  slug: slugs[index], title, image, description: descriptions[index],
  meta: index < categories.length ? meta[index] : subtitle,
}));

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="page-title services-page-title">
        <p>Наши услуги</p>
        <h1>
          Ритуалы для тела
          <br />и <em>внутренней тишины</em>
        </h1>
      </section>
      <section className="grid gap-5 bg-[#e7dfd3] px-5 py-10 sm:grid-cols-2 sm:px-10 sm:py-16 lg:grid-cols-6 lg:px-[7vw] lg:py-24" aria-label="Категории услуг">
        {categories.map(([title, text, image], index) => (
          <Link to={`/services/${slugs[index]}`} className={`group min-w-0 overflow-hidden rounded-[24px] border border-[#cec1ad] bg-[#f6f1e8] text-[#2e2922] focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#775e39] ${index > 2 ? "lg:col-span-3" : "lg:col-span-2"}`} key={title} aria-label={`Подробнее: ${title}`}>
            <div className="relative overflow-hidden">
              <EditorialImage src={image} alt={title} className="aspect-[4/3] w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03] sm:aspect-[5/4]" />
              <span className="absolute top-4 left-4 grid size-9 place-items-center rounded-full bg-[#f6f1e8] text-xs text-[#594a35]">0{index + 1}</span>
            </div>
            <div className="p-5 sm:p-6">
              <h2 className="text-[32px] leading-[1.05] sm:text-4xl">{title}</h2>
              <p className="mt-3 min-h-10 text-sm leading-relaxed text-[#60574a]">{text}</p>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#d5cbbd] pt-4"><span className="text-sm text-[#584d3c]">{meta[index]}</span><span className="inline-flex min-h-11 items-center gap-3 text-sm">Подробнее <span className="grid size-9 place-items-center rounded-full border border-[#b0a087]" aria-hidden="true">↗</span></span></div>
            </div>
          </Link>
        ))}
      </section>
      <section className="ritual-showcase full-section mobile-rituals">
        <div className="ritual-head">
          <p>Осознанное восстановление</p>
          <h2>
            Прикосновение
            <br />
            <em>с намерением</em>
          </h2>
          <span>Выберите ритуал, который откликается вашему состоянию сегодня.</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rituals.map(([title, meta, image], index) => (
            <article key={title} className="min-w-0 overflow-hidden rounded-3xl border border-[#635545] bg-[#2a241e]">
              <Link to={`/services/${slugs[categories.length + index]}`} className="block text-inherit focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <EditorialImage src={image} alt={title} className="aspect-[4/3] w-full object-cover" />
              <div className="p-5">
                <h3 className="font-serif text-3xl leading-tight">{title}</h3>
                <p className="mt-3 text-sm text-[#e1d3be]">{meta}</p>
                <span className="mt-4 inline-flex min-h-11 items-center text-sm text-[#e6d4b5]">Об услуге ↗</span>
              </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
