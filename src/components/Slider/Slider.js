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
                <a
                    className="prev"
                    onClick={(e) => {
                        e.preventDefault();
                        scroll(-1);
                    }}
                >
                    &#10094;
                </a>
                <div className="image-container">
                    {pokemon.map((poke,idx) =>{
                        return(
                           <PokeThumbSmall url={poke.url} className="image"/>
                        )
                    })}
                </div>
                <a
                    className="next"
                    onClick={(e) => {
                        e.preventDefault();
                        scroll(1);
                    }}
                >
                    &#10095;
                </a>
            </div>
        </div>
    );
};

export default Slider;
