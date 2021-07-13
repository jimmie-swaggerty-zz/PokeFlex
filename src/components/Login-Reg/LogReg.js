import React from "react";
import Login from "./Login";
import RegisterUser from "./RegisterUser";

const LogReg = (props) => {
    return (
        <div className="container justify-content-center log-reg">
            <div className="headerbody">
                <p className="welcome"></p>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 bg bg-default corners">
                    <div className="row">
                        <div className="col">
                            <Login
                                setUser={props.setUser}
                            />
                        </div>
                        <div className="col">
                            <RegisterUser />
                        </div>
                    </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    );
};

export default LogReg;
