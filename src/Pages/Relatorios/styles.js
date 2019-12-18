//Importção para o estilo da página main
import styled from "styled-components";


export const CssRel = styled.div`
/* Fontes e classes usadas */
@import url('https://fonts.googleapis.com/css?family=Sunflower:300&display=swap');
    a{
        text-decoration:none;
        cursor: pointer;
    }
    h2{
        font-family: 'Sunflower', sans-serif;
        color: white;
        /* border-bottom: 1px solid #dddddd; */
        font-weight: lighter;
    }
    p{
        color: white;
    }
    body{
        width: 100%; 
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;    
        background-color: black;
    }
    section{
        overflow-x: auto;
    }
    table{
        font-family: 'Sunflower', sans-serif;
        font-weight: lighter;
        margin-top: 10px;
        width: 700px;
        
    }
    .nomes{
        border: 1px solid #dddddd;
        color: white;
        font-family: 'Sunflower', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: (100%/3);
        height: 40px;
        /* background-color: gray; */
    }
    .atk{
        border: 1px solid #dddddd;
        color: white;
        font-family: 'Sunflower', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 134,28px;
        height: 40px;   
    }
    .nomespk{
        color: white;
        font-family: 'Sunflower', sans-serif;
        padding: 5px;
        width: (100%/3);
    }
    td, th {
        color: white;
        font-size: 20px;
        border: 1px solid white;
        text-align: left;
        padding: 5px;
    }
    tr:nth-child(even){ 
        background-color: #223622; 
    }
    .div_btn{
        display: flex;
        height: 80px;
        align-items: center;
        justify-content: center;
        background-color: black;
        width: 100%;
    }
    .voltar{    
        font-weight: lighter;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
        width: 120px;
        border-bottom: 1px solid white;
        border-left: 1px solid white;
        border-right: 1px solid white;
        color: white;
    }
    @media only screen and (max-width: 850px) {
    table{    
        width: 350px;
    }
}
`;