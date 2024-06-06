"use client";

import styled from "styled-components";
import Links from "./Links";
import Header from "./Header";
import { useEffect, useState } from "react";
import theme from "../theme";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 20px;
  transition: 0.3s;
  z-index: 1;

  &.active {
    margin: 10px;
    width: calc(100% - 20px);
    border-radius: 10px;
    background: ${theme.color.primary};

    * {
      filter: brightness(120%);
    }
  }
`;

export default function Navbar() {
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (offset > 100) {
      setIsUpper(false);
    } else {
      setIsUpper(true);
    }
  }, [offset]);
  return (
    <Nav className={isUpper ? null : "active"}>
      <Header />
      <Links />
    </Nav>
  );
}
