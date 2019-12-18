import { createGlobalStyle } from 'styled-components';

//Estilos globais, tirando margin e padding e colocando cursor poointer pra todo button tag
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  a{
        text-decoration:none;
        cursor: pointer;
    }
  button {
    cursor: pointer;
  }
`;