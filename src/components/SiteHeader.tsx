import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import logoImage from "../assets/radost-logo.png";

const links = [
  ["/about", "О нас"],
  ["/services", "Услуги"],
  ["/works", "Наши работы"],
  ["/offers", "Акции"],
  ["/contacts", "Контакты"],
];

export default function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Закрывать меню при смене страницы
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Блокировать скролл страницы, когда открыто мобильное меню
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Закрытие по Escape
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);

  return (
    <div className={overlay ? "relative z-30" : "relative z-30 bg-[#29251f]"}>
      <header className="mx-auto flex min-h-20 w-full items-center justify-between px-5 text-white sm:px-10 lg:min-h-24 lg:px-[5vw]">
        {/* Логотип */}
        <Link
          to="/"
          className="shrink-0 rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          aria-label="Радость — главная"
        >
          <img
            src={logoImage}
            alt="Радость"
            className="h-16 w-20 object-contain brightness-0 invert sm:h-20 sm:w-24 lg:w-28"
          />
        </Link>

        {/* Десктопная навигация */}
        <nav
          id="site-navigation"
          aria-label="Основная навигация"
          className="hidden items-center lg:flex lg:gap-8"
        >
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `border-b-2 py-1 text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                  isActive
                    ? "border-white text-[#f3dfc0] font-medium"
                    : "border-transparent text-white/90 hover:border-white/60 hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Правая кнопка записи (десктоп) */}
        <Link
          to="/contacts"
          className="hidden min-h-11 items-center rounded-full border border-white/50 px-5 py-2 text-sm text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:inline-flex"
        >
          Записаться
        </Link>

        {/* Кнопка бургер-меню (мобильные) */}
        <button
          ref={toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          className="inline-flex min-h-11 shrink-0 items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden"
        >
          <span>Меню</span>
          <span className="relative flex h-4 w-4 flex-col justify-center gap-1" aria-hidden="true">
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </span>
        </button>
      </header>

      {/* Мобильное меню */}
      {open && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col justify-between overflow-y-auto bg-[#24201a] p-5 text-white sm:p-8 lg:hidden"
        >
          {/* Верхняя панель меню */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4">
            <Link to="/" onClick={() => setOpen(false)} aria-label="Радость">
              <img
                src={logoImage}
                alt="Радость"
                className="h-12 w-16 object-contain brightness-0 invert"
              />
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/50 bg-white/10 px-4 py-1.5 text-sm text-white focus-visible:outline-2 focus-visible:outline-white"
              aria-label="Закрыть меню"
            >
              <span>Закрыть</span>
              <span className="text-base leading-none" aria-hidden="true">✕</span>
            </button>
          </div>

          {/* Список ссылок */}
          <nav className="my-auto flex flex-col divide-y divide-white/10 py-2">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex py-3 text-lg font-medium tracking-wide transition-colors ${
                    isActive ? "text-[#e9d2af]" : "text-white/90 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Нижняя часть меню */}
          <div className="border-t border-white/15 pt-4">
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="flex min-h-12 w-full items-center justify-center rounded-full bg-[#eee4d2] px-6 text-sm font-semibold text-[#29251f] shadow-lg transition-transform hover:scale-[1.02]"
            >
              Подобрать время / Записаться
            </Link>

            <div className="mt-4 flex flex-col gap-1 text-center text-xs text-white/60">
              <span>г. Вологда, ул. Мира, 14 · Ежедневно 10:00–21:00</span>
              <a href="tel:+79001234567" className="text-white/80 hover:text-white">
                +7 (900) 123-45-67
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
