import styled from "styled-components";
import theme from "./theme";
import Link from "next/link";

const StyledH1 = styled.h1`
  color: ${theme.color.textPrimary};
`;

export default function H1() {
  return (
    <StyledH1>
      <Link href="/">Taste of Burma</Link>
    </StyledH1>
  );
}
