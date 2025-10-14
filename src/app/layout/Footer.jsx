import styled from "styled-components";
import PROFILE from "@/data/profile";
import { Github, Linkedin, Mail } from "lucide-react";

const FooterWrapper = styled.footer`
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.footerBorder};
  transition: border-color 250ms ease;
`;

const FooterInner = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 250ms ease;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 0;
    padding: 2rem 1.5rem;
  }
`;

const FooterActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ActionButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.buttonSecondaryBorder};
  background: ${({ theme }) => theme.buttonSecondaryBg};
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.buttonSecondaryText};
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;

  &:hover {
    background: ${({ theme }) => theme.buttonSecondaryHover};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const Label = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 150ms ease;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <div>(c) {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
        <FooterActions>
          <ActionButton href={PROFILE.links.github} target="_blank" rel="noreferrer">
            <Github size={14} />
            <Label>GitHub</Label>
          </ActionButton>
          <ActionButton href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={14} />
            <Label>LinkedIn</Label>
          </ActionButton>
          <EmailLink href={`mailto:${PROFILE.email}`}>
            <Mail size={14} />
            {PROFILE.email}
          </EmailLink>
        </FooterActions>
      </FooterInner>
    </FooterWrapper>
  );
}