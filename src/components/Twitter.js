import styled from "styled-components";
import { colorShade } from "../helper/newShade";

const Twitter = ({ twitterUrl }) => {
  return (
    <TwitterStyled
      id="tweet-quote"
      href={twitterUrl}
      target="_blank"
      rel="noreferrer"
    >
      <svg
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "24px", height: "24px", fill: "white" }}
      >
        <g clipRule="evenodd">
          <path fill="none" d="M0 0h128v128H0z" />
          <path d="M128 23.294a51.28 51.28 0 0 1-15.079 4.237c5.424-3.328 9.587-8.606 11.548-14.892a51.718 51.718 0 0 1-16.687 6.526c-4.778-5.231-11.608-8.498-19.166-8.498-14.493 0-26.251 12.057-26.251 26.927 0 2.111.225 4.16.676 6.133-21.824-1.126-41.17-11.835-54.131-28.145a27.422 27.422 0 0 0-3.554 13.552c0 9.338 4.636 17.581 11.683 22.412-4.297-.131-8.355-1.356-11.901-3.359v.331c0 13.051 9.053 23.937 21.074 26.403-2.201.632-4.523.948-6.92.948-1.69 0-3.343-.162-4.944-.478 3.343 10.694 13.035 18.483 24.53 18.691-8.986 7.227-20.315 11.533-32.614 11.533-2.119 0-4.215-.123-6.266-.37 11.623 7.627 25.432 12.088 40.255 12.088 48.309 0 74.717-41.026 74.717-76.612a89.39 89.39 0 0 0-.068-3.49A53.862 53.862 0 0 0 128 23.294" />
        </g>
      </svg>
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
