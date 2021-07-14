import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../components/Elements/Header";
import DropDown from "../components/Elements/DropDown";

const PokemonDetails = (props) => {
    const { id } = useParams();
    console.log(id);
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const apiURL = "https://pokeapi.co/api/v2/pokemon/" + id;
    console.log(apiURL);

    useEffect(() => {
        axios.get(apiURL).then((res) => {
            console.log(res.data);
            setPoke(res.data);
            setLoaded(true);
        });
    }, []);

    const sprites = poke.sprites;
    const abilities = poke.abilities
    const moves = poke.moves
    const types = poke.types
    const height = poke.height
    const stats = poke.stats
    const weight = poke.weight
    return (
        <div>
            {loaded && (
                <div>
                    <Header title={poke.name} subtitle={poke.id} bg="bg-red"/>
                    <div className="container-flex bg-default corners">
                        <div className="row">
                            <div className="col-4">
                                <img
                                    src={sprites.front_default}
                                    className="img-fluid"
                                 width="100%"/>
                            </div>
                            <div className="col-8">
                                <DropDown data={moves} title="Moves"/>
                                <DropDown data={abilities} title="Abilities"/>
                                <DropDown data={types} title="Types"/>

                                </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokemonDetails;
