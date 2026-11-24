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
      <section className="contact-page full-section">
        <div className="contact-panel">
          <span>Запись и вопросы</span>
          <a href="tel:+79001234567">+7 (900) 123-45-67</a>
          <a href="https://t.me/" target="_blank" rel="noreferrer">
            Написать в Telegram ↗
          </a>
        </div>
        <div className="contact-panel">
          <span>Мы находимся</span>
          <h2>
            г. Вологда
            <br />
            ул. Мира, 14
          </h2>
          <p>
            Ежедневно
            <br />с 10:00 до 21:00
          </p>
        </div>
        <div className="map-card">
          <span>59.2205° N · 39.8915° E</span>
          <strong>Радость</strong>
        </div>
      </section>
    </PageShell>
  );
}
