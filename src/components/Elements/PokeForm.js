import React from "react";
import { navigate } from "@reach/router";

const PokeForm = (props) => {
    const { pokemon, setPoke, errors, submitHandler, buttonLabel } = props;

    // this works for ALL keys inside of the state object!!
    const inputChange = (e) => {
        let newStateObject = { ...pokemon };
        newStateObject[e.target.name] = e.target.value;
        setPoke(newStateObject);
        console.log(pokemon);
    };
    console.log(pokemon);
    return (
        <div className="feed">
            <div className="pokemon align-middle">
                <div className="formheader">
                    <b>Add {pokemon.name} to your pokedex</b>
                </div>
                <form onSubmit={submitHandler} className="formbody">
                    <div className="row">
                        <div class="col">
                            {errors.title ? (
                                <span className="error-text">
                                    {errors.title.message}
                                </span>
                            ) : null}
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                placeholder="Nick Name"
                                value={pokemon.title}
                                onChange={(e) => inputChange(e)}
                            />
                        </div>
                        <div className="col">
                            <label>Is this Pokemon Shiney?</label>
                            <div className="form-group">
                                <input
                                    type="checkbox"
                                    name="shiney"
                                    className=""
                                    value={true}
                                    onChange={(e) => inputChange(e)}
                                />
                            </div>
                            <button className="btn btn-light me-2 btn-outline-primary">
                                {buttonLabel}
                            </button>
                            <button
                                onClick={() => navigate("/")}
                                className="btn btn-light me-2 btn-outline-primary"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PokeForm;
