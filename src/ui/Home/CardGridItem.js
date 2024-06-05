import Image from "next/image";
import styled from "styled-components";

const Item = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
  div {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 90%;
  }
`;

export default function CardGridItem({ className, src, name, price }) {
  return (
    <Item className={className}>
      <Image src={src} alt={"picture of dish"} />
      <div>
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </Item>
  );
}
