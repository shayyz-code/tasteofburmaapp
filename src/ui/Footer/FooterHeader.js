import styled from "styled-components";
import H1Footer from "../H1Footer";

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
      <H1Footer />
      <p>Our restaurant is ....</p>
    </Div>
  );
}
