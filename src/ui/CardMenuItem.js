import Image from "next/image";
import styled from "styled-components";

const Li = styled.li`
  display: flex;
`;

export default function CardMenuItem({ src, name, description, price }) {
  return (
    <Li>
      <div>
        <Image src={src} alt="picture of dish" width={100} height={100} />
      </div>
      <div>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
      <div>${price}</div>
    </Li>
  );
}
