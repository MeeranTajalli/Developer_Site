import styled from "styled-components";

const TimelineWrapper = styled.div`
  position: relative;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: ${({ theme }) => theme.borderSubtle};
    transform: translateX(-50%);
    transition: background 250ms ease;
  }

  @media (max-width: 768px) {
    gap: 2rem;

    &::before {
      left: 1.125rem;
      transform: none;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: ${({ side }) => (side === "left" ? "flex-start" : "flex-end")};

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 2.75rem;
  }
`;

const TimelineContent = styled.div`
  position: relative;
  width: min(100%, 24rem);
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surfaceAlt};
  overflow: hidden;
  box-shadow: 0 12px 30px -16px rgba(15, 23, 42, 0.5);
  transition: border-color 250ms ease, background 250ms ease, box-shadow 250ms ease;

  &:hover {
    box-shadow: 0 18px 40px -18px rgba(14, 165, 233, 0.35);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Indicator = styled.span`
  position: absolute;
  top: 1.5rem;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.background};
  border: 3px solid ${({ theme }) => theme.accent};
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 4px ${({ theme }) => theme.surfaceSolid};
  transition: border-color 250ms ease, box-shadow 250ms ease, background 250ms ease;

  @media (max-width: 768px) {
    left: 1.125rem;
    transform: translate(-50%, -50%);
  }
`;

const ExperienceHeader = styled.div`
  padding: 1.5rem 1.75rem 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};
  transition: border-color 250ms ease;
`;

const Role = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;
`;

const Meta = styled.div`
  margin-top: 0.35rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 250ms ease;
`;

const Points = styled.ul`
  margin: 0;
  padding: 1.25rem 1.75rem 1.5rem 2.5rem;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.textSecondary};
  transition: color 250ms ease;
`;

const PointItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  line-height: 1.55;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.6rem;
    width: 0.35rem;
    height: 0.35rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.accent};
  }
`;

export default function ExperienceList({ jobs }) {
  return (
    <TimelineWrapper>
      {jobs.map((job, index) => {
        const side = index % 2 === 0 ? "left" : "right";
        return (
          <TimelineItem key={job.role} side={side}>
            <Indicator />
            <TimelineContent>
              <ExperienceHeader>
                <Role>{job.role}</Role>
                <Meta>
                  {job.company} • {job.period}
                </Meta>
              </ExperienceHeader>
              <Points>
                {job.points.map((point, pointIndex) => (
                  <PointItem key={pointIndex}>{point}</PointItem>
                ))}
              </Points>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </TimelineWrapper>
  );
}
