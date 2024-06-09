import styled from "styled-components";
import CardGridItem from "./CardGridItem";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 50px);
  grid-template-rows: repeat(5, 50px);
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  margin: 0 0 40px 0;
  max-width: 400px;

  .div1 {
    grid-area: 1 / 1 / 4 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 4 / 7;
  }
  .div3 {
    grid-area: 4 / 1 / 6 / 3;
  }
  .div4 {
    grid-area: 4 / 3 / 6 / 5;
  }
  .div5 {
    grid-area: 4 / 5 / 6 / 7;
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
