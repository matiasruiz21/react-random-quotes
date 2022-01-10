import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Wrapper = ({ color, children }) => {
  return (
    <Container>
      <WrapperStyled id="wrapper">{children}</WrapperStyled>
      <LinkStyled
        color={color}
        href="https://github.com/matiasruiz21"
        target="_blank"
        rel="noreferrer"
      >
        <p>by mruiz</p>
        <FaGithub />
      </LinkStyled>
    </Container>
  );
};

const WrapperStyled = styled.div`
  position: relative;
  border-radius: 7px;
  background-color: #fdf5df;
`;

const LinkStyled = styled.a`
  display: flex;
  align-items: center;
  margin-top: 10px;
  color: #fdf5df;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  p {
    margin-right: 0.25rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-inline: auto;
  width: min(90%, 40.5rem);
`;

export default Wrapper;
