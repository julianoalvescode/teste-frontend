import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

		* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #__next {
        height: 100%;

    }

    body, button {
        -webkit-font-smoothing: antialiased;
        font-family: 'Inter', Arial, Helvetica, sans-serif;
    }

		.container-org {
			display: flex;
			align-items: center;
			justify-content: center;
		}


`
