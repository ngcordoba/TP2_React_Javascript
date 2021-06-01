import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, DigiCard } from "../pages";

export const Router = () => {
  const [digimon, setDigimon] = React.useState("");
  const [favorites, setFavorites] = React.useState([]);
  console.log(digimon);

  function handlerSetDigimon(digimon) {
    setDigimon(digimon);
  }

  function handleAddFavorite(digimon) {
    setFavorites((oldFavorites) => [...oldFavorites, digimon]);
  }

  function deleteFavorite(digimonName) {
    setFavorites(favorites.filter((favorite) => favorite.name !== digimonName));
  }

  

  console.log("FAVORITES", favorites);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/card">
          <DigiCard
            digimon={digimon}
            addFavorite={handleAddFavorite}
            favorites={favorites}
            deleteFavorite={deleteFavorite}
          />
        </Route>



        <Route path="/">
          <HomePage favorites={favorites} setDigimon={handlerSetDigimon} />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
