import React from "react";
import { Generations } from "../reference/Generations";

import GenScroll from "./GenScroll";


const GenList = (props) => {
    return (
        <div className="container-flex justify-content-between">
            {Generations.map((gen, idx) => {
                    console.log(gen)
                    return (
                        <div key={idx} className="genlist">
                            <GenScroll title={gen.name} url={`https://pokeapi.co/api/v2/pokemon?offset=${gen.start}&limit=${gen.limit}`}/>
                            {/* <PokeGrid url={`https://pokeapi.co/api/v2/pokemon?offset=${gen.start}&limit=${gen.limit}`} title={gen.name}/> */}
                        </div>
                    );
                })}
        </div>
    );
};

export default GenList;
