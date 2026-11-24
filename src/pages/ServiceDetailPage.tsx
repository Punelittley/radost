import { Link, useParams } from "react-router";
import PageShell from "../components/PageShell";
import EditorialImage from "../components/EditorialImage";
import { serviceDetails } from "./ServicesPage";
import NotFoundPage from "./NotFoundPage";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = serviceDetails.find((item) => item.slug === slug);
  if (!service) return <NotFoundPage />;
  return (
    <PageShell>
      <section className="grid gap-10 bg-[#e9e0d1] px-6 py-14 sm:px-12 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-[7vw] lg:py-24">
        <div>
          <Link to="/services" className="inline-flex min-h-11 items-center text-sm text-[#655236] underline underline-offset-4 focus-visible:outline-2">← Все услуги</Link>
          <p className="mt-8 text-sm uppercase tracking-widest text-[#655236]">Ваш личный ритуал</p>
          <h1 className="mt-5 text-6xl leading-[0.9] text-[#2c2721] sm:text-7xl">{service.title}</h1>
          <p className="mt-8 text-base leading-relaxed text-[#584e41]">{service.description}</p>
          <p className="mt-8 border-y border-[#bdb09b] py-5 text-lg">{service.meta}</p>
          <Link to="/contacts" className="mt-8 inline-flex min-h-12 items-center gap-10 rounded-full bg-[#2c2721] px-7 py-3 text-base text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#735c38]">Записаться <span aria-hidden="true">↗</span></Link>
        </div>
        <EditorialImage key={service.slug} src={service.image} alt={service.title} className="h-[440px] w-full rounded-t-full rounded-b-2xl object-cover lg:h-[620px]" />
      </section>
      <section className="grid gap-12 px-6 py-20 sm:px-12 lg:grid-cols-2 lg:px-[7vw]">
        <div><p className="mb-5 text-sm uppercase tracking-widest text-[#6c5635]">В вашем ритме</p><h2 className="text-6xl leading-none">Как проходит<br /><em className="text-[#79603b]">этот ритуал</em></h2></div>
        <div className="space-y-7">
          {[
            ["Перед началом", "Обсудим самочувствие, пожелания и комфортную интенсивность. При наличии противопоказаний процедура может быть отложена."],
            ["Во время сеанса", service.description],
            ["После", "Оставим время на спокойный отдых. Мастер подскажет, как мягко вернуться к привычному ритму."],
          ].map(([title, text]) => <article key={title} className="border-t border-[#c9bdab] pt-5"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#584e41]">{text}</p></article>)}
        </div>
      </section>
      <section className="bg-[#ded2bf] px-6 py-20 sm:px-12 lg:px-[7vw]">
        <h2 className="mb-9 text-5xl">Возможно, вам <em>откликнется</em></h2>
        <div className="grid gap-5 md:grid-cols-3">{serviceDetails.filter((item) => item.slug !== slug).slice(0, 3).map((item) => <Link key={item.slug} to={`/services/${item.slug}`} className="rounded-2xl bg-[#f3eee5] p-6 focus-visible:outline-2 focus-visible:outline-offset-4"><h3 className="font-serif text-3xl">{item.title}</h3><p className="mt-4 text-sm text-[#584e41]">{item.meta}</p><span className="mt-5 inline-flex min-h-11 items-center text-sm">Подробнее ↗</span></Link>)}</div>
      </section>
    </PageShell>
  );
}
