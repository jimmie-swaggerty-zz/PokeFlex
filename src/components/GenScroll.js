import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Elements/Header";
import Slider from './Slider/Slider'
const GenScroll = (props) => {
    const { url,title } = props;
    const [gen, setGen] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [show, setShow]= useState(true)

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
            setGen(res.data.results);
            console.log("gen", res.data.results);
            setLoaded(true);
        });
    }, []);

    return (
        <div>
            {loaded && (
                <div>
                    <div onClick={e=>{e.preventDefault();headerClick()}}>
                    <Header title={title}/>
                    </div>
{show && <Slider pokemon={gen}/>}
                </div>
            )}
        </div>
    );
};

export default GenScroll;
