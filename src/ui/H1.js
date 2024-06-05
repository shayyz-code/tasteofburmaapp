import styled from "styled-components";
import theme from "./theme";
import Link from "next/link";

const StyledH1 = styled.h1`
  a {
    font-family: ${({ isFooter }) =>
      !isFooter ? theme.fonts.h1 : theme.fonts.h1Footer};
    font-size: ${({ isFooter }) =>
      !isFooter ? theme.fontsize.h1 : theme.fontsize.h1Footer};
    font-weight: 400;
    font-style: normal;
  }
`;

export default function H1({ isFooter }) {
  return (
    <StyledH1 isFooter={isFooter}>
      <Link href="/">Taste of Burma</Link>
    </StyledH1>
  );
}
