import styled from "styled-components";
import CardGridItem from "./CardGridItem";

import dish2 from "$/dish2.jpeg";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin: 0 0 40px 0;
  max-width: 400px;

  .div1 {
    grid-area: 1 / 1 / 3 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 3 / 7;
  }
  .div3 {
    grid-area: 3 / 1 / 5 / 3;
  }
  .div4 {
    grid-area: 3 / 3 / 5 / 5;
  }
  .div5 {
    grid-area: 3 / 5 / 5 / 7;
  }
`;

export default function CardGrid() {
  return (
    <Grid>
      <CardGridItem className="div1" src={dish2} name="Burger" price={10} />
      <CardGridItem className="div2" src={dish2} name="Burger" price={10} />
      <CardGridItem className="div3" src={dish2} name="Burger" price={10} />
      <CardGridItem className="div4" src={dish2} name="Burger" price={10} />
      <CardGridItem className="div5" src={dish2} name="Burger" price={10} />
    </Grid>
  );
}
