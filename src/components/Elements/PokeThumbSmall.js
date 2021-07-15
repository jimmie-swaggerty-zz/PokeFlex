import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const PokeThumbSmall = (props) => {
    const { id, url, name, shiney } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const apiURL = url;
    useEffect(() => {
        axios.get(apiURL).then((res) => {
            // console.log(res.data);
            setPoke(res.data);
            setLoaded(true);
        });
    }, [apiURL]);

    const clickHandler = () => {
        const nickname = prompt(
            "What would you like to call this pokemon?",
            poke.name
        );
        axios
            .post(
                "http://localhost:8000/api/poke",
                { index: poke.id, name: poke.name, nickname: nickname },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                //   if (err.response.status===401){
                //       setAuthError("Please sign in to continue")
                //   }
                //   else if (err.response.status===403) {
                //       setAuthError(err.response.data.message)
                //     }
                //   else{
                //       setErrors(err.response.data.errors);
                //   }
                console.log("err", err);
            });
    };
    const sprites = poke.sprites;
    // const type = poke.types[0].type.name
    return (
        <Link to={`/pokemon/${poke.id}`}>
            <div className={"image bg corners bg-red"}>
                {loaded && (
                    <div className="container-fluid">
                        <div className="row">
                            <p>{poke.id} - {poke.name}</p>
                        </div>
                        <div className="row">
                            <img
                                src={sprites.front_default}
                                // className="img-fluid"
                            />
                        </div>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default PokeThumbSmall;
