import PROFILE from '@/data/profile'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-800/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-slate-400 md:flex-row md:px-6">
        <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
            <Github className="h-3.5 w-3.5" /><span className="hidden sm:inline">GitHub</span>
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
            <Linkedin className="h-3.5 w-3.5" /><span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-1 hover:text-slate-200">
            <Mail className="h-3.5 w-3.5" /> {PROFILE.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
