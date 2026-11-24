import { useEffect, useState } from "react";
import heroImage from "../assets/spa-hero.png";
import logoImage from "../assets/radost-logo.png";
import CareSections from "../components/CareSections";
import SiteHeader from "../components/SiteHeader";

type Service = {
  title: string;
  subtitle: string;
  duration: string;
  price: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    title: "Массаж лица",
    subtitle: "Лифтинг, сияние и глубокое расслабление",
    duration: "60 минут",
    price: "от 2 500 ₽",
    description:
      "Мягкая проработка лица, шеи и декольте. Снимает отёчность и напряжение, возвращает коже свежесть, а чертам — естественную выразительность.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Массаж тела",
    subtitle: "Восстановление ресурса и лёгкость",
    duration: "60 / 90 минут",
    price: "от 3 000 ₽",
    description:
      "Индивидуальная работа с телом: от бережного расслабления до глубокой проработки мышц. Ритм и интенсивность подбираются под ваше состояние.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "SPA-ритуал",
    subtitle: "Тёплое масло, уход и тишина",
    duration: "120 минут",
    price: "от 5 500 ₽",
    description:
      "Комплексный ритуал для полного переключения: прогрев, скрабирование, ароматный массаж и финальный уход. Два часа только для себя.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85",
  },
];

const benefits = [
  [
    "01",
    "С заботой о вас",
    "Перед сеансом мы бережно уточняем запрос и подбираем подходящую технику.",
  ],
  [
    "02",
    "Опытные мастера",
    "Дипломированные специалисты, которые слышат тело и работают деликатно.",
  ],
  [
    "03",
    "Тихое пространство",
    "Тёплый свет, натуральные ароматы и никакой спешки — только ваш ритм.",
  ],
];

const gallery = [
  {
    src: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=1200&q=85",
    alt: "Атмосфера массажной студии",
    className: "gallery-main",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85",
    alt: "Массаж спины",
    className: "",
  },
  {
    src: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=900&q=85",
    alt: "Натуральное массажное масло",
    className: "",
  },
];

function Arrow({ light = false }: { light?: boolean }) {
  return (
    <span className={`arrow ${light ? "arrow-light" : ""}`} aria-hidden="true">
      ↗
    </span>
  );
}

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);


  return (
    <main>
      <section className="hero" id="home" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-shade" />
        <SiteHeader overlay />

        <div className="hero-content">
          <p className="eyebrow light">Студия массажа и заботы о себе</p>
          <h1>
            Тишина, в которой
            <br /> возвращается <em>радость</em>
          </h1>
          <p className="hero-copy">
            Бережные массажные практики для лёгкости в теле,
            <br /> спокойствия внутри и вашего красивого самочувствия.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#services">
              Выбрать ритуал <Arrow />
            </a>
            <a className="text-link light-link" href="#about">
              Познакомиться со студией
            </a>
          </div>
        </div>
        <div className="hero-foot">
          <span>г. Вологда</span>
          <span className="hero-foot-line" />
          <span>Ежедневно, 10:00–21:00</span>
        </div>
      </section>

      <section className="intro section" id="about">
        <div className="section-label">
          <span>01</span>
          <span>О пространстве</span>
        </div>
        <div className="intro-copy">
          <p className="eyebrow">Место, где можно выдохнуть</p>
          <h2>
            Мы верим, что забота о теле —
            <br /> это не роскошь, а способ
            <br /> <em>вернуться к себе</em>
          </h2>
          <p className="large-copy">
            «Радость» — камерная студия массажа, созданная для вашего восстановления. Здесь нет
            случайных деталей: от мягкого света до прикосновений мастера всё помогает замедлиться и
            почувствовать себя.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text]) => (
            <article className="benefit-card" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div className="section-label">
            <span>02</span>
            <span>Наши услуги</span>
          </div>
          <div>
            <p className="eyebrow">Ваше время для себя</p>
            <h2>
              Выберите свою <em>паузу</em>
            </h2>
          </div>
          <p>
            Каждый сеанс начинается с разговора. Мы подберём практику под ваш запрос и текущее
            состояние.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.title}>
              <div className="service-photo">
                <img src={service.image} alt={service.title} />
                <span>0{index + 1}</span>
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <div className="service-meta">
                  <span>{service.duration}</span>
                  <strong>{service.price}</strong>
                </div>
                <button onClick={() => setSelectedService(service)}>
                  Подробнее <Arrow />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="results section" id="results">
        <div className="results-head">
          <div className="section-label section-label-light">
            <span>03</span>
            <span>Атмосфера и результаты</span>
          </div>
          <h2>
            То, что остаётся <em>после</em>
          </h2>
          <p>Лёгкость в теле. Мягкий взгляд. Спокойное дыхание.</p>
        </div>
        <div className="gallery">
          {gallery.map((item, index) => (
            <figure className={item.className} key={item.src}>
              <img src={item.src} alt={item.alt} />
              {index === 0 && (
                <button className="play" aria-label="Смотреть видео об атмосфере студии">
                  <span>▶</span>
                </button>
              )}
              <figcaption>0{index + 1} / Радость</figcaption>
            </figure>
          ))}
        </div>
        <p className="result-quote">
          «После сеанса я впервые за долгое время почувствовала, что никуда не тороплюсь. И это
          ощущение осталось со мной».
          <span>— Анна, гость студии</span>
        </p>
      </section>

      <section className="offers section" id="offers">
        <div className="section-heading offers-heading">
          <div className="section-label">
            <span>04</span>
            <span>С особой заботой</span>
          </div>
          <div>
            <p className="eyebrow">Приятные поводы</p>
            <h2>
              Акции и <em>предложения</em>
            </h2>
          </div>
        </div>
        <div className="offer-grid">
          <article className="offer-card offer-featured">
            <span className="offer-tag">Первое знакомство</span>
            <div>
              <p className="offer-number">−20%</p>
              <h3>На первый массаж</h3>
              <p>Познакомьтесь со студией и своим мастером в комфортном ритме.</p>
            </div>
            <a href="#contacts">
              Записаться <Arrow light />
            </a>
          </article>
          <article className="offer-card">
            <span className="offer-tag">Выгодный курс</span>
            <div>
              <p className="offer-number">5 + 1</p>
              <h3>Шестой сеанс в подарок</h3>
              <p>При покупке курса из пяти массажей одной выбранной программы.</p>
            </div>
            <a href="#contacts">
              Узнать подробнее <Arrow />
            </a>
          </article>
          <article className="offer-card offer-soft">
            <span className="offer-tag">Для двоих</span>
            <div>
              <p className="offer-number">−15%</p>
              <h3>Радость, которой делятся</h3>
              <p>Приходите вместе с близким человеком и замедлитесь вдвоём.</p>
            </div>
            <a href="#contacts">
              Выбрать время <Arrow />
            </a>
          </article>
        </div>
      </section>

      <CareSections />

      <section className="contact section" id="contacts">
        <div className="contact-intro">
          <div className="section-label section-label-light">
            <span>06</span>
            <span>Контакты</span>
          </div>
          <p className="eyebrow light">Будем рады встрече</p>
          <h2>
            Запишитесь на свою <em>паузу</em>
          </h2>
          <p>Напишите нам — администратор поможет выбрать услугу, мастера и удобное время.</p>
          <a className="button button-light" href="https://t.me/" target="_blank" rel="noreferrer">
            Написать в Telegram <Arrow />
          </a>
        </div>
        <div className="contact-details">
          <div>
            <span>Телефон</span>
            <a href="tel:+79001234567">+7 (900) 123-45-67</a>
          </div>
          <div>
            <span>Адрес</span>
            <p>г. Вологда, ул. Мира, 14</p>
          </div>
          <div>
            <span>Режим работы</span>
            <p>Ежедневно, 10:00–21:00</p>
          </div>
          <div>
            <span>Социальные сети</span>
            <p>
              <a href="https://vk.com/" target="_blank" rel="noreferrer">
                ВКонтакте
              </a>{" "}
              /{" "}
              <a href="https://t.me/" target="_blank" rel="noreferrer">
                Telegram
              </a>
            </p>
          </div>
        </div>
        <footer>
          <img src={logoImage} alt="Радость" />
          <p>Массаж, который возвращает к себе</p>
          <a href="#home">Наверх ↑</a>
        </footer>
      </section>

      {selectedService && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedService(null)}
        >
          <div
            className="service-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedService(null)}
              aria-label="Закрыть"
            >
              ×
            </button>
            <img src={selectedService.image} alt="" />
            <div>
              <p className="eyebrow">Подробнее об услуге</p>
              <h2 id="modal-title">{selectedService.title}</h2>
              <p>{selectedService.description}</p>
              <div className="modal-meta">
                <span>{selectedService.duration}</span>
                <strong>{selectedService.price}</strong>
              </div>
              <a
                className="button button-dark"
                href="#contacts"
                onClick={() => setSelectedService(null)}
              >
                Записаться <Arrow light />
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
