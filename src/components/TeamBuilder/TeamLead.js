import React, { useState } from "react";
import SearchAdd from "./SearchAdd";
const TeamLead = (props) => {
    const [enabled, setEnabled] = useState(false);
    const { teamName, setTeamName, myPokes } = props;
    const [editEn, setEditEn] = useState(false);

    const clickhandler = (e) => {
        e.preventDefault();
        enabled === true ? setEnabled(false) : setEnabled(true);
    };
    const clickhandler2 = (e) => {
        e.preventDefault();
        editEn === true ? setEditEn(false) : setEditEn(true);
    };

    return (
        <div className="tray-lead">
            {teamName}
            <input
                type="button"
                className="util-butt"
                value="edit"
                name="edit"
                onClick={clickhandler2}
            />
            {editEn && (
                <div className="input-group">
                    <label>Change Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={teamName}
                        onChange={(e) => {
                            e.preventDefault();
                            setTeamName(e.target.value);
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default TeamLead;
