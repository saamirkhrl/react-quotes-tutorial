import React from "react";
import { useState } from "react";

function App() {
  const [quoteData, setQuoteData] = useState(null);

  const getQuote = async () => {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/quotes?category=happiness",
      {
        headers: { "X-Api-Key": "API_GOES_HERE" },
      }
    );
    const data = await response.json();
    setQuoteData(data[0]);
  };

  return (
    <div>
      <div>
        {quoteData ? (
          <p>
            {quoteData.quote} <br /> - {quoteData.author}
          </p>
        ) : (
          <h4>Click the button below to get a quote!</h4>
        )}
      </div>
      <button onClick={getQuote}>Get a quote!</button>
    </div>
  );
}

export default App;
