export default function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-12 md:py-16">
      <div className="mb-6 flex items-center gap-3">
        {icon ? (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/70">
            {icon}
          </div>
        ) : null}
        <h2 className="text-xl md:text-2xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}
