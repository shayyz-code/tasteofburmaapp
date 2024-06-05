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

export default function CardPreviewMenu() {
  return (
    <Div>
      <H3>
        Explore our <span>exclusive</span> dishes
      </H3>
      <Ul>
        <CardMenuItem
          src={dish3}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
        <CardMenuItem
          src={dish3}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
        <CardMenuItem
          src={dish3}
          name="Spicy Currey"
          description="noodles with chilli"
          price={20}
        />
      </Ul>
      <PrimaryButton path={"/menu"}>Explore more</PrimaryButton>
    </Div>
  );
}
