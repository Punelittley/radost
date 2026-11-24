import PageShell from "../components/PageShell";
import { useEffect, useRef, useState } from "react";
import EditorialImage from "../components/EditorialImage";

const works = [
  [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85",
    "Глубокая работа с телом",
  ],
  [
    "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=85",
    "Ритуал для лица",
  ],
  [
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1000&q=85",
    "Тепло и забота",
  ],
  [
    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1000&q=85",
    "Атмосфера студии",
  ],
  [
    "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?auto=format&fit=crop&w=1000&q=85",
    "Время для себя",
  ],
];

export default function WorksPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (selected !== null) dialog.current?.showModal();
  }, [selected]);
  return (
    <PageShell>
      <section className="page-title">
        <p>Наши работы</p>
        <h1>
          Моменты <em>тишины</em>
          <br />и восстановления
        </h1>
      </section>
      <section className="bg-[#e6ddce] px-6 py-20 sm:px-12 lg:px-[7vw]">
        <div className="mb-14 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><p className="max-w-md text-base leading-relaxed text-[#584e41]">Не постановка, а настроение. Прикосновения, фактуры и маленькие моменты, из которых складывается отдых.</p><span className="font-serif text-3xl italic text-[#725c3d]">Дневник студии / 01—05</span></div>
        <div className="grid items-start gap-x-12 gap-y-16 md:grid-cols-2">
        {works.map(([image, title], index) => (
          <figure className={`${index % 2 === 1 ? "md:mt-24" : ""} ${index === 4 ? "md:col-span-2 md:mx-auto md:w-3/5" : ""}`} key={title}>
            <button onClick={() => setSelected(index)} className="group block w-full bg-[#f7f2e9] p-3 text-left shadow-[0_12px_35px_#5f4a3020] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#725c3d] sm:p-5" aria-label={`Увеличить фото: ${title}`}>
              <div className={`overflow-hidden bg-[#d0c2ac] ${index % 2 === 0 ? "rounded-t-[160px]" : "rounded-[8px]"}`}>
                <EditorialImage src={image} alt={title} className={`w-full object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-[1.03] ${index % 2 === 0 ? "h-[480px]" : "h-[360px]"}`} />
              </div>
              <span className="mt-5 flex items-center justify-between gap-4 px-2 pb-3"><span className="font-serif text-3xl">{title}</span><span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#b7aa94]" aria-hidden="true">↗</span></span>
            </button>
            <figcaption className="mt-4 flex justify-between text-sm text-[#615442]"><span>0{index + 1} / Радость</span><span>Момент для себя</span></figcaption>
          </figure>
        ))}
        </div>
      </section>
      <dialog ref={dialog} onClose={() => setSelected(null)} onClick={(event) => { if (event.target === dialog.current) dialog.current.close(); }} aria-label="Просмотр фотографии" className="fixed inset-0 m-auto max-h-[92vh] w-[min(94vw,1000px)] overflow-auto rounded-2xl bg-[#f4eee3] p-4 backdrop:bg-black/80 sm:p-7">
        {selected !== null && <><div className="mb-4 flex items-center justify-between gap-4"><p className="font-serif text-3xl">{works[selected][1]}</p><button autoFocus onClick={() => dialog.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-full border border-[#9a8c76] text-2xl focus-visible:outline-2 focus-visible:outline-offset-2" aria-label="Закрыть фотографию">×</button></div><EditorialImage key={selected} src={works[selected][0]} alt={works[selected][1]} className="max-h-[70vh] w-full object-contain" /></>}
      </dialog>
      <section className="works-quote full-section">
        <p>«Мы не меняем вас. Мы помогаем телу вспомнить состояние, в котором ему хорошо».</p>
        <span>Команда студии «Радость»</span>
      </section>
    </PageShell>
  );
}
