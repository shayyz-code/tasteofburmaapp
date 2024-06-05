import Link from "next/link";
import styled from "styled-components";
import theme from "./theme";

const Div = styled.div`
  transition: 0.3s;
  a {
    padding: 5px 15px 5px 15px;
    border-radius: 20px;
    background: ${theme.color.primary};
  }

  &:hover {
    filter: brightness(120%);
  }
`;

export default function PrimaryButton({ path, children }) {
  return (
    <Div>
      <Link href={path}>{children}</Link>
    </Div>
  );
}
