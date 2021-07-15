import React, { useState, useEffect } from "react";
import TypeScroll from "./TypeScroll";
import axios from "axios";




const TypeList = (props) => {
    const [types, setTypes]= useState([])
    const [loaded, setLoaded]=useState(false)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/type/').then((res) => {
            setTypes(res.data.results);
            // console.log("gen", res.data.results);
            setLoaded(true);
        });
    }, []);

    return (
        <div className="container-flex justify-content-between">
            {loaded && types.map((type, idx) => {
                    // console.log(type)
                    return (
                        <div key={idx} className="genlist">
                            <TypeScroll title={type.name} url={type.url}/>
                        </div>
                    );
                })}
        </div>
    );
};

export default TypeList;
