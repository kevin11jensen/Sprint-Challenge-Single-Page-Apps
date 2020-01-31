import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  `




export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
      </Header>
      <Link to='/characters'>Characters</Link>
    </section>
  );
}
