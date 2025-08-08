import Hero from '@/components/Hero'
import Section from '@/components/Section'
import ExperienceList from '@/components/lists/ExperienceList'
import ProjectCard from '@/components/cards/ProjectCard'
import EXPERIENCE from '@/data/experience'
import PROJECTS from '@/data/projects'
import EDUCATION from '@/data/education'
import SKILLS from '@/data/skills'
import EXTRAS from '@/data/extras'

// 👇 add these
import { Briefcase, Code2, GraduationCap, Award, Sparkles } from 'lucide-react'

export default function Home() {
  const featured = PROJECTS.filter(p => p.featured).slice(0, 3);
  return (
    <>
      <Hero />

      <Section
        id="experience"
        title="Experience"
        icon={<Briefcase className="h-5 w-5" />}
      >
        <ExperienceList jobs={EXPERIENCE} />
      </Section>

      <Section
        id="projects"
        title="Projects"
        icon={<Code2 className="h-5 w-5" />}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <a href="/projects" className="mt-6 inline-block text-sky-300 hover:underline">
          View all projects →
        </a>
      </Section>

      <Section
        id="education"
        title="Education"
        icon={<GraduationCap className="h-5 w-5" />}
      >
        <div className="space-y-4">
          {EDUCATION.map(e => (
            <div key={e.school} className="text-sm">
              <div className="text-slate-200 font-medium">{e.school}</div>
              <div className="text-slate-400">{e.degree}</div>
              <div className="text-slate-500 text-xs">{e.period}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        icon={<Award className="h-5 w-5" />}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(SKILLS).map(([k, items]) => (
            <div key={k}>
              <h4 className="mb-3 text-sm uppercase tracking-wider text-slate-400">{k}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map(s => (
                  <span key={s} className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="extras"
        title="Extra-Curriculars"
        icon={<Sparkles className="h-5 w-5" />}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {EXTRAS.map(x => (
            <div key={x.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <div className="text-slate-100 font-semibold mb-2">{x.title}</div>
              <ul className="list-disc pl-5 text-sm text-slate-300 space-y-2">
                {x.points.map((p,i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
