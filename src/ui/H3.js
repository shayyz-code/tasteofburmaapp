"use client";

import styled from "styled-components";
import theme from "./theme";

const StyledH3 = styled.h3`
  margin: 40px 0 40px 0;
  letter-spacing: 0.2em;

  span {
    color: ${theme.color.primary};
  }
`;

export default function H3({ children }) {
  return <StyledH3>{children}</StyledH3>;
}
