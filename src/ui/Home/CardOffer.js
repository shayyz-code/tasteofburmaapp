import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import PrimaryButton from "../PrimaryButton";
import H2 from "../H2";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .subdiv {
    width: 50%;
    max-width: 400px;
    padding: 10px;

    span {
      color: ${theme.color.primary};
    }

    p {
      margin: 40px 0 40px 0;
    }
  }
`;

export default function CardOffer({ pictureLeft, spanText }) {
  const Article = () => (
    <div className={"subdiv"}>
      {spanText && <span>{spanText}</span>}
      <H2>Pure exotic taste</H2>
      <p>
        Aute occaecat do irure ea pariatur quis amet esse. Ipsum pariatur tempor
        ea esse nostrud magna consequat dolor commodo voluptate exercitation
        sunt tempor cillum. Duis proident excepteur exercitation in pariatur
        excepteur nulla veniam commodo laboris et ullamco labore adipisicing.
        Incididunt quis pariatur aute anim aute aute. Sit qui commodo Lorem et
        Lorem velit velit nulla adipisicing enim officia aute irure. Officia ex
        ipsum ad eu culpa.
      </p>
      <PrimaryButton path={"/menu"}>Explore Menu</PrimaryButton>
    </div>
  );

  const Picture = () => (
    <div className={"subdiv"}>
      <Image src={""} alt="picture of menu" style={{ width: "100%" }} />
    </div>
  );

  if (!pictureLeft)
    return (
      <Div>
        <Article />
        <Picture />
      </Div>
    );
  else if (pictureLeft)
    return (
      <Div>
        <Picture />
        <Article />
      </Div>
    );
}
