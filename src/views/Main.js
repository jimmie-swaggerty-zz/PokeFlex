import React, { useState } from "react";
import Header from "../components/Elements/Header";
import MyPokemon from "../components/MyPokemon/MyPokemon";
import LogReg from "../components/Login-Reg/LogReg";


const Main = (props) => {

const title = "How would you like to begin your PokeFlex journey?"
    return (
        <div className="container-fluid" id="main-view">
            <Header title={title} />
            <LogReg />
        </div>
    );
};

export default Main;
