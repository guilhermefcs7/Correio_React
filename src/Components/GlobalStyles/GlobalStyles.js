import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body,html{
    font-family: 'Montserrat', sans-serif;
    background-color: #050A30;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
}
   
`;