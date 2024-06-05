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

  div {
    margin: 0 20px 0 20px;

    img {
      border-radius: 20px;
    }

    p {
      color: ${theme.color.textMenuDescription};
      font-size: ${theme.fontsize.menuDescription};
    }
  }

  &:hover {
    background: rgba(120, 120, 120, 0.2);
  }
`;

export default function CardMenuItem({ src, name, description, price }) {
  return (
    <Li>
      <div>
        <Image src={src} alt="picture of dish" width={100} height={100} />
      </div>
      <div>
        <H4>{name}</H4>
        <p>{description}</p>
      </div>
      <div>${price}</div>
    </Li>
  );
}
