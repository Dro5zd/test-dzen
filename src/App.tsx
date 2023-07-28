import React from 'react';
import {MainRoutes} from "./routes/MainRoutes";
import {TopMenu} from "./components/TopMenu/TopMenu";

function App() {
    return (
        <>
            <TopMenu/>
            <MainRoutes/>
        </>
    );
}

export default App;
