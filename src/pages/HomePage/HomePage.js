import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import DigimonLogo  from "./digimonlogo.png";
import background from './background.png';

export const HomePage = ({favorites, setDigimon}) => {
  const [input, setInput] = React.useState();

  const history = useHistory();

  function handleSearchClick() {
    if (input === null || input === undefined){
      alert('Ingrese un digimon valido'); 
      history.replace('./')
    } else {
      setDigimon(input.toLowerCase());
      history.replace("/card");
    }
  }

  // Esto no va a ningún lado porque no existe la ruta '/favoritos'
  function handleFavoriteClick() {
    history.replace("/favoritos");
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  // Esto no funciona porque la API no es compatible con esta búsqueda
  const handleRandomClick = () => {
    const randomDigimon = Math.floor(Math.random() * 671) + 1;
    setDigimon(randomDigimon);
    history.replace("./card");
  };

  
  return (
    <Home width="20px">
      <Wrapper>
        <Logo src={DigimonLogo} alt="Digimon Logo" />
        <SearchBar
          placeholder="Escribi el digimon que deseas buscar"
          value={input}
          onChange={handleInputChange}
          type="search" // type="text"
        />
        <ButtonsWrapper>
          <button onClick={handleSearchClick}>Buscar</button>
          <button onClick={handleRandomClick}>Random Digimon</button>
          <button onClick={handleFavoriteClick}>Mis Favoritos</button>
          
        </ButtonsWrapper>
        {favorites.map((favorite) => `${favorite[0].name}`)}
      </Wrapper>
    </Home>
  );
};

const Home = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${background});
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const Logo = styled.img`
  width: 75%;
  margin-bottom: 10px;
`;

const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;

  button {
    cursor: pointer;
    color: white;
    padding: 10px;
    font-weight: 600;
    background-color: #2675ae;
    border: none;
    border-radius: 8px;
    transition: all ease-out 0.3s;
    

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-5px);
    }

    &:first-child {
      width: 55%;
    }
    &:last-child {
      width: 23%;
    }
    
    
  }
`;
