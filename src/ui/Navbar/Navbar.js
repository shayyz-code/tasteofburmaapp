"use client";

import styled from "styled-components";
import Links from "./Links";
import Header from "./Header";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
`;

export default function Navbar() {
  return (
    <Nav>
      <Header />
      <Links />
    </Nav>
  );
}
