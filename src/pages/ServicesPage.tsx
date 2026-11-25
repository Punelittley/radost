import { useState } from "react";
import { Link } from "react-router";
import PageShell from "../components/PageShell";
import EditorialImage from "../components/EditorialImage";
import { categoriesMap, servicesData, type ServiceItem } from "../data/services";

export const serviceDetails = servicesData.map((item) => ({
  slug: item.slug,
  title: item.title,
  image: item.image,
  description: item.fullDescription,
  meta: `${item.primaryDuration} · ${item.primaryPrice}`,
  durations: item.durations,
  categoryName: item.categoryName,
  details: item.details,
}));

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredServices = activeCategory === "all"
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <PageShell>
      <section className="page-title services-page-title">
        <p>Прайс-лист студии «Радость»</p>
        <h1>
          Услуги и забота
          <br />о вашем <em>теле и состоянии</em>
        </h1>
      </section>

      {/* Фильтр по категориям */}
      <section className="bg-[#ede5d8] px-5 pt-8 pb-4 sm:px-10 lg:px-[7vw]">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categoriesMap.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-sm transition-all sm:text-base ${
                  isActive
                    ? "bg-[#29251f] text-white shadow-md"
                    : "border border-[#bfae95] bg-[#f8f3ec] text-[#4d4437] hover:border-[#8e7a60]"
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* Каталог услуг */}
      <section className="grid gap-6 bg-[#ede5d8] px-5 py-10 sm:grid-cols-2 sm:px-10 sm:py-16 lg:grid-cols-3 lg:px-[7vw] lg:py-20" aria-label="Список услуг">
        {filteredServices.map((service, index) => (
          <article
            key={service.slug}
            className="group flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#cec1ad] bg-[#fbf8f2] text-[#2e2922] shadow-[0_4px_20px_rgba(46,41,35,0.06)] transition-all hover:shadow-[0_12px_32px_rgba(46,41,35,0.12)]"
          >
            <div>
              <div className="relative overflow-hidden">
                <EditorialImage
                  src={service.image}
                  alt={service.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#fbf8f2]/90 px-3 py-1 text-xs font-medium text-[#594a35] backdrop-blur-sm">
                  {service.categoryName}
                </span>
                <span className="absolute top-4 right-4 grid size-8 place-items-center rounded-full bg-[#29251f] text-xs text-white">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>

              <div className="p-6">
                <h2 className="font-serif text-3xl leading-snug sm:text-[32px]">{service.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5c5345] line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Таблица цен по длительности */}
                <div className="mt-5 space-y-2 rounded-xl bg-[#eee7da]/60 p-4">
                  {service.durations.map((tier) => (
                    <div key={tier.duration} className="flex items-center justify-between text-sm">
                      <span className="text-[#695d4d]">{tier.duration}</span>
                      <strong className="font-semibold text-[#29251f]">{tier.price}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-[#dfd5c5] p-6 pt-4">
              <Link
                to={`/services/${service.slug}`}
                className="flex min-h-12 w-full items-center justify-between rounded-full border border-[#8f7a5d] px-5 py-2.5 text-sm font-medium text-[#29251f] transition-colors hover:bg-[#29251f] hover:text-white"
                aria-label={`Подробнее об услуге ${service.title}`}
              >
                <span>Подробнее</span>
                <span className="grid size-7 place-items-center rounded-full border border-current text-xs" aria-hidden="true">
                  ↗
                </span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* Блок абонементов и тренировок Бубновского */}
      <section className="bg-[#29251f] px-6 py-16 text-white sm:px-12 lg:px-[7vw] lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-widest text-[#d8c5a4]">Оздоровительные программы</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            Тренажёр Бубновского <em>и курсовые абонементы</em>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#c7bca9]">
            Регулярные занятия позволяют закрепить результат и полностью избавиться от боли в спине и мышечных зажимов.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3 text-left">
            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
              <span className="text-xs text-[#d8c5a4]">Разовое занятие</span>
              <h3 className="mt-2 font-serif text-2xl">60 минут</h3>
              <p className="mt-3 text-2xl font-semibold text-[#e8d5b7]">1 800 ₽</p>
              <p className="mt-3 text-xs text-[#b8ad9d]">Индивидуальное занятие с инструктором на тренажере.</p>
            </div>
            <div className="rounded-2xl border-2 border-[#d8c5a4] bg-white/10 p-6 shadow-xl backdrop-blur-sm">
              <span className="rounded-full bg-[#d8c5a4] px-2.5 py-0.5 text-[10px] font-bold text-[#29251f] uppercase">Популярно</span>
              <h3 className="mt-2 font-serif text-2xl">Курс 7 занятий</h3>
              <p className="mt-3 text-2xl font-semibold text-[#e8d5b7]">10 500 ₽</p>
              <p className="mt-3 text-xs text-[#b8ad9d]">1 500 ₽ за тренировку. Оптимальный старт для укрепления мышц спины.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-sm">
              <span className="text-xs text-[#d8c5a4]">Максимальный курс</span>
              <h3 className="mt-2 font-serif text-2xl">Курс 10 занятий</h3>
              <p className="mt-3 text-2xl font-semibold text-[#e8d5b7]">15 000 ₽</p>
              <p className="mt-3 text-xs text-[#b8ad9d]">1 500 ₽ за тренировку. Полный курс глубокой коррекции осанки.</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to="/contacts"
              className="inline-flex min-h-12 items-center gap-4 rounded-full bg-[#eee4d2] px-8 py-3 text-sm font-semibold text-[#29251f] transition-transform hover:scale-105"
            >
              Записаться на занятие <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
