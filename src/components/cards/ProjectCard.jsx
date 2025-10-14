import { motion } from "framer-motion";
import styled from "styled-components";
import { ExternalLink, Code2, Monitor } from "lucide-react";

const CardContainer = styled(motion.div)`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  backdrop-filter: blur(10px);
  transition: border-color 250ms ease, background 250ms ease;
`;

const CardHeader = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};
  transition: border-color 250ms ease;
`;

const CardTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 1rem;
  transition: color 250ms ease;
`;

const CardBody = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Description = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  transition: color 250ms ease;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.tagBorder};
  background: ${({ theme }) => theme.tagBg};
  padding: 0.25rem 0.625rem;
  font-size: 0.75rem;
  transition: border-color 250ms ease, background 250ms ease;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 0.5rem;
`;

const LinkAnchor = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.linkAccent};
  white-space: nowrap;
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.linkAccentHover};
  }
`;

export default function ProjectCard({ project, index = 0 }) {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ y: -6, scale: 1.01, transition: { type: "spring", stiffness: 220, damping: 18 } }}
    >
      <CardHeader>
        <CardTitle>
          <Code2 size={16} />
          {project.name}
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Description>{project.desc}</Description>
        {project.tags?.length ? (
          <TagList>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagList>
        ) : null}
        <Links>
          {project.previewUrl ? (
            <LinkAnchor href={project.previewUrl} target="_blank" rel="noopener noreferrer">
              <Monitor size={14} />
              Live Preview
            </LinkAnchor>
          ) : null}
          {(project.links || []).map((link) => (
            <LinkAnchor key={link.href} href={link.href} target="_blank" rel="noreferrer">
              <ExternalLink size={14} />
              {link.label}
            </LinkAnchor>
          ))}
        </Links>
      </CardBody>
    </CardContainer>
  );
}