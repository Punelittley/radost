import { Link, useParams } from "react-router";
import PageShell from "../components/PageShell";
import EditorialImage from "../components/EditorialImage";
import { servicesData } from "../data/services";
import NotFoundPage from "./NotFoundPage";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);
  if (!service) return <NotFoundPage />;

  return (
    <PageShell>
      {/* Главный блок услуги */}
      <section className="grid gap-10 bg-[#e9e0d1] px-6 py-14 sm:px-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-[7vw] lg:py-24">
        <div>
          <Link
            to="/services"
            className="inline-flex min-h-11 items-center text-sm font-medium text-[#655236] underline underline-offset-4 focus-visible:outline-2"
          >
            ← Все услуги и прайс
          </Link>
          <p className="mt-8 text-xs uppercase tracking-widest text-[#725e40]">
            {service.categoryName} · Студия «Радость»
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-[#2c2721] sm:text-6xl lg:text-7xl">
            {service.title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-[#584e41] sm:text-lg">
            {service.fullDescription}
          </p>

          {/* Таблица цен по времени */}
          <div className="mt-8 rounded-2xl border border-[#c5b8a3] bg-[#f5efe5] p-5 shadow-sm sm:p-6">
            <h3 className="text-xs uppercase tracking-wider text-[#79674f]">Стоимость и длительность:</h3>
            <div className="mt-4 divide-y divide-[#dfd4c3]">
              {service.durations.map((tier) => (
                <div key={tier.duration} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                  <span className="text-base text-[#473d32]">{tier.duration}</span>
                  <span className="text-lg font-bold text-[#2c2721]">{tier.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contacts"
              className="inline-flex min-h-12 items-center rounded-full bg-[#2c2721] px-8 py-3.5 text-base font-medium text-white transition-all hover:bg-[#3d362f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#735c38]"
            >
              Записаться на сеанс
            </Link>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center rounded-full border border-[#8a765a] bg-transparent px-6 py-3 text-sm text-[#473d32] transition-colors hover:bg-white/40"
            >
              Написать в Telegram
            </a>
          </div>
        </div>

        <div>
          <EditorialImage
            key={service.slug}
            src={service.image}
            alt={service.title}
            className="h-[440px] w-full rounded-t-[140px] rounded-b-2xl object-cover shadow-[0_20px_50px_rgba(46,41,35,0.15)] lg:h-[620px]"
          />
        </div>
      </section>

      {/* Этапы и показания */}
      <section className="grid gap-12 bg-[#f3ede3] px-6 py-20 sm:px-12 lg:grid-cols-2 lg:px-[7vw]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-[#6c5635]">Внимание к деталям</p>
          <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
            Как проходит<br />
            <em className="text-[#79603b]">процедура</em>
          </h2>
          {service.details.indication && (
            <div className="mt-8 rounded-2xl border border-[#cbbfae] bg-[#e7ded0] p-6">
              <h4 className="text-xs uppercase tracking-widest text-[#6c5635]">Кому особенно рекомендуется:</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#4b4133]">{service.details.indication}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {(service.details.steps || [
            "Обсуждение самочувствия и пожеланий перед началом сеанса.",
            "Основная процедура с учётом комфортной для вас интенсивности.",
            "Время на отдых и спокойное возвращение к делам.",
          ]).map((step, idx) => (
            <article key={idx} className="border-t border-[#c9bdab] pt-5">
              <span className="text-xs font-semibold text-[#8a7251]">Этап 0{idx + 1}</span>
              <p className="mt-2 text-base leading-relaxed text-[#504639]">{step}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Другие услуги */}
      <section className="bg-[#ded2bf] px-6 py-20 sm:px-12 lg:px-[7vw]">
        <h2 className="mb-9 font-serif text-4xl sm:text-5xl">
          Другие услуги <em>студии «Радость»</em>
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {servicesData
            .filter((item) => item.slug !== slug)
            .slice(0, 3)
            .map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group flex flex-col justify-between rounded-2xl bg-[#f6f2ea] p-6 transition-all hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4"
              >
                <div>
                  <span className="text-xs text-[#7d6b52]">{item.categoryName}</span>
                  <h3 className="mt-2 font-serif text-2xl text-[#29251f]">{item.title}</h3>
                  <p className="mt-3 text-sm text-[#5c5344] line-clamp-2">{item.shortDescription}</p>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-[#dfd4c4] pt-4">
                  <span className="text-sm font-semibold text-[#29251f]">{item.primaryPrice}</span>
                  <span className="text-sm text-[#7d6b52]">Подробнее</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </PageShell>
  );
}
