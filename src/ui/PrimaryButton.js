import Link from "next/link";
import styled from "styled-components";
import theme from "./theme";

const Div = styled.div`
  a {
    background: ${theme.color.primary};
  }
`;

export default function PrimaryButton({ path, children }) {
  return (
    <Div>
      <Link href={path}>{children}</Link>
    </Div>
  );
}
