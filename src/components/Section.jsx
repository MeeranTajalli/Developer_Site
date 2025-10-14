import { motion } from "framer-motion";
import styled from "styled-components";

const SectionWrapper = styled(motion.section)`
  scroll-margin-top: 6rem;
  padding: 3rem 0;

  @media (min-width: 768px) {
    padding: 4rem 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.iconBackground};
  transition: border-color 250ms ease, background 250ms ease;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function Section({ id, title, icon, children }) {
  return (
    <SectionWrapper
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SectionHeader>
        {icon ? <IconWrapper>{icon}</IconWrapper> : null}
        <SectionTitle>{title}</SectionTitle>
      </SectionHeader>
      {children}
    </SectionWrapper>
  );
}