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

const Gradient = styled.div`
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.heroImageGradient};
`;

const Border = styled.div`
  position: absolute;
  inset: 0;
  border: 1px solid ${({ theme }) => theme.showcaseBorder};
  border-radius: 1.5rem;
  transition: border-color 250ms ease;
`;

const Mask = styled.div`
  position: absolute;
  inset: 0;
  mask-image: radial-gradient(circle, white 65%, transparent 100%);
  -webkit-mask-image: radial-gradient(circle, white 65%, transparent 100%);
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
          <Button asChild>
            <a href="#projects">
              <LinkContent>
                Explore Projects <ArrowRight size={16} />
              </LinkContent>
            </a>
          </Button>
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
        <Gradient />
        <Border />
        <Mask />
        <ProfileImage src="/Profile.png" alt="Profile" />
      </Showcase>
    </HeroSection>
  );
}