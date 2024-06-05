import styled from "styled-components";
import CardMenuItem from "../CardMenuItem";
import PrimaryButton from "../PrimaryButton";
import H3 from "../H3";

const Div = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const Ul = styled.ul`
  list-style: none;
`;

export default function CardPreviewMenu() {
  return (
    <Div>
      <H3>Explore our exclusive dishes</H3>
      <Ul>
        <CardMenuItem
          src={""}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
        <CardMenuItem
          src={""}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
        <CardMenuItem
          src={""}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
      </Ul>
      <PrimaryButton path={"/menu"}>Explore more</PrimaryButton>
    </Div>
  );
}
