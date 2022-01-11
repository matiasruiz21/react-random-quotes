import styled from "styled-components";
import { colorShade } from "../helper/newShade.js";

const Button = ({ getQuote, color }) => {
  return (
    <ButtonStyled id="new-quote" color={color} onClick={getQuote}>
      New quote
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background-color: ${({ color }) => color};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition-duration: 500ms;
  transition-property: background-color, transform;
  border: none;
  cursor: pointer;
  @media (min-width: 46em) {
    &:hover {
      background-color: ${({ color }) =>
        color ? colorShade(color, -30) : color};
      transform: translate(0, -0.25rem);
    }
  }
`;

export default Button;
