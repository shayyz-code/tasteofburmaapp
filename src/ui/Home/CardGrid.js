import styled from "styled-components";
import CardGridItem from "./CardGridItem";

import dish2 from "$/dish2.jpeg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin: 0 0 40px 0;
  max-width: 400px;

  .div1 {
    grid-area: 1 / 1 / 5 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 5 / 7;
  }
  .div3 {
    grid-area: 5 / 1 / 7 / 3;
  }
  .div4 {
    grid-area: 5 / 3 / 7 / 5;
  }
  .div5 {
    grid-area: 5 / 5 / 7 / 7;
  }
`;

export default function CardGrid({ docs }) {
  return (
    <Grid>
      {docs.map(({ id, name, price, pictureurl }, index) => (
        <CardGridItem
          key={id}
          clsName={"div" + ++index}
          src={pictureurl}
          name={name}
          price={price}
        />
      ))}
    </Grid>
  );
}
