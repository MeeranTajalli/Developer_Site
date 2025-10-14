import { useMemo, useState } from "react";
import styled, { css } from "styled-components";
import PROJECTS from "@/data/projects";
import ProjectCard from "@/components/cards/ProjectCard";

const PageSection = styled.section`
  padding: 3rem 0;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const sharedInputStyles = css`
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceSolid};
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textPrimary};
  min-width: 12rem;
  transition: border-color 150ms ease, box-shadow 150ms ease, background 150ms ease, color 150ms ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.accent};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.outline};
  }
`;

const TextInput = styled.input`
  ${sharedInputStyles}
`;

const SelectInput = styled.select`
  ${sharedInputStyles}
`;

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

const LoadMoreButton = styled.button`
  margin-top: 2rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.buttonSecondaryBorder};
  background: ${({ theme }) => theme.buttonSecondaryBg};
  color: ${({ theme }) => theme.buttonSecondaryText};
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  transition: background 150ms ease, border-color 150ms ease, color 150ms ease;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.buttonSecondaryHover};
    color: ${({ theme }) => theme.textPrimary};
    border-color: ${({ theme }) => theme.buttonSecondaryBorder};
  }
`;

export default function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("All");
  const [limit, setLimit] = useState(12);

  const tags = useMemo(() => ["All", ...new Set(PROJECTS.flatMap((project) => project.tags || []))], []);
  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return PROJECTS.filter(
      (project) =>
        (tag === "All" || (project.tags || []).includes(tag)) &&
        (project.name.toLowerCase().includes(q) || (project.desc || "").toLowerCase().includes(q))
    );
  }, [query, tag]);

  return (
    <PageSection>
      <Filters>
        <TextInput
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search projects..."
        />
        <SelectInput value={tag} onChange={(event) => setTag(event.target.value)}>
          {tags.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </SelectInput>
      </Filters>

      <ProjectsGrid>
        {filtered.slice(0, limit).map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </ProjectsGrid>

      {limit < filtered.length ? (
        <LoadMoreButton onClick={() => setLimit((value) => value + 12)}>Load more</LoadMoreButton>
      ) : null}
    </PageSection>
  );
}
