import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    useRouteMatch,
    useParams,
    Route,
    Switch,
    NavLink,
    Link
} from "react-router-dom";

const PokemonDetails = (props) => {
    const { id } = useParams();
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const apiURL = "https://pokeapi.co/api/v2/pokemon/" + id;


    useEffect(() => {
        axios.get(apiURL).then((res) => {
            console.log(res.data);
            setPoke(res.data);
            setLoaded(true);
        });
    }, [apiURL]);

    const sprites = poke.sprites
    return (
        <div>
            {loaded && <div>
               {poke.id} {poke.name}
            <img src={sprites.front_default} />
            <img src={sprites.front_shiny}/>
            </div>}
        </div>
    );
};

export default PokemonDetails;
