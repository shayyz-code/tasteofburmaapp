import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Copyright() {
  return (
    <Div>
      <div>&copy; Taste of Burma 2024</div>
      <div>All rights reserved.</div>
    </Div>
  );
}
