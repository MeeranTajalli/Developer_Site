import { useMemo, useState } from 'react'
import PROJECTS from '@/data/projects'
import ProjectCard from '@/components/cards/ProjectCard'

export default function ProjectsPage() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')
  const [limit, setLimit] = useState(12)

  const tags = useMemo(() => ['All', ...new Set(PROJECTS.flatMap(p => p.tags||[]))], [])
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter(p =>
      (tag === 'All' || (p.tags||[]).includes(tag)) &&
      (p.name.toLowerCase().includes(q) || (p.desc||'').toLowerCase().includes(q))
    )
  }, [query, tag])

  return (
    <section className="py-12">
      <div className="mb-6 flex flex-wrap gap-3">
        <input
          value={query}
          onChange={e=>setQuery(e.target.value)}
          placeholder="Search projects…"
          className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm"
        />
        <select value={tag} onChange={e=>setTag(e.target.value)} className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm">
          {tags.map(t => <option key={t}>{t}</option>)}
        </select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.slice(0, limit).map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>

      {limit < filtered.length && (
        <button onClick={()=>setLimit(l => l+12)} className="mt-8 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm">
          Load more
        </button>
      )}
    </section>
  )
}
