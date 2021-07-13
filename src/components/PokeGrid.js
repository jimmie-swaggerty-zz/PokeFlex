import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeThumbSmall from "./Elements/PokeThumbSmall";
import Header from "./Elements/Header";
const PokeGrid = (props) => {
    const { url, title } = props;
    const [pokemon, setPokemon] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [view, setView]=useState("")
    const clickHandler = () => {
        if(view==="hide"){
            setView("")
        }
        else {
            setView("hide")
        }
        console.log(view)
    }
    useEffect(() => {
        axios.get(url).then((res) => {
            setPokemon(res.data.results);
            console.log("gen", res.data.results);
            setLoaded(true);
        });
    }, []);

    return (
        <div className="container-flex">
                                        <Header title={title} onClick={clickHandler()}/>
            <div className={"row "+view}>
                {pokemon.map((poke) => {
                    return <PokeThumbSmall url={poke.url} />;
                })}
            </div>
        </div>
    );
};

export default PokeGrid;
