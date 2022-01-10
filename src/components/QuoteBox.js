import styled from "styled-components";

const QuoteBox = ({ children }) => {
  return <QuoteBoxStyled id="quote-box">{children}</QuoteBoxStyled>;
};

const QuoteBoxStyled = styled.div`
  padding: 1rem;
  font-size: 1.5rem;
`;

export default QuoteBox;
