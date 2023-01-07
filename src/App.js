import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import QuoteBox from "./components/QuoteBox";
import LoadingSpinner from "./UI/LoadingSpinner";
import ErrorMessage from "./components/ErrorMessage";
import Button from "./UI/Button";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchQuotes = async () => {
    try {
      const response = await axios.get("https://favqs.com/api/qotd");
      // console.log(response.data)
      setQuotes(response.data.quote);
      setIsLoading(false);
    } catch (error) {
      setQuotes([]);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);


  return (
    <Fragment>
      <div className="App">
        <NavBar />
      </div>
      <main className="main">
        {isLoading ? (
          <LoadingSpinner />
        ) : quotes.length !== 0 ? (
          <QuoteBox quotes={quotes} />
        ) : (
          <ErrorMessage />
        )}
      </main>
      <div className="btn">
        <Button onClick={fetchQuotes} >Next</Button>
      </div>
    </Fragment>
  );
}

export default App;
