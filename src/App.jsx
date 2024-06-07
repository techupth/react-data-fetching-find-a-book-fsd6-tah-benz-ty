import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText}`
      );
      setData(response.data.items);
    } catch (error) {
      console.error("Cannot find any book called:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [searchText]);

  return (
    <div className="App">
      <h1>Find a Book </h1>
      <input className="Get-Bigger-Please" type="text" onChange={handleInput} />
      <ul>
        {data &&
          data.map((item) => {
            return <li key={item.id}>{item.volumeInfo.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
