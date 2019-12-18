import React, { Component } from 'react';
import api from '../../Services/api';
import { CssRel } from './styles';
import { Link } from 'react-router-dom';

//Função padrão de exportação da página
export default class Relatorios extends Component {

    state = {
        Pokemons: []
    }
    componentDidMount() {
        this.loadPokemons();
    }

    loadPokemons = async () => {
        const resposta = await api.get('/Listpk');
        this.setState({ Pokemons: resposta.data })

        //     var ArrayTable = [];
        //     for (var i = 1; i < table.rows.length; i++) {
        //         ArrayTable.push({
        //         Pokemon: table.rows[i].cells[0].innerHTML,
        //         Ataque: table.rows[i].cells[1].innerHTML
        //     });
        // };

    }
    render() {
        console.log(this.state.Pokemons);
        return (
            <CssRel>
                <body>
                    {/* <table className="tabela">
                    <tr>
                        <th>Pokemon</th>
                        <th>Ataque</th>
                    </tr>
                    <tr>
                        <td>pk1</td>
                        <td>1</td>
                    </tr>

                </table> */}
                    {/* <div className="tablee">
                        <div>
                            <div className="nomes">
                                <p>NOMES</p>
                            </div>
                            <div className="nomespk"> {this.state.Pokemons.map(Pokemons => (
                                <h2 key={Pokemons._id}> {Pokemons.name} </h2>
                            ))}</div>
                        </div>
                        <div>
                            <div className="atk">
                                <p>ATAQUE</p>
                            </div>
                            <div className="nomespk"> {this.state.Pokemons.map(Pokemons => (
                                <h2 key={Pokemons._id}> {Pokemons.attack} </h2>
                            ))}</div>
                            
                        </div>
                        <div>
                            <div className="atk">
                                <p>DONO</p>
                            </div>
                            <div className="nomespk"> {this.state.Pokemons.map(Pokemons => (
                                <h2 key={Pokemons._id}> {Pokemons.user ? Pokemons.user.name : '-'} </h2>
                            ))}</div>
                            
                        </div>
                    </div> */}
                    <section>
                        <table>
                            <thead>
                                <tr>
                                    <th>Dono</th>
                                    <th>Pokemon</th>
                                    <th>ATK</th>
                                    <th>DEF</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Pokemons.map(Pokemons => (
                                    <tr key={Pokemons._id}>
                                        <td> {Pokemons.user ? Pokemons.user.name : '-'} </td>
                                        <td> {Pokemons.name} </td>
                                        <td> {Pokemons.attack} </td>
                                        <td> {Pokemons.defense} </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                    <div className="div_btn">
                        <Link to="/main">
                            <h3 className="voltar">voltar</h3>
                        </Link>
                    </div>
                </body>
            </CssRel >
        );
    }
}

