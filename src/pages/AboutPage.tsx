import PageShell from "../components/PageShell";
import QuietMoment from "../components/QuietMoment";
import EditorialImage from "../components/EditorialImage";
import daisyImage from "../assets/daisy-care.png";
import heroImage from "../assets/spa-hero.png";

const values = [
  ["Прикосновение, которое слышит", "Мы начинаем с вашего самочувствия, а не с готовой схемы. Темп, глубина и внимание всегда индивидуальны."],
  ["Знание в каждом движении", "Техника важна. Но не менее важно вовремя замедлиться, изменить давление и дать телу пространство для отдыха."],
  ["Место без лишнего шума", "Приглушённый свет, приятные фактуры и спокойный ритм помогают оставить повседневные заботы за дверью."],
];

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-title">
        <p>О студии</p>
        <h1>
          Пространство, где
          <br />
          <em>становится легче</em>
        </h1>
      </section>
      <section className="about-story full-section">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1400&q=85"
            alt="Тёплая атмосфера студии"
          />
        </div>
        <div className="about-story-copy">
          <span>Наша философия</span>
          <h2>
            Тело помнит больше,
            <br />
            чем мы осознаём
          </h2>
          <p>
            В «Радости» мы работаем через тепло, фактуры, ритм движений и паузы. Массаж ощущается не
            как услуга, а как тихий диалог прикосновений.
          </p>
          <p>
            Каждый ритуал начинается с человека: его дыхания, темпа, усталости и внутреннего
            запроса.
          </p>
        </div>
      </section>
      <section className="grid gap-12 bg-[#f3efe7] px-6 py-24 sm:px-12 lg:grid-cols-2 lg:gap-24 lg:px-[7vw]">
        <div className="relative pb-14 pr-10">
          <img src={daisyImage} alt="Ромашки и естественные детали" className="h-[520px] w-full rounded-t-full object-cover" />
          <div className="absolute right-0 bottom-0 max-w-[260px] rounded-2xl bg-[#ded2bf] p-8"><span className="font-serif text-4xl italic">Забота —<br />это внимание</span></div>
        </div>
        <div className="self-center">
          <p className="mb-5 text-sm uppercase tracking-widest text-[#735c3b]">Не правила. Наш характер.</p>
          <h2 className="mb-10 text-6xl leading-none">То, что делает<br />нас <em className="text-[#79603b]">«Радостью»</em></h2>
          {values.map(([title, text]) => <article key={title} className="border-t border-[#cfc5b4] py-6"><h3 className="font-serif text-3xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#5c554b]">{text}</p></article>)}
        </div>
      </section>
      <section className="bg-[#29251f] px-6 py-24 text-[#f5efe4] sm:px-12 lg:px-[7vw]">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="text-6xl leading-none">Продумано<br /><em className="text-[#d0b98f]">до ощущения</em></h2><p className="max-w-sm text-sm leading-relaxed text-[#d4cbbb]">Восстановление складывается из маленьких вещей. Мы уделяем им столько же внимания, сколько самому ритуалу.</p></div>
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["Свет и воздух", "Спокойные оттенки и мягкий свет помогают переключиться.", heroImage],
            ["Тактильность", "Натуральные фактуры, тепло полотенец и комфортное пространство.", daisyImage],
            ["Личное внимание", "Обсуждаем пожелания и остаёмся на связи с вашими ощущениями.", "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=85"],
          ].map(([title, text, image]) => <article key={title}><EditorialImage src={image} alt={title} className="h-72 w-full rounded-2xl object-cover" /><h3 className="mt-6 font-serif text-4xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-[#d4cbbb]">{text}</p></article>)}
        </div>
      </section>
      <section className="grid gap-10 bg-[#eee7db] px-6 py-24 sm:px-12 lg:grid-cols-2 lg:px-[7vw]">
        <h2 className="text-6xl leading-none">Вам не нужно<br /><em className="text-[#79603b]">готовиться идеально</em></h2>
        <div className="space-y-7 text-base leading-relaxed text-[#584e41]">
          <p>Приходите немного заранее, чтобы спокойно освоиться. Всё необходимое для процедуры мы подготовим.</p>
          <p>Расскажите мастеру о самочувствии, чувствительных зонах и пожеланиях. Во время сеанса можно попросить изменить давление или сделать паузу.</p>
          <p>При беременности, хронических заболеваниях или недавних операциях заранее обсудите возможность массажа с врачом.</p>
        </div>
      </section>
      <QuietMoment />
    </PageShell>
  );
}
