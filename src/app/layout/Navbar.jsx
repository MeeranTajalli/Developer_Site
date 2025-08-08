import PROFILE from '@/data/profile'
import { Github, Linkedin, Download } from 'lucide-react'

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#home" className="font-semibold tracking-tight">{PROFILE.name}</a>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#experience" className="hover:text-slate-100">Experience</a>
          <a href="#projects" className="hover:text-slate-100">Projects</a>
          <a href="#education" className="hover:text-slate-100">Education</a>
          <a href="#skills" className="hover:text-slate-100">Skills</a>
          <a href="#extras" className="hover:text-slate-100">Extra‑Curriculars</a>
          <a href="#contact" className="hover:text-slate-100">Contact</a>
          <a href="/projects" className="hover:text-slate-100">All Projects</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href={PROFILE.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
            <Github className="h-4 w-4" /><span className="hidden sm:inline">GitHub</span>
          </a>
          <a href={PROFILE.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-2.5 py-1.5 text-xs text-slate-200 hover:bg-slate-800">
            <Linkedin className="h-4 w-4" /><span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a href={PROFILE.links.resumeUrl} className="hidden md:inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-100 hover:bg-slate-800">
            <Download className="h-3.5 w-3.5" /> Resume
          </a>
        </div>
      </div>
    </div>
  )
}
