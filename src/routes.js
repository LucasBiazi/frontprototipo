import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { autenticacao } from './cofig/autenticacao';


import Login from './Pages/Login';
import Cadastro from './Pages/Cadastro';
import Main from './Pages/Main';
import Cadastropk from './Pages/Cadpk';
import Relatorios from './Pages/Relatorios';
// import Main from './Pages/Main';

// // //Transformando render, de modo que possamos abrir somente se autenticacao = true
// const rotaPrivada = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         //Se for true
//         autenticacao ? (
//             <Component {...rest} />
//             //caso contrário
//         ) : (
//                 <Redirect to={{ pahtname: '/', state: { from: props.location } }} />
//             )


//     )} />
// );

export default function Mapa() {
    return (
        <BrowserRouter>
        <Route exact path="/" component={Login} />
        <Route exact path="/cadastro" component={Cadastro} />
        <Route exact path="/cadastropk" component={Cadastropk} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/relatorios" component={Relatorios} />
        {/* <Route exact path="/main" component={Main} /> */}
            <Switch>
                
                {/* A página de cadastro só pode acessada por usuários autenticados */}
                {/* <rotaPrivada exact path="/Cadastrar" component={Cadastro} /> */}
            </Switch>
        </BrowserRouter>
    );
}