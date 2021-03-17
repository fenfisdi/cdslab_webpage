import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

        html {
                box-sizing: border-box;
                font-family: 'Montserrat', sans-serif;
                font-size: 62.5%; /* with this we achive 1rem == 10 px*/
        }
        
        *, *::before, *::after {
                box-sizing: border-box;
	        margin: 0;
	        padding: 0;
        }
        p {
                font-size: 1.6rem; /* 1rem == 10 px, in this case, font size of p = 16px */
        }
        
        ul, li, h1, h2, h3, p, button {
                margin: 0;
        }
        a{
                text-decoration: none;
        }

        ul {
                list-style: none;
                padding: 0;
        }

        button {
                background: transparent;
                border: 0;
                outline: 0;
        }

        body {
                color: #333;
                height: 100vh;
                margin: 0 auto;
                overscroll-behavior: none;
                width: 100%;
                font-weight: 400;
        }

        #app {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
                overflow-x: hidden;
                min-height: 100vh;
                padding-bottom: 10px;
        }
        .warn{
                 color: #f9a264 !important;
        }
        .error{
                color: #ff9595 !important;
                
        }
        .success{
                color: #6c9a06 !important;    
        }
        .align-center{
           text-align: center;     
        }
        `
