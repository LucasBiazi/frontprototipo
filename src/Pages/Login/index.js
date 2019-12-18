//Importações para a página de login
import React, { useState, useEffect } from 'react';
import { CssLogin } from './styles';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { login } from '../../Services/auth';

//Função padrão de exportação da página
export default function Login({ history }) {
  const [loading, setLoading] = useState('disabled');
  const [user, setUser] = useState({ email: '', password: '' });

  useEffect(() => {
    const isEnabled = () => {
      return user.email.length > 5 && user.password.length >= 5
        ? setLoading('')
        : setLoading('disabled');
    };
    isEnabled();
  }, [user]);

  function handleInputChange(e) {
    const { id, value } = e.target;
    setUser({
      ...user,
      [id]: value,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post(`/session`, user);

      const { token, user: userData } = response.data;

      if (token) {
        login(token, userData);
      }
      //pra onde vai
      history.push('/main');
    } catch (err) {
      toast.error('Email ou senha inválido!');
    }
  }

    return (
      //Estrutura (html e css (styled-components))
      <CssLogin>
        <body>
          <div className="divPrincipal">
          <form  onSubmit={handleSubmit}>
            <div className="titulo">
              <h3>login</h3>
            </div>
            <div className="divForm">
              <input placeholder="email"
              id="email"
              type="email"
              value={user.email}
              onChange={handleInputChange}
              required></input>
              <input placeholder="senha"
              id="password"
              type="password"
              value={user.password}
              onChange={handleInputChange}
              required
              ></input>
              <button className="botao" loading={loading}>
                <h3>></h3>
              </button>
            </div>
          </form>
          </div>
          <Link to="/cadastro">
          <h3 className="cadastro">primeira vez?</h3>
          </Link>
        </body>  
      </CssLogin>
    );
}