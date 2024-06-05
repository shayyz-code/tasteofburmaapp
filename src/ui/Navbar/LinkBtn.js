import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import theme from "../theme";

const Li = styled.li``;

export default function LinkBtn({ path, linkname }) {
  const currentPath = usePathname();
  return (
    <Li>
      <Link
        href={path}
        style={{
          color:
            currentPath === path
              ? theme.color.textPrimary
              : theme.color.textSecondary,
        }}
      >
        {linkname}
      </Link>
    </Li>
  );
}
