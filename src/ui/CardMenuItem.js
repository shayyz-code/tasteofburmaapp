import Image from "next/image";
import styled from "styled-components";
import H4 from "./H4";
import theme from "./theme";

const Li = styled.li`
  display: flex;
  transition: 0.3s;
  background: rgba(100, 100, 100, 0);
  border-radius: 15px;
  cursor: pointer;
  margin: 0 0 5px 0;
  padding: 5px 0 5px 0;
  background: rgba(120, 120, 120, 0.2);

  div {
    margin: 0 20px 0 20px;

    img {
      border-radius: 20px;
    }

    .exclusive {
      font-size: ${theme.fontsize.menuDescription};
      background: ${theme.color.primary};
      padding: 0 5px 0 5px;
    }

    .special {
      font-size: ${theme.fontsize.menuDescription};
      background: ${theme.color.speical};
      padding: 0 5px 0 5px;
    }

    p {
      margin: 5px 0 5px 0;
      color: ${theme.color.textMenuDescription};
      font-size: ${theme.fontsize.menuDescription};
    }
  }

  &:hover {
    background: rgba(120, 120, 120, 0.4);
  }
`;

export default function CardMenuItem({
  src,
  name,
  description,
  price,
  exclusive,
  special,
}) {
  return (
    <Li>
      <div>
        <Image src={src} alt="picture of dish" width={100} height={100} />
      </div>
      <div style={{ width: "150px" }}>
        <H4>{name}</H4>
        {exclusive && <span className={"exclusive"}>exclusive</span>}
        {special && <span className={"special"}>special</span>}
        <p>{description}</p>
      </div>
      <div>${price}</div>
    </Li>
  );
}
