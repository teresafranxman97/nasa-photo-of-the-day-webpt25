import React, { useEffect ,useState } from "react";
import axios from 'axios'
import styled from 'styled-components';


const StyledMain = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  

  .modalWrapper {
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
  }

  .modalContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
  }

  .mainImg {
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    background: #000;
  }

  h2, h3, p {
    margin: 1em;
  }
`

function Modal ({ showModal, setShowModal }) {
    const [ testAPI, setTestAPI ] = useState([]);

    const fetchAPI = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=nltn97NF7rEQRQeQ5w9J2wPzd24R3wwbT0rXeLM2')
        .then(response => {
          console.log(response.data)
          setTestAPI(response.data)
        })
  
        .catch(error => console.log(error))
    }
    
    useEffect(fetchAPI, []);
  
    
    
    return (
    <>
      {showModal ?  
        <StyledMain className="container"> 
          <div className="modalWrapper" showModal={showModal} >
            <div className="modalContent">
              <img className="mainImg" src={testAPI.url} />
              <h2>{testAPI.title}</h2>
              <h3>{testAPI.date}</h3>
              <p>{testAPI.explanation}</p>
            </div>
          </div>
        </StyledMain>
      : null } </>
    )
}

export default Modal;