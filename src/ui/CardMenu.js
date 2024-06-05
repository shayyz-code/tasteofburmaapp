"use client";
import styled from "styled-components";
import CardMenuItem from "./CardMenuItem";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Ul = styled.ul`
  margin: 20px 0 20px 0;
`;

export default function CardMenu({ docs }) {
  console.log(docs);
  return (
    <Div>
      <Ul>
        {docs.map(({ id, name, price, pictureurl }) => (
          <CardMenuItem
            key={id}
            name={name}
            description={""} // Need to fix this line
            price={price}
            src={pictureurl}
          />
        ))}
      </Ul>
    </Div>
  );
}
