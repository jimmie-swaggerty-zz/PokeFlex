import "./Slider.css";
import React, {useState} from "react";
import $ from "jquery";
import PokeThumbSmall from '../Elements/PokeThumbSmall'

const Slider = (props) => {

  const {pokemon, divid, setRefresh, refresh, subtract, add} =(props)
    const scroll = (direction) => {
        let far = ($(`#${divid} .image-container`).width() / 2) * direction;
        let pos = $(`#${divid} .image-container`).scrollLeft() + far;
        $(`#${divid} .image-container`).animate({ scrollLeft: pos }, 1000);
    };

    return (
        <div className="main">
            <div className="wrapper">
                <button
                    className="prev"
                    onClick={(e) => {
                        e.preventDefault();
                        scroll(-1);
                    }}
                >
                    &#10094;
                </button>
                <div className="image-container">
                 
                    {pokemon.map((poke,idx) =>{
                        let url = poke.url || `https://pokeapi.co/api/v2/pokemon/${poke.index}`
                        let shiney = poke.shiney || false
                        return(
                           <PokeThumbSmall url={url} className="image" shiney={shiney} _id={poke._id} refresh={refresh} setRefresh={setRefresh} subtract={subtract} add={add}/>
                        )
                    })}
                </div>
                <button
                    className="next"
                    onClick={(e) => {
                        e.preventDefault();
                        scroll(1);
                    }}
                >
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slider;
