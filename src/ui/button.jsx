import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid transparent;
  transition:
    background-color 220ms ease,
    color 220ms ease,
    border-color 220ms ease,
    box-shadow 220ms ease,
    transform 220ms ease;
  cursor: pointer;

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.outline};
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${({ variant, theme }) => {
    if (variant === "secondary") {
      return css`
        background-color: ${theme.buttonSecondaryBg};
        color: ${theme.buttonSecondaryText};
        border-color: ${theme.buttonSecondaryBorder};

        &:hover {
          background-color: ${theme.buttonSecondaryText};
          color: ${theme.buttonSecondaryBg};
          border-color: ${theme.buttonSecondaryText};
        }
      `;
    }

    return css`
      background-color: ${theme.buttonPrimaryBg};
      color: ${theme.buttonPrimaryText};

      &:hover {
        background-color: ${theme.buttonPrimaryHover};
        color: ${theme.buttonPrimaryText};
      }
    `;
  }}
`;

export function Button({ asChild, children, variant = "default", ...props }) {
  if (asChild && React.isValidElement(children)) {
    return (
      <StyledButton as={children.type} variant={variant} {...children.props} {...props}>
        {children.props.children}
      </StyledButton>
    );
  }

  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
