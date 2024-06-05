import links from "@/lib/links";
import Link from "next/link";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
`;

export default function FooterList({ isLink, list }) {
  return (
    <Ul>
      {isLink
        ? links.map((link) => (
            <li key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))
        : list.map((item, index) => <li key={index}>{item}</li>)}
    </Ul>
  );
}
