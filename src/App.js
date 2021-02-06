import React, { useState } from "react";
import "./App.css";

import Modal from './Components/Modal';
import styled from 'styled-components';

import landingImg from './images/earth.jpg';

const Styled = styled.div `
  .App {
    position: relative;
  }

  .container {
    display: flex;
    align-items: center;
  }

  button {
    position: absolute;
    font-size: 40px;
    color: white;
    margin-left: 40vw;
    border: 1px solid black;
    border-radius: 15px;
    background-color: black;
    padding: 12px;

    &:hover {
      opacity: 0.5;
    }
  }

  h1 {
    position: absolute;
    margin-bottom: 25%;
    margin-left: 35vw;
    color: white;
    font-size: 50px;
    font-family: Arial sans-serif;
  }

  img {
    width: 100%;
    height: 100vh;
    opacity: 10;
  }

 
`

function App() {
  const [ showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }; 

  return (
    <Styled className="App"> 
      <div className="container">
        <h1>Nasa Photo of The Day</h1>
        <button onClick={openModal}>Let's Get Started!</button>
        <img src={landingImg} alt="earth" />
      </div>
    <Modal showModal={showModal} setShowModal={setShowModal} />
    </Styled>
  );
}

export default App;
