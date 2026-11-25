import { Link } from "react-router";
import PageShell from "../components/PageShell";

export default function WorksPage() {
  return (
    <PageShell>
      <section className="page-title">
        <p>Галерея и атмосфера</p>
        <h1>
          Пространство <em>тишины</em>
          <br />и бережной заботы
        </h1>
      </section>

      <section className="bg-[#ede5d8] px-6 py-16 sm:px-12 sm:py-24 lg:px-[7vw]">
        <div className="mx-auto max-w-4xl">
          {/* Элегантная плашка обновления */}
          <div className="rounded-[32px] border border-[#d3c5b2] bg-[#fbf8f2] p-8 text-center shadow-[0_8px_30px_rgba(46,41,35,0.06)] sm:p-14">
            <span className="inline-block rounded-full border border-[#bfae95] bg-[#f5ede0] px-4 py-1 text-xs uppercase tracking-widest text-[#695a45]">
              Скоро открытие галереи
            </span>

            <h2 className="mt-6 font-serif text-3xl text-[#29251f] sm:text-4xl lg:text-5xl leading-tight">
              Мы готовим <em>живую фотохронику</em>
              <br />наших ритуалов и пространства
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5c5345] sm:text-lg">
              Каждая деталь в студии «Радость» подобрана для вашего глубокого расслабления: мягкий тёплый свет, природные материалы, умиротворяющая тишина и заботливые руки мастеров.
            </p>

            <div className="mt-10 grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-[#e5dcd0] bg-[#f4ece1]/70 p-6">
                <h3 className="font-serif text-2xl text-[#29251f]">Атмосфера</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#695d4d]">
                  Камерное пространство без спешки и городской суеты, где можно восстановить силы.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e5dcd0] bg-[#f4ece1]/70 p-6">
                <h3 className="font-serif text-2xl text-[#29251f]">Натуральность</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#695d4d]">
                  Премиальные гипоаллергенные масла, прогретый хлопок и натуральные текстуры.
                </p>
              </div>
              <div className="rounded-2xl border border-[#e5dcd0] bg-[#f4ece1]/70 p-6">
                <h3 className="font-serif text-2xl text-[#29251f]">Внимание</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#695d4d]">
                  Индивидуальный подбор техники под состояние вашего тела и настроение.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#29251f] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#433c32]"
              >
                Посмотреть услуги и прайс
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="works-quote full-section">
        <p>«Мы не меняем вас. Мы помогаем телу вспомнить состояние, в котором ему хорошо».</p>
        <span>Команда студии «Радость»</span>
      </section>
    </PageShell>
  );
}
