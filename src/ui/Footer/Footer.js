"use client";

import styled from "styled-components";
import Copyright from "./Copyright";
import FooterHeader from "./FooterHeader";
import FooterList from "./FooterList";

const StyledFooter = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const FooterListsContainer = styled.div`
  display: flex;
  margin: 20px 0 20px 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterHeader />
      <FooterListsContainer>
        <FooterList isLink />
        <FooterList list={["Contact", "+12748203981", "California"]} />
        <FooterList list={["Open Hours", "9:00 - 18:00"]} />
      </FooterListsContainer>
      <Copyright />
    </StyledFooter>
  );
}
