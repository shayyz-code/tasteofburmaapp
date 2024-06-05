import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import theme from "./theme";

const Li = styled.li`
  margin: 0 1em 0 1em;
`;

export default function LinkBtn({ path, linkname }) {
  const currentPath = usePathname();
  return (
    <Li>
      <Link href={path} className={currentPath === path && "activeLink"}>
        {linkname}
      </Link>
    </Li>
  );
}
