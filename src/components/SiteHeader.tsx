import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import logoImage from "../assets/radost-logo.png";

const links = [
  ["/about", "О нас"], ["/services", "Услуги"], ["/works", "Наши работы"],
  ["/offers", "Акции"], ["/contacts", "Контакты"],
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); window.scrollTo(0, 0); }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <div className={overlay ? "relative z-30" : "relative z-30 bg-[#29251f]"}>
      <header className="mx-auto flex min-h-20 w-full flex-wrap items-center justify-between gap-x-4 border-b border-white/30 px-5 text-white sm:px-10 lg:min-h-24 lg:flex-nowrap lg:gap-6 lg:px-[5vw]">
        <Link to="/" className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" aria-label="Радость — главная">
          <img src={logoImage} alt="Радость" className="h-20 w-24 object-contain brightness-0 invert lg:w-28" />
        </Link>
        <nav id="site-navigation" aria-label="Основная навигация" className={`${open ? "flex" : "hidden"} order-last mb-5 w-full flex-col rounded-3xl border border-[#c7b79d]/40 bg-[#29251f] px-5 py-3 shadow-xl lg:order-none lg:mb-0 lg:flex lg:w-auto lg:flex-row lg:gap-7 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          {links.map(([path, label], index) => <NavLink key={path} to={path} onClick={() => setOpen(false)} className={({ isActive }) => `flex min-h-14 items-center justify-between gap-5 border-b border-white/15 py-3 text-white last:border-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:min-h-11 lg:border-b lg:px-1 lg:py-0 lg:text-base ${isActive ? "text-[#e6cfaa] lg:border-white" : "lg:border-transparent lg:hover:border-white/70"}`}><span className="flex items-center gap-4"><span className="text-xs text-[#c7b79d] lg:hidden">0{index + 1}</span><span className="font-serif text-3xl lg:font-sans lg:text-base">{label}</span></span><span className="text-[#c7b79d] lg:hidden" aria-hidden="true">↗</span></NavLink>)}
          <Link to="/contacts" onClick={() => setOpen(false)} className="my-4 inline-flex min-h-12 items-center justify-center gap-8 rounded-full bg-[#eee4d2] px-5 text-sm text-[#29251f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden">Подобрать время <span aria-hidden="true">↗</span></Link>
        </nav>
        <Link to="/contacts" className="hidden min-h-11 items-center gap-4 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex">Записаться <span className="grid size-11 place-items-center rounded-full border border-white/60" aria-hidden="true">↗</span></Link>
        <button ref={toggle} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="site-navigation" aria-label={open ? "Закрыть меню" : "Открыть меню"} className="inline-flex min-h-11 shrink-0 items-center gap-3 rounded-full border border-white/50 bg-white/5 px-4 text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden">
          <span>{open ? "Закрыть" : "Меню"}</span>
          <span className="relative block h-5 w-5" aria-hidden="true">
            <span className={`absolute top-[7px] left-0 h-px w-5 bg-white motion-safe:transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
            <span className={`absolute top-[13px] left-0 h-px w-5 bg-white motion-safe:transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
          </span>
        </button>
      </header>
    </div>
  );
}
