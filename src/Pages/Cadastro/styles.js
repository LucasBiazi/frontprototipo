//Importção para o estilo da página de cadastro
import styled from "styled-components";


export const CssCad = styled.div`
/* Fontes e classes usadas */
@import url('https://fonts.googleapis.com/css?family=Sunflower:300&display=swap');
a{
    text-decoration:none;
    cursor: pointer;
}
h3{
    font-family: 'Sunflower', sans-serif;
    color: white;
    font-weight: lighter;
}
body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: black;
}
.divPrincipal{    
    height: 550px;
    width: 300px;
}
.titulo{
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 40px;
    width: inherit;
    height: 100px;
}
.divForm{    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 70px;
    width: inherit;
    height: 250px;
}
input{
    font-weight: lighter;
    border-top: 2px solid black;
    border-right: 2px solid black;
    border-left: 2px solid black;
    font-family: 'Sunflower', sans-serif;
    background-color: black;
    font-size: 25px;
    color: white;
    height: 28px;
    width: 350px;
    cursor: pointer;
}
.botao{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 350px;
    color: white;
    font-size: 25px;
    background-color: black;
}
.botao:hover {
  background-color: #434343;
}
.voltar{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
    width: 120px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
}
@media only screen and (max-width: 850px) {
    input{    
    font-size: 23px;
}
.divPrincipal{    
    width: 300px;
}
input{
    width: 280px;
    font-size: 28px;
}
.botao{
    width: 280px;
}

}
`;