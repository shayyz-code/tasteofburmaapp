import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import theme from "./theme";

const Li = styled.li`
  margin: 0 1em 0 1em;
  transition: 0.3s;

  border-bottom: 2px solid transparent;

  &:hover {
    border-color: ${theme.color.primary};
  }
`;

export default function LinkBtn({ path, linkname }) {
  const currentPath = usePathname();
  return (
    <Li>
      <Link href={path} className={currentPath === path ? "activeLink" : null}>
        {linkname}
      </Link>
    </Li>
  );
}
