import Image from "next/image";
import styled from "styled-components";
import theme from "../theme";
import PrimaryButton from "../PrimaryButton";
import H2 from "../H2";

import dish1 from "$/dish1.jpeg";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .subdiv {
    width: 50%;
    max-width: 400px;
    padding: 40px;

    span {
      color: ${theme.color.primary};
    }

    p {
      margin: 40px 0 40px 0;
    }
  }

  .picturediv {
    position: relative;
    padding: 0;

    .imgright {
      position: absolute;
      left: 0;
      border-radius: 50%;
    }

    .imgleft {
      position: absolute;
      right: 0;
      border-radius: 50%;
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
        sunt tempor cillum.
      </p>
      <PrimaryButton path={"/menu"}>Explore Menu</PrimaryButton>
    </div>
  );

  const Picture = () => (
    <div className={"subdiv picturediv"}>
      <Image
        className={pictureLeft ? "imgleft" : "imgright"}
        src={dish1}
        alt="picture of menu"
        width={400}
      />
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
