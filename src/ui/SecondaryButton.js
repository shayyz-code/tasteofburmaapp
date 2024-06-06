import styled from "styled-components";
import theme from "./theme";

const Button = styled.button`
  transition: 0.3s;
  padding: 0 5px 0 5px;
  background: ${({ isClicked }) =>
    isClicked ? theme.color.primary : "transparent"};
  border: 2px solid transparent;
  cursor: pointer;

  span {
    margin: 0 0 0 5px;
  }

  &:hover {
    border-color: ${theme.color.primary};
  }
`;

export default function SecondaryButton({
  handleOnClick,
  isClicked,
  children,
}) {
  return (
    <Button onClick={handleOnClick} isClicked={isClicked}>
      {children}
      {isClicked && <span>&#10005;</span>}
    </Button>
  );
}
