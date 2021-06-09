import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

		${({ theme }) => css`
      body,
      button {
        -webkit-font-smoothing: antialiased;
        font-family: ${theme.font.family};
      }
    `}


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


		.container-org {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%
		}


`
