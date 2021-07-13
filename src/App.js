import React, {useState} from "react";
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

const App = () => {
    const [user, setUser] = useState([])
    return (
        <div className="app">
            <Router>
                <NavBar />
                <Switch>
                <Route path="/pokemon/">
                  
                    </Route>
                    <Route path="/pokemon/:id">
                        <PokemonDetails />
                    </Route>
                    <Route path="/generation">
                        <GenList />
                    </Route>
                    <Route path="/type">
                        <TypeList />
                    </Route>
                    <Route path="">
                        <Main />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
