import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { jsonData } from "../../Data/data";

function App() {
  const [data,setData] = useState(null);

  useEffect(() => {
    console.log("useEffect called!");
    axios(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => setData(res.data.message))
    .catch((err) => console.log("Error!",err));
  },[]);

  return (
    <div className='App'>
      <br />
      {/* <img src={data} alt="Random Dog Breed" width='50%' /> */}
      {data && <img src={data} alt="dog" style={{width:500}} />}
    </div>
  );
}

function App2() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.thecatapi.com/v1/images/search?")
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setData(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      })
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="App">
        <h3>Cat Random Image API</h3>
        <br />
          {data.map(img => (
            <img className='cat' src={img.url} width="500" alt="cat images" />
          ))}
      </div>
    );
  }
}

export default function R004() {
  return (
    <div>
      <h3 className='center subtitle'>Project: {jsonData[3].projectName}</h3>
      <App />
      <App2 />
    </div>
  )
}