import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/ui/button';
import PROFILE from '@/data/profile';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:py-24"
    >
      {/* Left Column - Text */}
      <div className="space-y-6">
        <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
          Building smooth, fast,{' '}
          <span className="bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">
            developer experiences
          </span>
        </h1>
        <p className="max-w-xl text-slate-300">{PROFILE.blurb}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild className="h-11 rounded-xl">
            <a href="#projects" className="inline-flex items-center gap-2">
              Explore Projects <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="secondary"
            className="h-11 rounded-xl border border-slate-700 bg-slate-900/60"
          >
            <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2">
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="flex gap-4 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {PROFILE.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {PROFILE.phone}
          </span>
        </div>
      </div>

{/* Right Column - Image */}
<div className="relative mx-auto h-80 w-64 md:h-[28rem] md:w-80 overflow-hidden rounded-3xl">
  {/* Gradient background */}
  <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-cyan-400/20" />
  <div className="absolute inset-0 border border-slate-800/70 rounded-3xl" />
  <div className="absolute inset-0 [mask-image:radial-gradient(white,transparent_65%)]" />

  {/* Your image */}
  <img
    src="/Profile.png"
    alt="Profile"
    className="absolute inset-0 h-full w-full object-cover object-top rounded-3xl"
  />
</div>



    </section>
  );
}
