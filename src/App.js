import React, { useEffect ,useState } from "react";
import axios from 'axios'
import "./App.css";


function App() {
  const [ testAPI, setTestAPI ] = useState([]);

  const fetchAPI = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=0Aybac1ZHTJb3yeurrn27tesofXSneGbs74HKQOP')
      .then(response => {
        console.log(response.data)
        setTestAPI(response.data)
      })

      .catch(error => console.log(error))
  }
  
  useEffect(fetchAPI, []);

  return (
    <div className="App">
      <h1>{testAPI.title}</h1>
    </div>
  );
}

export default App;
