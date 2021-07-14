import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Elements/Header";
import Slider from './Slider/Slider'
const TypeScroll = (props) => {
    const { url,title } = props;
    const [gen, setGen] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [show, setShow]= useState(false)

    const headerClick = () => {
        if(show===true){
            setShow(false)
        }
        else {
            setShow(true)
        }
    }

    useEffect(() => {
        axios.get(url).then((res) => {
            let arr = res.data.pokemon.map((species, idx)=> {
                return (
                    species.pokemon
                )
            })
            console.log("type", res.data);
            setLoaded(true);
            setGen(arr)
        // pokeprocess()
        });
    }, [url]);
    return (
        <div>
            {loaded && (
                <div>
                    <div onClick={e=>{e.preventDefault();headerClick()}}>
                    <Header title={title} bg={title}/>
                    </div>
{show && <Slider pokemon={gen}/>}
                </div>
            )}
        </div>
    );
};

export default TypeScroll;
