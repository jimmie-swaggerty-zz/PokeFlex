import React, { useState } from "react";
import "./TeamTray.css";
import TeamLead from "./TeamLead";
import UtilTray from "./UtilTray";

const TeamTray = (props) => {
    const [selectedTeam, setSelectedTeam] = useState([]);
    const {teamName, setTeamName, myPokes} = props;
    const addPoke = ({ pokemon }) => {
        var newArray = [];
        if (selectedTeam.length < 6) {
            newArray = [...selectedTeam, pokemon];
            setSelectedTeam(newArray);
        }
    };

    const removePoke = (index) => {
        var newArray = [];
        for (var i = 0; i < selectedTeam.length; i++) {
            if (i !== index) {
                newArray.push(selectedTeam[i]);
            }
            setSelectedTeam(newArray);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
    };
    return (
        <div className="team-tray bg bg-red corners container">
            <div className="row">
                <UtilTray />
                <TeamLead teamName={teamName} setTeamName={setTeamName} myPokes={myPokes} />
                {selectedTeam.length > 0 &&
                    selectedTeam.map((Pokemon, index) => {
                        <div>{selectedTeam.name}</div>;
                    })}
                <form onSubmit={submitHandler}></form>
            </div>
        </div>
    );
};

export default TeamTray;
