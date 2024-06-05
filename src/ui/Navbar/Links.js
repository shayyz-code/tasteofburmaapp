import styled from "styled-components";

import links from "@/lib/links";
import LinkBtn from "../LinkBtn";
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export default function Links() {
  return (
    <Ul>
      {links.map(({ path, linkname }) => (
        <LinkBtn path={path} linkname={linkname} key={path} />
      ))}
    </Ul>
  );
}
