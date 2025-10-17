import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/ui/button";
import PROFILE from "@/data/profile";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
  100% { transform: translateY(0px); }
`;

const pulseGlow = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 var(--pulse-color);
  }
  50% {
    box-shadow: 0 0 28px 0 var(--pulse-glow);
  }
`;

const haloPulse = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 0.45;
    transform: scale(1.2);
  }
`;

const HeroSection = styled(motion.section)`
  position: relative;
  margin: 0 auto;
  max-width: 72rem;
  display: grid;
  gap: 2.5rem;
  padding: 4rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 6rem 0;
  }
`;

const CopyColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 600;
  line-height: 1.15;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Highlight = styled.span`
  background: ${({ theme }) => theme.highlightGradient};
  -webkit-background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  max-width: 40rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 1rem;
  line-height: 1.6;
  transition: color 250ms ease;
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const ExploreCTA = styled(Button)`
  position: relative;
  isolation: isolate;
  --pulse-color: ${({ theme }) => `${theme.accent}33`};
  --pulse-glow: ${({ theme }) => `${theme.accentStrong ?? theme.accent}66`};
  animation: ${pulseGlow} 2.8s ease-in-out infinite;
  transition: transform 150ms ease, box-shadow 150ms ease;

  &::after {
    content: "";
    position: absolute;
    inset: -6px;
    border-radius: inherit;
    opacity: 0;
    background: radial-gradient(circle, var(--pulse-glow), transparent 70%);
    filter: blur(2px);
    pointer-events: none;
    z-index: -1;
    animation: ${haloPulse} 2.8s ease-in-out infinite;
  }

  &:hover {
    animation-play-state: paused;
    transform: translateY(-1px);
    box-shadow: 0 18px 30px -12px ${({ theme }) => theme.accentStrong ?? theme.accent};

    &::after {
      animation-play-state: paused;
      opacity: 0.6;
      transform: scale(1.35);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;

    &::after {
      display: none;
    }
  }
`;

const InfoRow = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.textMuted};
  transition: color 250ms ease;
`;

const InfoItem = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const Showcase = styled(motion.div)`
  position: relative;
  margin: 0 auto;
  width: 16rem;
  height: 20rem;
  overflow: hidden;
  border-radius: 1.5rem;
  animation: ${float} 8s ease-in-out infinite;

  @media (min-width: 768px) {
    width: 20rem;
    height: 28rem;
  }
`;


const ProfileImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 1.5rem;
`;

const LinkContent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const copyVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delayChildren: 0.1, staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <HeroSection id="home" variants={sectionVariants} initial="hidden" animate="visible">
      <CopyColumn variants={copyVariants}>
        <motion.div variants={itemVariants}>
          <Title>
            Building smooth, fast, <Highlight>developer experiences</Highlight>
          </Title>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Description>{PROFILE.blurb}</Description>
        </motion.div>
        <Actions variants={itemVariants}>
          <ExploreCTA asChild>
            <a href="#projects">
              <LinkContent>
                Explore Projects <ArrowRight size={16} />
              </LinkContent>
            </a>
          </ExploreCTA>
          <Button asChild variant="secondary">
            <a href={`mailto:${PROFILE.email}`}>
              <LinkContent>
                Contact Me <Mail size={16} />
              </LinkContent>
            </a>
          </Button>
        </Actions>
        <InfoRow variants={itemVariants}>
          <InfoItem>
            <MapPin size={16} />
            {PROFILE.location}
          </InfoItem>
          <InfoItem>
            <Phone size={16} />
            {PROFILE.phone}
          </InfoItem>
        </InfoRow>
      </CopyColumn>

      <Showcase
        variants={itemVariants}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <ProfileImage src="/Profile.png" alt="Profile" />
      </Showcase>
    </HeroSection>
  );
}
