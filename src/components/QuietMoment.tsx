import { Link } from "react-router";
import heroImage from "../assets/spa-hero.png";

export default function QuietMoment() {
  return (
    <section className="grid w-full bg-[#d9ceba] text-[#302a21] lg:grid-cols-2">
      <div className="flex min-w-0 flex-col justify-center px-5 py-14 sm:px-12 sm:py-20 lg:px-[6vw]">
        <p className="mb-6 text-sm uppercase tracking-[0.15em] text-[#655238]">Ваша маленькая традиция</p>
        <h2 className="text-[clamp(2.75rem,12vw,3.75rem)] leading-[0.98] sm:text-7xl">Оставьте миру<br />немного <em className="text-[#725b39]">тишины</em></h2>
        <p className="mt-8 max-w-md text-base leading-relaxed text-[#564b3e]">Не обязательно ждать отпуска или особенного повода. Иногда достаточно одного часа, в котором вы ничего не должны.</p>
        <div className="mt-10 flex flex-wrap gap-3 text-sm">
          {["Тёплый свет", "Мягкий текстиль", "Время без спешки"].map((item) => <span key={item} className="rounded-full border border-[#a99a80] px-4 py-3">{item}</span>)}
        </div>
        <Link to="/services" className="mt-10 inline-flex min-h-12 w-fit items-center rounded-full bg-[#302a21] px-7 py-3 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#725b39]">Найти свой ритуал</Link>
      </div>
      <div className="relative min-h-[420px] lg:min-h-[650px]">
        <img src={heroImage} alt="Тёплый кабинет с натуральными тканями и солнечным светом" className="absolute inset-0 h-full w-full object-cover" />
        <span className="absolute right-5 bottom-6 left-5 w-fit max-w-[calc(100%-2.5rem)] rounded-2xl bg-[#f5f0e6] px-5 py-3 text-sm">Здесь можно просто быть собой</span>
      </div>
    </section>
  );
}
