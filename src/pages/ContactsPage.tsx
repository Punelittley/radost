import { Link } from "react-router";
import PageShell from "../components/PageShell";

export default function ContactsPage() {
  return (
    <PageShell>
      <section className="page-title contact-page-title">
        <p>Контакты</p>
        <h1>
          Будем рады
          <br />
          <em>встрече с вами</em>
        </h1>
      </section>

      <section className="bg-[#ede5d8] px-6 py-16 sm:px-12 sm:py-24 lg:px-[7vw]">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[32px] border border-[#d3c5b2] bg-[#fbf8f2] p-8 text-center shadow-[0_8px_30px_rgba(46,41,35,0.06)] sm:p-14">
            <span className="inline-block rounded-full border border-[#bfae95] bg-[#f5ede0] px-4 py-1 text-xs uppercase tracking-widest text-[#695a45]">
              Скоро открытие
            </span>

            <h2 className="mt-6 font-serif text-3xl text-[#29251f] sm:text-4xl lg:text-5xl leading-tight">
              Студия массажа <em>«Радость»</em>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#5c5345] sm:text-lg">
              Мы завершаем подготовку нашего уютного пространства. Точный адрес, прямой контактный номер телефона и форма записи на процедуры будут доступны совсем скоро.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#29251f] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#433c32]"
              >
                Посмотреть услуги и прайс
              </Link>
              <Link
                to="/"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#8f7a5d] px-8 py-3 text-sm font-medium text-[#29251f] transition-colors hover:bg-[#29251f] hover:text-white"
              >
                На главную
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
