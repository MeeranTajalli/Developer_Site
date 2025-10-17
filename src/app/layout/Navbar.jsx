import { useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PROFILE from "@/data/profile";
import { Github, Linkedin, Download, Moon, Sun } from "lucide-react";
import useTheme from "@/styles/useTheme";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.navBorder};
  background: ${({ theme }) => theme.navBackground};
  backdrop-filter: blur(12px);
  transition: background 250ms ease, border-color 250ms ease;
`;

const Inner = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Brand = styled.a`
  font-weight: 600;
  letter-spacing: -0.02em;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;
`;

const DesktopNav = styled.nav`
  display: none;
  gap: 1.5rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.navLink};
  transition: color 250ms ease;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: inherit;
  padding-bottom: 0.2rem;
  transition: color 220ms ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 2px;
    border-radius: 999px;
    background: ${({ theme }) => theme.accent};
    transform: scaleX(0);
    transform-origin: left;
    opacity: 0;
    transition:
      transform 260ms ease,
      opacity 260ms ease;
  }

  &:hover {
    color: ${({ theme }) => theme.navLinkHover};

    &::after {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      transition: opacity 150ms ease;
    }

    &:hover::after {
      transform: none;
      opacity: 1;
    }
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ThemeToggle = styled.div`
  margin-left: 0.75rem;
`;

const baseInteractive = `
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid;
  padding: 0.375rem 0.625rem;
  font-size: 0.75rem;
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;
`;

const ActionButton = styled.a`
  ${baseInteractive}
  border-color: ${({ theme }) => theme.buttonSecondaryBorder};
  background: ${({ theme }) => theme.buttonSecondaryBg};
  color: ${({ theme }) => theme.buttonSecondaryText};

  &:hover {
    background: ${({ theme }) => theme.buttonSecondaryHover};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

const ResumeButton = styled(ActionButton)`
  display: none;
  padding: 0.375rem 0.75rem;

  @media (min-width: 768px) {
    display: inline-flex;
  }
`;

const Label = styled.span`
  display: none;

  @media (min-width: 640px) {
    display: inline;
  }
`;

const ToggleButton = styled.button`
  ${baseInteractive}
  padding: 0.375rem;
  border-color: ${({ theme }) => theme.buttonSecondaryBorder};
  background: ${({ theme }) => theme.buttonSecondaryBg};
  color: ${({ theme }) => theme.buttonSecondaryText};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.buttonSecondaryHover};
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export default function Navbar() {
  const theme = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isLight = theme.name === "light";

  const navItems = useMemo(
    () => [
      { label: "Experience", section: "experience" },
      { label: "Projects", section: "projects" },
      { label: "Education", section: "education" },
      { label: "Skills", section: "skills" },
      { label: "Extra-Curriculars", section: "extras" },
      { label: "Contact", section: "contact" },
    ],
    []
  );

  const handleSectionNavigation = useCallback(
    (section) => (event) => {
      event.preventDefault();
      const targetId = section;

      if (pathname !== "/") {
        navigate(`/#${targetId}`);
        return;
      }

      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.history.replaceState) {
          window.history.replaceState(null, "", `#${targetId}`);
        }
      }
    },
    [pathname, navigate]
  );

  return (
    <Wrapper>
      <Inner>
        <Brand href="/#home" onClick={handleSectionNavigation("home")}>
          {PROFILE.name}
        </Brand>
        <DesktopNav>
          {navItems.map((item) => (
            <NavLink
              key={item.section}
              href={`/#${item.section}`}
              onClick={handleSectionNavigation(item.section)}
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink href="/projects">All Projects</NavLink>
        </DesktopNav>
        <Actions>
          <ActionButton href={PROFILE.links.github} target="_blank" rel="noreferrer">
            <Github size={16} />
            <Label>GitHub</Label>
          </ActionButton>
          <ActionButton href={PROFILE.links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} />
            <Label>LinkedIn</Label>
          </ActionButton>
          <ResumeButton
            href={PROFILE.links.resumeUrl}
            target="_blank"
            rel="noopener"
          >
            <Download size={14} />
            Resume
          </ResumeButton>
          <ThemeToggle>
            <ToggleButton
              onClick={theme.toggleTheme}
              aria-label="Toggle theme"
              aria-pressed={theme.name === "light"}
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </ToggleButton>
          </ThemeToggle>
        </Actions>
      </Inner>
    </Wrapper>
  );
}
