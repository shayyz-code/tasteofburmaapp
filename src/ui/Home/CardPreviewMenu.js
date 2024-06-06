"use client";

import styled from "styled-components";
import CardMenuItem from "../CardMenuItem";
import PrimaryButton from "../PrimaryButton";
import H3 from "../H3";
import dish3 from "$/dish3.jpeg";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0 0 40px 0;
`;

export default function CardPreviewMenu({ docs }) {
  return (
    <Div>
      <H3>
        Explore our <span>exclusive</span> dishes
      </H3>
      <Ul>
        {docs.map(
          ({
            id,
            name,
            description,
            price,
            pictureurl,
            exclusive,
            special,
          }) => (
            <CardMenuItem
              key={id}
              src={pictureurl}
              name={name}
              description={description}
              price={price}
              exclusive={exclusive}
              special={special}
            />
          )
        )}
      </Ul>
      <PrimaryButton path={"/menu"}>Explore more</PrimaryButton>
    </Div>
  );
}
