import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    html{
        font-family: "Poppins", serif;
        color: white;  
    }
    body{
        background-color: #0F1624;
    }
    .hero{
        margin: 10rem 0px 30px 12rem;
        position: relative;
        max-width: 660px;
    }
    .projects{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        margin-top: 190px;
    }
    .projects > div:first-child {
        justify-self: end;
        margin: 0 5rem 0 0;
    }
    .projects > div:nth-child(3) {
        justify-self: end;
        margin: 5rem 5rem 0 0;
    }
    .projects > div:nth-child(2) {
        justify-self: start;
        margin: 0 0 0 5rem;
    }
    .projects > div:nth-child(4) {
        justify-self: start;
        margin: 5rem 0 0 5rem;
    }
    .project{
        width: 34rem;
        height: 38rem;
        border-radius: 30px 0 30px;
        box-shadow: 0 0 20px white;
        
    }
    .project > a > button {
        height: 4rem;
        width: 12.5rem;
        margin: 2rem 0 0 3rem;
        font-size: 18px;

        &:hover{
            transform: scale(1.1);
        }
    }
    .project > img {
        margin: 1.5rem 1.5rem 0 1.5rem;
        height: 15rem;
    }
    .project > h1 {
        text-align: center;
        font-size: 30px;
    }
    .project > p {
        margin: 0 3rem 0 3rem;
        font-size: 15px;
    }
    .bt{
        width: 14rem;
        display:flex;
        align-items: center;
        color: #0F1624;
        
        &:hover{
            transform: scale(1.1);
        }
    }
    .bt > img {
        margin-left: 1rem;
    }

`;