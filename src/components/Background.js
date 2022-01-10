import styled from "styled-components";

const Background = ({ color, children }) => {
  return <BackgroundStyled color={color}>{children}</BackgroundStyled>;
};

const BackgroundStyled = styled.div`
  background-color: ${({ color }) => color};
  color: ${({ color }) => color};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 500ms;
  transition-property: background-color, color;
  z-index: -1;
`;

export default Background;
