import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px 10px 20px;
`;

export default function Copyright() {
  return (
    <Div>
      <div>&copy; Taste of Burma 2024</div>
      <div>All rights reserved.</div>
    </Div>
  );
}
