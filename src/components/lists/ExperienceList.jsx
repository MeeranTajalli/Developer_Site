import styled from "styled-components";

const ListWrapper = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const ExperienceCard = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  overflow: hidden;
  transition: border-color 250ms ease, background 250ms ease;
`;

const ExperienceHeader = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};
  transition: border-color 250ms ease;
`;

const Role = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;
`;

const Meta = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 250ms ease;
`;

const Points = styled.ul`
  padding: 1.25rem;
  margin: 0;
  list-style: disc;
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 250ms ease;
`;

export default function ExperienceList({ jobs }) {
  return (
    <ListWrapper>
      {jobs.map((job) => (
        <ExperienceCard key={job.role}>
          <ExperienceHeader>
            <Role>{job.role}</Role>
            <Meta>
              {job.company} - {job.period}
            </Meta>
          </ExperienceHeader>
          <Points>
            {job.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </Points>
        </ExperienceCard>
      ))}
    </ListWrapper>
  );
}