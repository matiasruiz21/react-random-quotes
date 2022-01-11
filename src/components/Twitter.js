import styled from "styled-components";
import { colorShade } from "../helper/newShade";
import { FaTwitter } from "react-icons/fa";

const Twitter = ({ twitterUrl }) => {
  return (
    <TwitterStyled
      id="tweet-quote"
      href={twitterUrl}
      target="_blank"
      rel="noreferrer"
    >
      <FaTwitter color="white" />
    </TwitterStyled>
  );
};

const TwitterStyled = styled.a`
  display: flex;
  border-radius: 50%;
  padding: 0.5rem;
  background-color: #00aced;
  align-items: center;
  transition-duration: 500ms;
  transition-property: background-color;
  &:hover {
    background-color: ${() => colorShade("#00aced", -30)};
  }
`;

export default Twitter;
