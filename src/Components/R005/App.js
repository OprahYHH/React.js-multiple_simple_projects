import React, { useState, useEffect } from "react";
import { jsonData } from "../../Data/data";

const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=Cbtcok30w7WVwz6ObDKPE2SXxiRovzWK`;
  const res = await fetch(url);
  const { data } = await res.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });

  return gifs;
};

// hook
const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [category]);

  return state;
};

const App = ({ defaultCategories = [] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  return (
    <div className="gitexpert">
      <h1>Gif Expert App</h1>
      <p>Enter a topic her with minimum 3 letters</p>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

// components
const AddCategory = ({ setCategories }) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().length > 2) {
      setCategories((cats) => [input, ...cats]);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="gifsearch"
        style={{ backgroundColor: "white" }}
        type="text"
        value={input}
        onChange={handleInputChange}
      />
    </form>
  );
};

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="category animate__animated animate__fadeIn">
        {" "}
        {category}{" "}
      </h3>

      {loading && <p className="animate__animated animate__flash">Loading</p>}

      <div className="catcard-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

const GifGridItem = ({ title, url }) => {
  return (
    <div className="catcard animate__animated animate__rubberBand">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default function R005() {
  return (
    <div>
      <h3 className="center subtitle">Project: {jsonData[4].projectName}</h3>
      <App />
    </div>
  );
}
