import React from "react";
import "./UtilTray.css";

const UtilTray = (props) => {
    return (
        <div className="util-tray">
            <div className="row util-butt-row align-items-center">
                <button className="util-butt">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
            <div className="row util-butt-row align-items-center">
                <button className="util-butt">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
            <div className="row util-butt-row align-items-center">
                <button className="util-butt">
                    <i class="bi bi-pencil-square"></i>
                </button>
            </div>
        </div>
    );
};

export default UtilTray;
