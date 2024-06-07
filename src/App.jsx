import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const getData = async (query) => {
    try {
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      setBooks(result.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData(query);
  }, [query]);

  return (
    <div className="App">
      <h1>Find a Book </h1>
      <input
        className="Get-Bigger-Please"
        type="text"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {books &&
          books.map((item) => {
            return <li key={item.id}>{item.volumeInfo.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
