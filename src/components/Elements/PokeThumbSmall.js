import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate, useHistory } from "react-router-dom";
const PokeThumbSmall = (props) => {
    const { _id, url, name, shiney, setRefresh, subtract, add } = props;
    const [poke, setPoke] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [sprites, setSprites] = useState([]);
    const apiURL = url;
    useEffect(() => {
        axios.get(apiURL).then((res) => {
            console.log(res.data);
            setPoke(res.data);
            setLoaded(true);
            setSprites(res.data.sprites);
        });
    }, [apiURL]);
    const history = useHistory()
    const clickHandler = () => {
        axios
            .post(
                "http://localhost:8000/api/poke",
                { index: poke.id, name: poke.name },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res.data);
                setRefresh("added "+poke.name);
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
    const deleteHandler = () => {
        axios
            .delete("http://localhost:8000/api/poke/" + _id, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res.data);
                setRefresh("deleted "+poke.name);
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
    console.log("sprites", sprites);
    // const type = poke.types[0].type.name
    let image = (shiney && sprites.front_shiny) || sprites.front_default;
    console.log("image", image);
    return (
        <div className={"image bg corners bg-red"}>
            {loaded && (
                <div className="container-fluid">
                    <div className="row">
                        <p>
                            {poke.id} - {poke.name}
                        </p>
                    </div>
                    <div className="row">
                        <img src={image} className="img-fluid" />
                    </div>
                    <div className="row">
                        <div className="btn-group controls" role="group">
                            {add && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        clickHandler();
                                    }}
                                >
                                    +
                                </button>
                            )}
                            {subtract && (
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        deleteHandler();
                                    }}
                                >
                                    -
                                </button>
                            )}

                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={(e) => {
                                    e.preventDefault();
                                    history.push(`/pokemon/${poke.id}`);
                                }}
                            >
                                View
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PokeThumbSmall;
