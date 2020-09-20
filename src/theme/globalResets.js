// Remove
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: "Montserrat" !important;
  }

  ul {
    list-style: none;
  } 

  a {
    text-decoration: none;
  }

  body {
    background-color: ${({ theme }) => theme.palette.secondary};
  }
`;
