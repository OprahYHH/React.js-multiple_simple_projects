// import Hooks from react
import React, { useState, useEffect } from "react";
import axios from "axios";
import { jsonData } from "../../Data/data";

// call useState(), declare 'date' state and
// 'setData' to update the state with empty array
function App() {
  // declare state
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [isloading, setIsLoading] = useState(true);
  // update the query state
  const performSearch = (value) => setQuery(value);

  // callback function to make the fetch requests using axious
  useEffect(() => {
    axios(`https://api.giphy.com/v1/gifs/search?api_key=f3b8PiHqEC58PxYkUN0KluDjNK6pTufN&q=${query}&limit=24&offset=0&rating=g&lang=en`)
    .then((res) => setData(res.data.data))
    .catch((err) => console.log("Error fetching and parsing data", err))
    .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Gif Search</h1>
          {/* give SearchForm the prop onSearch, pass to performsearch function */}
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {/* pass 'data' state */}
        {isloading ? <p>Loading...</p> : <GifList data={data} />}
      </div>
    </>
  );
}

function SearchForm(props) {
  const [searchText, setSearchText] = useState("");
  const onSearchChange = (e) => {
    // Update state
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchText);
    e.currentTarget.reset();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <label className="is-hidden" htmlFor="search">
        Search
      </label>
      <input
        className="gifsearch"
        type="search"
        onChange={onSearchChange}
        name="search"
        placeholder="Search..."
      />
      <button type="submit" id="submit" className="search-button">
        <i className="material-icons icn-search">search</i>
      </button>
    </form>
  );
}

const GifList = (props) => {
  const results = props.data;
  let gifs;
  if (results.length) {
    gifs = results.map((gif) => (
      <Gif url={gif.images.fixed_height.url} key={gif.id} />
    ));
  } 

  return <ul className="gif-list">{gifs}</ul>;
};

const Gif = ({ url }) => (
  <li className="gif-wrap">
    <img src={url} alt="" />
  </li>
);

export default function R003() {
  return (
    <div>
      <h3 className='center subtitle'>Project: {jsonData[2].projectName}</h3>
      <App />
    </div>
  )
}