import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");

  const getData = async (query) => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    setData(result.data.items);
  };

  useEffect(() => {
    getData(search);
  }, [search]);

  const handleTextChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input id="find-book" type="text" onChange={handleTextChange} />
      <ul>
        {data.map((book) => (
          <li key={book.id}>{book.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
