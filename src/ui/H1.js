import styled from "styled-components";
import theme from "./theme";
import Link from "next/link";

const StyledH1 = styled.h1`
  a {
    font-family: ${theme.fonts.h1};
    font-size: ${theme.fontsize.h1};
    font-weight: 400;
    font-style: normal;
  }
`;

export default function H1() {
  return (
    <StyledH1>
      <Link href="/">Taste of Burma</Link>
    </StyledH1>
  );
}
