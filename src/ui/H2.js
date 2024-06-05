import styled from "styled-components";
import theme from "./theme";

const StyledH2 = styled.h2`
  font-family: ${theme.fonts.h2};
  font-size: ${theme.fontsize.h2};
  font-weight: 400;
  font-style: normal;
`;

export default function H2({ children }) {
  return <StyledH2>{children}</StyledH2>;
}
