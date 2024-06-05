import styled from "styled-components";
import H1 from "../H1";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  margin: 40px 0 0 0;

  p {
    margin: 0 0 0 20px;
  }
`;

export default function FooterHeader() {
  return (
    <Div>
      <H1 isFooter={true} />
      <p>Our restaurent is ....</p>
    </Div>
  );
}
