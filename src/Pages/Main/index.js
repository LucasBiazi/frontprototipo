// Importações para a página main
import React from 'react';
import { CssMain } from './styles';
import { Link } from 'react-router-dom';

//Função padrão de exportação da página
export default function Main() {
    return (
        <CssMain>
            <body>
                    <div className="pikachu"></div>
                <div className="mainDiv">
                    <Link to="/cadastropk">
                        <div className="btn_cadpk">
                            <h3>cadastrar pokémon</h3>
                        </div>
                    </Link>
                    <Link to="/relatorios">
                        <div className="btn_gr">
                            <h3>relatório de donos</h3>
                        </div>
                    </Link>
                    <Link to="/">
                        <h3 className="login">sair</h3>
                    </Link>
                </div>
            </body>
        </CssMain>
    );
}