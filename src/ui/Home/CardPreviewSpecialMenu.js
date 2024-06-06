"use client";

import styled from "styled-components";
import H3 from "../H3";
import CardGrid from "./CardGrid";
import PrimaryButton from "../PrimaryButton";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export default function CardPreviewSpecialMenu({ docs }) {
  return (
    <Div>
      <H3>
        Today&apos;s <span>special</span> deals
      </H3>
      <CardGrid docs={docs} />
      <PrimaryButton path={"/menu"}>Explore more</PrimaryButton>
    </Div>
  );
}
