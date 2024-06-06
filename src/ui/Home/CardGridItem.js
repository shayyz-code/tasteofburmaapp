import Image from "next/image";
import styled from "styled-components";
import theme from "../theme";

const Item = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  img {
    position: unset !important;
  }
  div {
    opacity: 0;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: rgba(200, 200, 200, 0.4);
    width: 100%;
    height: 100%;
    transform: translateX(-50%);
    transition: 0.3s;

    span {
      text-align: center;
      font-size: ${theme.fontsize.menuDescription};
    }
  }

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export default function CardGridItem({ clsName, src, name, price }) {
  return (
    <Item className={clsName}>
      <Image src={src} alt={"picture of dish"} fill sizes="100vw" />
      <div>
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </Item>
  );
}
