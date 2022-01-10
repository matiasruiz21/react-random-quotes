const Quote = ({ quote, author }) => {
  return (
    <>
      <div id="text">{quote}</div>
      <div id="author" style={{ textAlign: "right", marginTop: "10px" }}>
        {author}
      </div>
    </>
  );
};

export default Quote;
