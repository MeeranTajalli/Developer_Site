import { ExternalLink, Code2 } from 'lucide-react'
export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 transition-transform hover:-translate-y-1">
      <div className="p-5 border-b border-slate-800/60">
        <h3 className="flex items-center gap-2 text-slate-100 font-semibold">
          <Code2 className="h-4 w-4" /> {project.name}
        </h3>
      </div>
      <div className="p-5 space-y-4">
        <p className="text-sm text-slate-300">{project.desc}</p>
        <div className="flex gap-2 flex-wrap">
          {(project.tags||[]).map(t => (
            <span key={t} className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-0.5 text-xs">{t}</span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.previewUrl && (
  <a
    href={project.previewUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-block text-sky-300 hover:underline"
  >
    Live Preview →
  </a>
)}
          {(project.links||[]).map(l => (
            <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-sky-300 hover:underline">
              <ExternalLink className="h-3.5 w-3.5" /> {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
