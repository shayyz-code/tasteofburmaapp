import styled from "styled-components";
import theme from "./theme";
import Link from "next/link";

const StyledH1 = styled.h1`
  a {
    font-family: ${theme.fonts.h1Footer};
    font-size: ${theme.fontsize.h1Footer};
    font-weight: 400;
    font-style: normal;
  }
`;

export default function H1Footer() {
  return (
    <StyledH1>
      <Link href="/">Taste of Burma</Link>
    </StyledH1>
  );
}
