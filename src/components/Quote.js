const Quote = ({ quote, author }) => {
  return (
    <>
      <p id="text">{quote}</p>
      <div id="author" style={{ textAlign: "right", marginTop: "10px" }}>
        {author}
      </div>
    </>
  );
};

export default Quote;
