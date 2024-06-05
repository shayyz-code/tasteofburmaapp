import Image from "next/image";
import styled from "styled-components";

const Item = styled.div`
  position: relative;

  div {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
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
