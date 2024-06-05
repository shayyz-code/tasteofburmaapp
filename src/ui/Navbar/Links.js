import styled from "styled-components";

import pathnames from "./pathnames";
import LinkBtn from "./LinkBtn";
const Ul = styled.ul`
  display: flex;
  list-style: none;
`;

export default function Links() {
  return (
    <Ul>
      {pathnames.map(({ path, linkname }) => (
        <LinkBtn path={path} linkname={linkname} key={path} />
      ))}
    </Ul>
  );
}
