import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import NavBar from "./components/Elements/NavBar";
import Main from "./views/Main";
import PokemonDetails from "./views/PokemonDetails";
import GenList from "./components/GenList";
import TypeList from "./components/TypeList";
//Styles
import "./App.css";
import "./styles/templateStyle.css";
import "./styles/types.css";
import AllPokemon from "./views/AllPokemon";

//Auth context
export const AuthContext = React.createContext();
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem("user", JSON.stringify(action.payload.user));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case "LOGOUT":
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

const App = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <AuthContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            <div className="app">
                <Router>
                    <NavBar />
                    <div className="appbody">
                        <Switch>
                            <Route path="/pokemon/:id">
                                <PokemonDetails />
                            </Route>
                            <Route path="/pokemon/">
                                <AllPokemon/>
                            </Route>
                            <Route path="/generation">
                                <GenList />
                            </Route>
                            <Route path="/type">
                                <TypeList />
                            </Route>
                            <Route path="/">
                                <Main />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        </AuthContext.Provider>
    );
};

export default App;
