import { Link } from "react-router";
import PageShell from "../components/PageShell";

const specialOffers = [
  {
    tag: "Курс оздоровления",
    title: "Абонемент на 7 занятий Бубновского",
    price: "10 500 ₽",
    benefit: "1 500 ₽ за тренировку вместо 1 800 ₽",
    description: "Персональная программа кинезитерапии на тренажере под контролем инструктора. Снятие спазмов спины и восстановление суставов.",
  },
  {
    tag: "Максимальный эффект",
    title: "Абонемент на 10 занятий Бубновского",
    price: "15 000 ₽",
    benefit: "Экономия 3 000 ₽ за полный курс",
    description: "Оптимальный курс для закрепления правильного мышечного корсета и избавления от хронических болей в позвоночнике.",
  },
  {
    tag: "Для двоих",
    title: "Сплит-тренировка (2 человека)",
    price: "2 500 ₽",
    benefit: "1 ч 20 мин совместного занятия",
    description: "Занимайтесь спортом и оздоровлением вместе с близким человеком по выгодной парной стоимости.",
  },
  {
    tag: "Первый визит",
    title: "Знакомство со студией",
    price: "от 750 ₽",
    benefit: "Сеансы от 30 до 90 минут",
    description: "Подберём идеальную технику массажа или процедуру ухода под ваши индивидуальные ощущения и состояние.",
  },
];

export default function OffersPage() {
  return (
    <PageShell>
      <section className="page-title">
        <p>Акции и абонементы студии «Радость»</p>
        <h1>
          Больше поводов
          <br />
          <em>позаботиться о себе</em>
        </h1>
      </section>

      {/* Сетка выгодных предложений и курсов */}
      <section className="bg-[#ede4d6] px-6 py-16 sm:px-12 lg:px-[7vw] lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {specialOffers.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col justify-between rounded-3xl border border-[#c7b9a5] bg-[#f8f4ec] p-8 shadow-[0_8px_30px_rgba(46,41,35,0.06)] ${
                  index === 0 ? "border-2 border-[#947e60]" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#eee5d6] px-3.5 py-1 text-xs font-semibold text-[#66543b]">
                      {item.tag}
                    </span>
                    <span className="font-serif text-3xl font-semibold text-[#29251f]">
                      {item.price}
                    </span>
                  </div>
                  <h2 className="mt-5 font-serif text-3xl text-[#29251f] sm:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm font-medium text-[#7d6849]">
                    {item.benefit}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[#5c5344]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 border-t border-[#ded3c1] pt-6">
                  <Link
                    to="/contacts"
                    className="inline-flex min-h-12 w-full items-center justify-between rounded-full bg-[#29251f] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3d372f]"
                  >
                    <span>Записаться по акции</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Подарочный сертификат */}
      <section className="bg-[#2a241e] px-6 py-20 text-white sm:px-12 lg:px-[7vw] lg:py-28">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent p-8 sm:p-14 text-center">
          <span className="text-xs uppercase tracking-widest text-[#d8c5a4]">Особенный подарок</span>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl">
            Подарочный сертификат<br />
            <em>в студию «Радость»</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#c7bdae]">
            Дарите не просто вещи — дарите лёгкость, заботу и часы настоящего спокойствия. Сертификат можно оформить на любую сумму, сеанс массажа, абонемент или маникюр.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-[#e6d6be]">
            <span className="rounded-full border border-white/20 px-4 py-1.5">Электронный или в крафтовом конверте</span>
            <span className="rounded-full border border-white/20 px-4 py-1.5">Срок действия — 6 месяцев</span>
            <span className="rounded-full border border-white/20 px-4 py-1.5">На любую услугу или сумму</span>
          </div>

          <div className="mt-10">
            <Link
              to="/contacts"
              className="inline-flex min-h-12 items-center gap-4 rounded-full bg-[#eee4d2] px-9 py-3.5 text-base font-semibold text-[#29251f] transition-transform hover:scale-105"
            >
              Заказать сертификат <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
