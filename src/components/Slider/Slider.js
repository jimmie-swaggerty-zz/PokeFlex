import "./Slider.css";
import React from "react";
import $ from "jquery";
import PokeThumbSmall from '../Elements/PokeThumbSmall'

const Slider = (props) => {

  const {pokemon} =(props)
    const scroll = (direction) => {
        let far = ($(".image-container").width() / 2) * direction;
        let pos = $(".image-container").scrollLeft() + far;
        $(".image-container").animate({ scrollLeft: pos }, 1000);
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
                        return(
                           <PokeThumbSmall url={url} className="image"/>
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
