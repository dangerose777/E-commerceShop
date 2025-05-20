import { useEffect } from 'react'
import './App.css'
import axios from "axios";
import { useState } from 'react';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api");
    setArray(response.data.test);
    console.log(response.data.test);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
    {array.map((test, index) => (
      <div key={index}>
        <p>{test}</p>
        <br></br>
      </div>
    ))}
    </>
  )
}

export default App