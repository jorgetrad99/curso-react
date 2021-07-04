import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BadgeNew from "../pages/BadgeNew.jsx";
import Badges from "../pages/Badges.jsx";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/badges" component={Badges} />
                <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;