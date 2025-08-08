export default function ExperienceList({ jobs }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {jobs.map(job => (
        <div key={job.role} className="rounded-2xl border border-slate-800 bg-slate-900/60">
          <div className="p-5 border-b border-slate-800/60">
            <div className="text-slate-100 font-semibold">{job.role}</div>
            <div className="text-sm text-slate-400">{job.company} • {job.period}</div>
          </div>
          <ul className="p-5 space-y-2 text-sm text-slate-300 list-disc pl-5">
            {job.points.map((p,i)=> <li key={i}>{p}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}
