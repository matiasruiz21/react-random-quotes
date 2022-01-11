import { useState } from "react";
import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import Button from "./components/Button";
import Quote from "./components/Quote";
import QuoteBox from "./components/QuoteBox";
import Twitter from "./components/Twitter";
import Wrapper from "./components/Wrapper";
import GlobalStyle from "./Global";

let quotesObj;
const colors = [
  "#287173",
  "#0C5679",
  "#0B0835", //#0B0835 oscuro
  "#D82A12",
  "#117F68",
  "#037A02",
  "#C1392D",
  "#9B271B",
];

function App() {
  const [state, setState] = useState({
    quote: "",
    author: "",
    twitterUrl: "",
    color: "",
  });

  const random = (length) => {
    return Math.floor(Math.random() * length);
  };

  async function getData() {
    await fetch("https://api.github.com/gists/9e45832171f04fa5360817cbd85dec2a")
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        quotesObj = JSON.parse(response.files["quotes.json"].content);
        console.log("Success");
      });
  }

  function getQuote() {
    let randomQuote = quotesObj.quotes[random(quotesObj.quotes.length)];
    setState({
      quote: randomQuote.quote,
      author: "- " + randomQuote.author,
      twitterUrl: `https://twitter.com/intent/tweet?text=${
        randomQuote.quote.split(" ").join("%20") +
        "%0A-%20" +
        randomQuote.author
      }&hashtags=quote`,
      color: colors[random(colors.length)],
    });
  }

  useEffect(() => {
    getData().then(() => getQuote());
    // eslint-disable-next-line
  }, []);

  return (
    <ThemeProvider theme={{ color: state.color }}>
      <GlobalStyle />
      <Background>
        <Wrapper>
          <QuoteBox>
            <Quote quote={state.quote} author={state.author} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1.5rem",
                justifyItems: "center",
              }}
            >
              <Twitter twitterUrl={state.twitterUrl} />
              <Button getQuote={getQuote} />
            </div>
          </QuoteBox>
        </Wrapper>
      </Background>
    </ThemeProvider>
  );
}

export default App;
