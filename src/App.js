import {BrowserRouter} from 'react-router-dom';
import React from "react";
import Routes from "./routes/Routes"
import Header from "./components/Header"
import Dialogs from "./components/Dialogs"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes />
                <Dialogs />
            </BrowserRouter>
        </div>

    );
}

export default App;
