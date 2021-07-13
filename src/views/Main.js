import React, { useState } from "react";
import Header from "../components/Elements/Header";
import MyPokemon from "../components/MyPokemon/MyPokemon";
import TeamTray from "../components/TeamBuilder/TeamTray";
import LogReg from "../components/Login-Reg/LogReg";
import PokeThumb from "../components/Elements/PokeThumb";
import GenList from "../components/GenList";

const Main = (props) => {
    const myPokes = [
        { name: "Pikachu", index: 25, shiney: false },
        { name: "Vileplume", index: 45 , shiney: false},
        { name: "Jumpluff", index: 189 , shiney: false},
        { name: "Appletun", index: 842 , shiney: false},
        { name: "Eldegoss", index: 830 , shiney: false},
        { name: "Decidueye", index: 724 , shiney: false},
        { name: "Pikachu", index: 25 , shiney: true},
    ];

    const [teamName, setTeamName] = useState("Test");

    // const title = userStatus.loggedIn
        // ? `Welcome back ${userStatus.userFirstName}`
        // : "How would you like to begin your PokeFlex journey?";
const title = "How would you like to begin your PokeFlex journey?"
    return (
        <div className="container-fluid" id="main-view">
            <Header title={title} />
            <LogReg />
            <MyPokemon/>
            {/* <div className="row">
                {myPokes.map((poke, id) => {
                    return (
                        <div className="col">
                            <PokeThumb id={poke.index} name={poke.name} />
                        </div>
                    );
                })}
            </div> */}
            {/* <TeamTray teamName={teamName} setTeamName={setTeamName} /> */}
        </div>
    );
};

export default Main;
