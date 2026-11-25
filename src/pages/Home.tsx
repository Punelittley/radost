import { useEffect, useState } from "react";
import { Link } from "react-router";
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
  slug?: string;
};

const services: Service[] = [
  {
    title: "Классический массаж",
    subtitle: "Снятие напряжения и глубокий отдых",
    duration: "30 / 60 / 90 минут",
    price: "от 750 ₽",
    description:
      "Универсальная основа телесной терапии. Снимает мышечные спазмы, улучшает лимфоток и возвращает телу лёгкость.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    slug: "classic-massage",
  },
  {
    title: "Лечебный массаж",
    subtitle: "Терапия проблемных зон и свобода движений",
    duration: "60 / 90 минут",
    price: "от 3 000 ₽",
    description:
      "Направленная работа с триггерными точками и зажимами позвоночника. Восстанавливает подвижность и избавляет от боли.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1000&q=85",
    slug: "healing-massage",
  },
  {
    title: "Массаж лица с уходом",
    subtitle: "Скульптурный лифтинг и сияние кожи",
    duration: "60 / 90 минут",
    price: "от 1 500 ₽",
    description:
      "Комплексный ритуал: моделирующий массаж лица, шеи и декольте с профессиональной сывороткой и маской по типу кожи.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    slug: "face-care-massage",
  },
  {
    title: "Массаж в 4 руки",
    subtitle: "Синхронная работа двух мастеров",
    duration: "60 минут",
    price: "от 5 000 ₽",
    description:
      "Премиальный ритуал перезагрузки нервной системы. Мозг перестаёт контролировать движения, наступает полное расслабление.",
    image:
      "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=1000&q=85",
    slug: "four-hands-massage",
  },
  {
    title: "Тренажёр Бубновского",
    subtitle: "Безопасное восстановление спины и суставов",
    duration: "60 мин / абонемент",
    price: "от 1 800 ₽",
    description:
      "Кинезитерапия на декомпрессионном тренажере под контролем инструктора. Снятие осевой нагрузки и укрепление мышечного корсета.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=85",
    slug: "bubnovsky-training",
  },
  {
    title: "Маникюр с гель-лаком",
    subtitle: "Идеальная форма и стойкое покрытие",
    duration: "90–120 минут",
    price: "1 500 ₽",
    description:
      "Аппаратный/комбинированный маникюр с выравниванием ногтевой пластины и покрытием стойким гель-лаком.",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=85",
    slug: "manicure-gel",
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

function Arrow() {
  return null;
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
          <span>Студия массажа «Радость»</span>
          <span className="hero-foot-line" />
          <span>Скоро открытие</span>
        </div>
      </section>

      <section className="intro section" id="about">
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
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-photo">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.subtitle}</p>
                <div className="service-meta">
                  <span>{service.duration}</span>
                  <strong>{service.price}</strong>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setSelectedService(service)}>
                    Быстрый просмотр
                  </button>
                  {service.slug && (
                    <Link
                      to={`/services/${service.slug}`}
                      className="ml-auto inline-flex items-center gap-1 text-xs text-[#24211d] underline underline-offset-4"
                    >
                      Подробнее
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
          <Link
            to="/services"
            className="button button-dark"
            style={{ display: "inline-flex", alignItems: "center", gap: "12px", textDecoration: "none" }}
          >
            Весь прайс-лист студии (16 услуг)
          </Link>
        </div>
      </section>

      <section className="results section" id="results">
        <div className="results-head">
          <div>
            <p className="eyebrow light">Состояние и чувства</p>
            <h2>
              То, что остаётся <em>после</em>
            </h2>
          </div>
          <p>Лёгкость в теле. Мягкий взгляд. Спокойное дыхание.</p>
        </div>
        <div className="results-cards">
          <div className="result-card">
            <h3>Глубокое расслабление</h3>
            <p>Уходит накопленное напряжение в мышцах шеи, плеч и спины. Тело наполняется лёгкостью и свободой.</p>
          </div>
          <div className="result-card">
            <h3>Внутренняя тишина</h3>
            <p>Замедление ритма и мягкая атмосфера помогают отпустить тревожные мысли и восстановить душевный ресурс.</p>
          </div>
          <div className="result-card">
            <h3>Забота и тепло</h3>
            <p>Натуральные тёплые масла, бережные руки мастеров и внимание к каждой индивидуальной особенности.</p>
          </div>
        </div>
        <p className="result-quote">
          «После сеанса я впервые за долгое время почувствовала, что никуда не тороплюсь. И это
          ощущение осталось со мной».
          <span>— Гость студии «Радость»</span>
        </p>
      </section>

      <section className="offers section" id="offers">
        <div className="section-heading offers-heading">
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
              Записаться
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
              Узнать подробнее
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
              Выбрать время
            </a>
          </article>
        </div>
      </section>

      <CareSections />

      <section className="contact section" id="contacts">
        <div className="contact-intro text-center mx-auto max-w-2xl">
          <p className="eyebrow light">Будем рады встрече</p>
          <h2>
            Студия массажа <em>«Радость»</em>
          </h2>
          <p>
            Мы готовимся к открытию нашего камерного пространства. Скоро здесь появится точный адрес, телефон и возможность онлайн-записи на ритуалы.
          </p>
          <div className="mt-8">
            <Link to="/services" className="button button-light">
              Посмотреть прайс-лист
            </Link>
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
