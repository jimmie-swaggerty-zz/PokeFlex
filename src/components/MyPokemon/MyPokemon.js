import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../Slider/Slider";


const MyPokemon = (props) => {
    const [myPokes, setMyPokes] = useState([]);
    const [loaded, setLoaded] = useState(false)
    // const {myPokes} = props
    useEffect(() => 
        axios.get(`http://localhost:8000/api/users/pokes/`).then((res) => {
            console.log(res.data);
            setMyPokes(res.data);
            setLoaded(true);
    }, []))

    return (
        <div className="container-fluid">
{loaded && <Slider pokemon={myPokes} title="My Pokemon"/>}
        </div>
    );
};

export default MyPokemon;
