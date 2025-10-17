import styled from "styled-components";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ExperienceList from "@/components/lists/ExperienceList";
import ProjectCard from "@/components/cards/ProjectCard";
import EXPERIENCE from "@/data/experience";
import PROJECTS from "@/data/projects";
import EDUCATION from "@/data/education";
import SKILLS from "@/data/skills";
import EXTRAS from "@/data/extras";
import { Briefcase, Code2, GraduationCap, Award, Sparkles } from "lucide-react";

const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const MoreProjectsLink = styled.a`
  margin-top: 1.5rem;
  display: inline-block;
  color: ${({ theme }) => theme.linkAccent};
  font-size: 0.9375rem;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.linkAccentHover};
    text-decoration: underline;
  }
`;

const EducationList = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const EducationItem = styled.a`
  position: relative;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceAlt};
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  box-shadow: 0 16px 36px -24px rgba(15, 23, 42, 0.4);
  transition:
    border-color 340ms ease,
    background 340ms ease,
    box-shadow 340ms ease,
    transform 340ms ease;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid transparent;
    transition: border-color 340ms ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px -18px ${({ theme }) => theme.accentStrong ?? theme.accent};

    &::before {
      border-color: ${({ theme }) => (theme.accentStrong ?? theme.accent) + "33"};
    }
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.outline};
  }
`;

const EducationSchool = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 250ms ease;
`;

const EducationDegree = styled.div`
  color: ${({ theme }) => theme.textMuted};
  font-size: 0.875rem;
  transition: color 250ms ease;
`;

const EducationPeriod = styled.div`
  color: ${({ theme }) => theme.textExtraMuted};
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: color 250ms ease;
`;

const SkillsGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const SkillCategory = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceMuted};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 18px 34px -24px rgba(15, 23, 42, 0.42);
  transition:
    border-color 340ms ease,
    background 340ms ease,
    box-shadow 340ms ease,
    transform 340ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px -18px ${({ theme }) => theme.accentStrong ?? theme.accent};
  }
`;

const SkillHeading = styled.h4`
  margin: 0;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.textMuted};
  transition: color 250ms ease;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled.span`
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.tagBorder};
  background: ${({ theme }) => theme.tagBg};
  padding: 0.375rem 0.75rem;
  font-size: 0.75rem;
  transition: border-color 250ms ease, background 250ms ease, color 250ms ease;

  &:hover {
    border-color: ${({ theme }) => theme.accent};
    background: ${({ theme }) => (theme.accent + "1f")};
    color: ${({ theme }) => theme.linkAccentHover};
  }
`;

const ExtrasGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ExtraCard = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  padding: 1.25rem;
  transition: border-color 250ms ease, background 250ms ease;
`;

const ExtraTitle = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin-bottom: 0.5rem;
  transition: color 250ms ease;
`;

const ExtraList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: disc;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 250ms ease;
`;

export default function Home() {
  const featured = PROJECTS.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <Hero />

      <Section id="experience" title="Experience" icon={<Briefcase size={20} />}>
        <ExperienceList jobs={EXPERIENCE} />
      </Section>

      <Section id="projects" title="Projects" icon={<Code2 size={20} />}>
        <ProjectsGrid>
          {featured.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </ProjectsGrid>
        <MoreProjectsLink href="/projects">View all projects</MoreProjectsLink>
      </Section>

      <Section id="education" title="Education" icon={<GraduationCap size={20} />}>
        <EducationList>
          {EDUCATION.map((item) => (
            <EducationItem
              key={item.school}
              href={item.url}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${item.school} website`}
            >
              <EducationSchool>{item.school}</EducationSchool>
              <EducationDegree>{item.degree}</EducationDegree>
              <EducationPeriod>{item.period}</EducationPeriod>
            </EducationItem>
          ))}
        </EducationList>
      </Section>

      <Section id="skills" title="Skills" icon={<Award size={20} />}>
        <SkillsGrid>
          {Object.entries(SKILLS).map(([category, items]) => (
            <SkillCategory key={category}>
              <SkillHeading>{category}</SkillHeading>
              <SkillTags>
                {items.map((skill) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillTags>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Section>

      <Section id="extras" title="Extra-Curriculars" icon={<Sparkles size={20} />}>
        <ExtrasGrid>
          {EXTRAS.map((extra) => (
            <ExtraCard key={extra.title}>
              <ExtraTitle>{extra.title}</ExtraTitle>
              <ExtraList>
                {extra.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ExtraList>
            </ExtraCard>
          ))}
        </ExtrasGrid>
      </Section>
    </>
  );
}
