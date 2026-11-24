import { useState } from "react";
import { Link } from "react-router";
import daisyImage from "../assets/daisy-care.png";
import QuietMoment from "./QuietMoment";

const priceGroups = [
  {
    name: "Для тела",
    items: [
      ["Расслабляющий массаж", "60 минут", "от 3 000 ₽"],
      ["Глубокое восстановление", "90 минут", "от 4 500 ₽"],
      ["Массаж спины и шеи", "30 минут", "от 1 800 ₽"],
    ],
  },
  {
    name: "Для лица",
    items: [
      ["Скульптурный массаж", "60 минут", "от 2 500 ₽"],
      ["Лимфодренажный массаж", "45 минут", "от 2 200 ₽"],
      ["Лицо, шея и декольте", "75 минут", "от 3 200 ₽"],
    ],
  },
  {
    name: "SPA-ритуалы",
    items: [
      ["Тёплое масло и тишина", "90 минут", "от 4 800 ₽"],
      ["Полное обновление", "120 минут", "от 5 500 ₽"],
      ["Ритуал лёгкости", "60 минут", "от 3 600 ₽"],
    ],
  },
];

const visitSteps = [
  ["01", "Знакомимся", "Обсуждаем самочувствие и ваши пожелания. Выбираем комфортную интенсивность."],
  ["02", "Замедляемся", "Вы устраиваетесь в тёплом кабинете. Всё остальное может немного подождать."],
  ["03", "Восстанавливаемся", "Мастер работает в вашем ритме, уделяя внимание каждой зоне напряжения."],
  ["04", "Не спешим", "После ритуала оставляем время на отдых, воду и мягкое возвращение к делам."],
];

const focusStyle = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#705a3b]";

export default function CareSections() {
  const [category, setCategory] = useState(0);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <>
      <section id="prices" className="w-full bg-[#e5decd] px-5 py-20 text-[#29271f] sm:px-10 lg:px-[6vw] lg:py-28" aria-labelledby="prices-heading">
        <div className="mb-10 flex items-center gap-4 text-sm">
          <span className="grid size-8 place-items-center rounded-full border border-[#847b63]">05</span>
          <span>Меню заботы о себе</span>
        </div>
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative isolate flex min-h-[430px] flex-col justify-end overflow-hidden rounded-t-[130px] rounded-b-3xl bg-[#d3c9ad] p-7 sm:min-h-[560px] sm:p-10">
            {!imageFailed && <img className="absolute inset-0 -z-10 h-full w-full object-cover" src={daisyImage} alt="Нежная ромашка в руке на фоне натурального льна" onError={() => setImageFailed(true)} />}
            <div className="max-w-sm rounded-[30px] border border-[#e5dfcb] bg-[#ece4cc]/95 px-7 py-6">
              <p className="mb-3 text-sm uppercase tracking-[0.18em]">Радость в деталях</p>
              <h2 id="prices-heading" className="font-serif text-6xl leading-[0.85] sm:text-8xl">Прайс<span className="block italic">лист</span></h2>
              <p className="mt-5 text-sm leading-relaxed">Маленькие ритуалы.<br />Большая забота о себе.</p>
            </div>
          </div>
          <div className="flex flex-col justify-center py-4">
            <p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#65563c]">Выберите своё настроение</p>
            <h3 className="font-serif text-5xl leading-[0.95] sm:text-6xl">У каждой паузы —<br /><em className="text-[#75613d]">свой ритуал</em></h3>
            <div className="my-8 flex flex-wrap gap-2" role="tablist" aria-label="Категории прайс-листа">
              {priceGroups.map((group, index) => (
                <button key={group.name} id={`price-tab-${index}`} role="tab" aria-selected={category === index} aria-controls="price-panel" tabIndex={category === index ? 0 : -1} onClick={() => setCategory(index)} onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                    event.preventDefault();
                    const next = (index + (event.key === "ArrowRight" ? 1 : -1) + priceGroups.length) % priceGroups.length;
                    setCategory(next);
                    document.getElementById(`price-tab-${next}`)?.focus();
                  }
                }} className={`min-h-11 rounded-full border px-5 text-sm transition-colors ${focusStyle} ${category === index ? "border-[#333226] bg-[#333226] text-[#fffaf0]" : "border-[#99907a] text-[#38352b] hover:bg-[#d7ceb8]"}`}>{group.name}</button>
              ))}
            </div>
            <div id="price-panel" role="tabpanel" aria-labelledby={`price-tab-${category}`}>
              {priceGroups[category].items.map(([name, duration, price]) => (
                <div key={name} className="flex flex-wrap items-center justify-between gap-3 border-t border-[#b3aa95] py-5">
                  <div><h4 className="text-base">{name}</h4><p className="mt-1 text-sm text-[#5f594b]">{duration}</p></div>
                  <strong className="whitespace-nowrap text-base font-medium">{price}</strong>
                </div>
              ))}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#5f594b]">Стоимость указана для знакомства с программами. Детали и подходящий формат уточним перед визитом.</p>
            <Link to="/contacts" className={`mt-7 inline-flex min-h-12 w-fit items-center gap-7 rounded-full bg-[#333226] px-7 py-3 text-sm text-[#fffaf0] ${focusStyle}`}>Подобрать время <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f1e8] px-5 py-20 text-[#2d2a23] sm:px-10 lg:px-[6vw] lg:py-28" aria-labelledby="visit-heading">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="mb-4 text-sm uppercase tracking-[0.12em] text-[#6a593e]">Без спешки и лишних волнений</p><h2 id="visit-heading" className="text-5xl leading-none sm:text-7xl">Ваш первый <em className="text-[#79613d]">визит</em></h2></div>
          <p className="max-w-sm text-sm leading-relaxed text-[#60594f]">Ничего не нужно делать идеально.<br />Достаточно прийти и позволить себе отдохнуть.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visitSteps.map(([number, title, text]) => (
            <article key={number} className="rounded-t-[75px] rounded-b-2xl border border-[#d5ccbc] bg-[#ece5d9] px-7 py-9">
              <span className="font-serif text-4xl italic text-[#79613d]">{number}</span>
              <h3 className="mt-12 font-serif text-4xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5b554b]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <QuietMoment />
    </>
  );
}
