import links from "@/lib/links";
import styled from "styled-components";
import LinkBtn from "../LinkBtn";

const Ul = styled.ul`
  list-style: none;
  margin: 0 20px 0 20px;
`;

export default function FooterList({ isLink, list }) {
  return (
    <Ul>
      {isLink
        ? links.map(({ path, linkname }) => (
            <LinkBtn path={path} linkname={linkname} key={path} />
          ))
        : list.map((item, index) => <li key={index}>{item}</li>)}
    </Ul>
  );
}
