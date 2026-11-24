import { Link } from "react-router";
import PageShell from "../components/PageShell";

const offers = [
  ["−20%", "Первое знакомство", "Скидка на первый массаж в студии."],
  ["5 + 1", "Курс восстановления", "Шестой сеанс выбранной программы в подарок."],
  ["−15%", "Радость для двоих", "Особая цена при записи вместе с близким человеком."],
];

export default function OffersPage() {
  return (
    <PageShell>
      <section className="page-title">
        <p>Акции и сертификаты</p>
        <h1>
          Больше поводов
          <br />
          <em>позаботиться о себе</em>
        </h1>
      </section>
      <section className="offers-page-grid full-section">
        {offers.map(([number, title, text], index) => (
          <article className={index === 0 ? "featured" : ""} key={title}>
            <span>{number}</span>
            <div>
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <Link to="/contacts">Воспользоваться ↗</Link>
          </article>
        ))}
      </section>
      <section className="certificate-wide full-section">
        <div>
          <p>Подарочный сертификат</p>
          <h2>
            Дарите не вещи.
            <br />
            <em>Дарите состояние.</em>
          </h2>
        </div>
        <Link to="/contacts">Оформить сертификат ↗</Link>
      </section>
    </PageShell>
  );
}
