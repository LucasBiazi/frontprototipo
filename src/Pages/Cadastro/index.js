//Importações para a página de cadastro
import React, { useState } from 'react';
import { CssCad } from './styles';
import { Link } from 'react-router-dom';
import api from '../../Services/api';

//Função padrão de exportação da página
export default function cadastro({ history }) {
  //Variáveis que conterão informações base do user
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  //função que manda os dados para /sessions (cadastro)
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const result = await api.post("/cadastro", {
        name,
        email,
        password
      })

      console.log(result);
      //manda o user para a tela de cadastro
      history.push("/")
    } catch (err) {
      console.log(err);

    }
  }
  return (
    //Estrutura (html e css (styled-components))
    <CssCad>
      <body>
        <div className="divPrincipal">
          <form onSubmit={handleSubmit}>
            <div className="titulo">
              <h3>cadastro</h3>
            </div>
            <div className="divForm">
              <input placeholder="nome" type="text"
                //pegando o valor do nome
                id="nome"
                onChange={event => setName(event.target.value)}
              ></input>
              <input placeholder="email" type="email"
                //pegando o valor do email
                id="email"
                onChange={event => setEmail(event.target.value)}
              ></input>
              <input placeholder="senha" type="password"
                //pegando o valor da senha
                id="password"
                onChange={event => setPassword(event.target.value)}
              ></input>
              <button className="botao" type="submit">
                <h3>✓</h3>
              </button>
            </div>
          </form>
        </div>
        <Link to="/">
          <h3 className="voltar">login</h3>
        </Link>
      </body>
    </CssCad>
  );
}