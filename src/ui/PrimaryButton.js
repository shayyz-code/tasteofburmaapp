import Link from "next/link";
import styled from "styled-components";
import theme from "./theme";

const Div = styled.div`
  a {
    padding: 5px 15px 5px 15px;
    border-radius: 20px;
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
