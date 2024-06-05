import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import theme from "../theme";
import PrimaryButton from "../PrimaryButton";

const Div = styled.div`
  display: flex;

  div {
    width: 50%;
  }
`;

export default function CardOffer({ pictureLeft, spanText }) {
  const Article = () => (
    <div>
      {spanText && <span>{spanText}</span>}
      <h2>Pure exotic taste</h2>
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
    <div>
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
