import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const favorites = ({favorites, deletefavorite}) => {
    const [isFavorite, setFavorite] = useState(true);
    const [clickededDigimon, setClickDigimon] = useState(null);

    function handleSetFavorite(digimon){
        isFavorite(false);
        setClickDigimon(digimon);
        deletefavorite(digimon);
    }

    console.log(favorites)
}