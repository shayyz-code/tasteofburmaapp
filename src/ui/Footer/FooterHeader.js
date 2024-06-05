import styled from "styled-components";
import H1 from "../H1";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function FooterHeader() {
  return (
    <Div>
      <H1 />
      <p>Our restaurent is ....</p>
    </Div>
  );
}
