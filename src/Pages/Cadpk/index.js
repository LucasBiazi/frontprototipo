//Importações para a página de pokemon
import React, { useState, useEffect } from 'react';
import { CssCadPk } from './styles';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { userLocal } from '../../Services/auth';

//Função padrão de exportação da página
export default function CadastroPk({ history }) {
  const Swal = require('sweetalert2')
  //Variáveis que conterão informações base do pokemon
  const [user, setUser] = useState('');
  // const [pokemon, setPokemon] = useState({ name: '', description: '', attack: '', defense: '', level: '', user: '' });
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [attack, setAttack] = useState("")
  const [defense, setDefense] = useState("")
  const [level, setLevel] = useState("")

  useEffect(() => {
    const { _id } = userLocal();
    setUser(_id);
  }, []);

  //função que manda os dados para /cadastropk (cadastro)

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const result = await api.post("/cadastropk", {
        name,
        description,
        attack,
        defense,
        level,
        user
      })

      console.log(result);
      Swal.fire({
        title: '*-*',
        text: 'Cadastrado com sucesso!',
        icon: 'correct',
        confirmButtonText: 'OK'
      })

      // history.push("/cadastropk")
    } catch (err) {

      console.log(err);
    }
  }
  return (
    //Estrutura (html e css (styled-components))
    <CssCadPk>
      <body>
        <div className="divPrincipal">
          <form onSubmit={handleSubmit}>
            <div className="titulo">
              <h3>cadastro de pokemons</h3>
            </div>
            <div className="divForm">
              <input placeholder="nome" type="text"
                //pegando o valor do nome
                id="nome"
                onChange={event => setName(event.target.value)}
              ></input>
              <input placeholder="descrição" type="description"
                //pegando o valor da description
                id="description"
                onChange={event => setDescription(event.target.value)}
              ></input>
              <input placeholder="ataque"
                //pegando o valor do attack
                id="attack"
                onChange={event => setAttack(event.target.value)}
              ></input>
              <input placeholder="defesa"
                //pegando o valor da defesa
                id="defesa"
                onChange={event => setDefense(event.target.value)}
              ></input>
              <input placeholder="level"
                //pegando o valor do level
                id="level"
                onChange={event => setLevel(event.target.value)}
              ></input>
              <button className="botao" type="submit">
                <h3>✓</h3>
              </button>]
              <Link to="/main">
                <h3 className="voltar">voltar</h3>
              </Link>
            </div>
          </form>
        </div>
      </body>
    </CssCadPk>
  );
}