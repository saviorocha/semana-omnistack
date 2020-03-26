import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

//switch: faz com que se use uma rota por vez
//usa-se o exact na rota de logon pois o react verifica apenas se a string
//está na rota, então em /register ele verifica que ela contem "/" e
//redireciona para a tela de login. Com o exact ele apenas vai para a tela de 
//login se o texto for exatamente "/"
export default function Routes() {
    return (
        <BrowserRouter> 
            <Switch> 
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}