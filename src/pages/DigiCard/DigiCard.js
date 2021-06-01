import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import cargandoGif from "./cargando.gif"
import errorGif from "./error.gif"

export const DigiCard = ({digimon, addFavorite, favorites, deleteFavorite}) => {
  const [digimonData, setDigimonData] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const history = useHistory();

  React.useEffect(() => {
    setStatus("Cargando");
    fetch(`https://digimon-api.herokuapp.com/api/digimon/name/${digimon}`)
    .then((response) => 
    response.json().then((data) => {
      console.log(data);
       if(data.ErrorMsg){
        setStatus("error");
      }else{
        setDigimonData(data);
        setStatus("success")
      }
    })
    )
    .catch((error) => setStatus("error"));
  }, [digimon]);
  

  

  const favoritesNames = favorites.map((favorites) => favorites.name);

  const isDigimonAdded =
    digimonData && favoritesNames.includes(digimonData.name);

  console.log(isDigimonAdded);

  if (digimonData && status === "success") {
    return (
      <>
        <IniCard>
          <Wrapper>
            <Card>
                  <Image>
                    <img src={digimonData[0].img} alt= "Imagen del digimon"/> 
                  </Image>
                  <Details>
                    <h1>{digimon.toUpperCase()}</h1>
                    <h3>Level: {digimonData[0].level.toUpperCase()}</h3>
                  </Details> 
            </Card>
            
                  <ButtonsWrapper>
                    <button onClick={() => history.push("./")}> Volver a la Home</button>
                    <button onClick={
                        isDigimonAdded
                          ? () => deleteFavorite(digimonData.name)
                          : () => addFavorite(digimonData)
                      }>
                      {isDigimonAdded ? "Borrar Favorito" : "Agregar Favorito"}
                    </button>
                  </ButtonsWrapper>
            </Wrapper>        
        </IniCard>
      </>        
    );
  } else if (status === "Cargando") {
    return (
      <>
        <IniCard>
          <Wrapper>
            <Image>
                    <img src={cargandoGif} alt= "Cargando"/> 
            </Image>
          </Wrapper>
        </IniCard>
      </>
    );
  } else if (!digimonData || status === "error") {
    return (
      <>
        <IniCard>
          <Wrapper>
              <Card>
                    <Image>
                      <img src={errorGif} width='320px' height='320'  alt= "error"/> 
                    </Image>
                    <Details>
                      <h1>ERROR</h1>
                      <h3>El Digimon ingresado no existe</h3>
                    </Details>
              </Card>
                    <ButtonError>
                          <button onClick={() => history.push("./")}> Volver a la Home</button>
                    </ButtonError>
            </Wrapper>        
        </IniCard>
      </>        
    );
  }
};

const IniCard = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://images8.alphacoders.com/781/thumb-1920-781243.png");
  background-size: cover;
`;

const ButtonsWrapper = styled.div`
  width: 150%;
  display: flex;
  gap: 20px;
  

  button {
    cursor: pointer;
    color: white;
    padding: 9px;
    font-weight: 600;
    background-color: #2675ae;
    border: none;
    border-radius: 50px;
    transition: all ease-out 0.3s;
    flex-direction: column;
  
    &:hover {
      filter: brightness(0.8);
      transform: translateY(-5px);
    }
  }
`;

const ButtonError = styled.div`
  display: center;
  gap: 20px;
  
  button {
    cursor: pointer;
    color: white;
    padding: 9px;
    font-weight: 600;
    background-color: black;
    border: none;
    border-radius: 50px;
    transition: all ease-out 0.3s;
    flex-direction: column;
    align-items: center;
  
    &:hover {
      filter: brightness(0.8);
      transform: translateY(-5px);
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 10%;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 320px;
  grid-template-rows: 320px 80px 25px;
  grid-template-areas: "image" "text";
  border-radius: 15px;
  background: black;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: Candara;
  border: black 2px solid;
  margin-bottom: 20px;
  
`;

 const Image = styled.div`
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;

  img{
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

`; 



const Details = styled.div`
  grid-area: text; 
  display: column;
  color: white;
  font-size:14px;
  font-weight: 300;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  text-align: left;

    h1{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 10px;
    };
    h3{
      margin-left: 15px;
      text-align: center;
    }
  `; 

 
