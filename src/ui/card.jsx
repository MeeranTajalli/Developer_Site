import styled from "styled-components";

export const Card = styled.div`
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  background: ${({ theme }) => theme.surface};
  backdrop-filter: blur(8px);
  transition: border-color 250ms ease, background 250ms ease;
`;

export const CardHeader = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderSubtle};
  transition: border-color 250ms ease;
`;

export const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 250ms ease;
`;

export const CardContent = styled.div`
  padding: 1.25rem;
`;