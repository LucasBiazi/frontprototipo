//Importção para o estilo da página main
import styled from "styled-components";
import pikachu from "../../Images/pikachugif.gif";

export const CssMain = styled.div`
@import url('https://fonts.googleapis.com/css?family=Sunflower:300&display=swap');
/* Fontes e classes usadas */
a{
        text-decoration:none;
        cursor: pointer;
    }
    body{
        width: 100%; 
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;    
        background-color: black;
    }
    .pikachu{
        position: absolute;
        background-color: red;
        width: 300px;
        height: 220px;
        margin-left: 125px;
        background-color: red;
        background: url(${pikachu});
        background-size: cover;
    }
    .mainDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;    
        width: 100%; 
        height: 100%;
        /* background-color: white; */
    }
    .btn_cadpk,.btn_gr{
        border: 2px solid white;
        display: flex;
        align-items: center;
        justify-content: center;    
        height: 100px;
        width: 270px;
        color: white;
        font-size: 25px;
        cursor: pointer;
    }
    .btn_cadpk:hover {
        background-color: #434343;
    }  
    .btn_gr:hover{
        background-color: #434343;
    }
    h3{
        font-family: 'Sunflower', sans-serif;
        color: white;
        font-weight: lighter;
    }
    .login{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    font-size: 20px;
    width: 120px;
    border-bottom: 1px solid white;
    border-left: 1px solid white;
    border-right: 1px solid white;      
    }

    @media only screen and (max-width: 850px) {
    .pikachu{    
        background: none;
        margin: 0px;
        width: 0px;
        height: 0px;
    }
    }

`;