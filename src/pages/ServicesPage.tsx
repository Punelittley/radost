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
                  className="aspect-[16/10] w-full object-cover"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#fbf8f2]/90 px-3 py-1 text-xs font-medium text-[#594a35] backdrop-blur-sm">
                  {service.categoryName}
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
                className="flex min-h-12 w-full items-center justify-center rounded-full border border-[#8f7a5d] px-5 py-2.5 text-sm font-medium text-[#29251f] transition-colors hover:bg-[#29251f] hover:text-white"
                aria-label={`Подробнее об услуге ${service.title}`}
              >
                <span>Подробнее</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
