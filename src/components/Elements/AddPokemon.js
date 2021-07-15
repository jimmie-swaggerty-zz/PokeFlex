import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeForm from "./PokeForm";
import MyPokemon from "../MyPokemon/MyPokemon";
import { useParams } from "react-router-dom";

const AddPokemon = (props) => {
    const [loaded, setLoaded] = useState(false);
    const { id } = useParams();
    const [ errors, setErrors ] = useState({});
    const [ pokemon, setPokemon ] = useState([])
  
    const submitHandler = (e) => {
      e.preventDefault();
  
      // do some stuff
      axios.post('http://localhost:8000/api/poke', pokemon, {
        withCredentials: true
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data.errors);
          setErrors(err.response.data.errors);
        })
    }
  

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/'+id).then((res) => {
            console.log("this pokemon",res.data);
            let pokeInfo = {name:res.data.name, index:res.data.id, shiney: false, nickname:res.data.name}
            setPokemon(pokeInfo);
            setLoaded(true);
        });
    }, []);

    return <div>
        {loaded && <PokeForm pokemon={pokemon} setPoke={setPokemon} submitHandler={submitHandler} errors={errors} buttonLabel="add" />}
        <MyPokemon/>
        </div>;
};

export default AddPokemon;
