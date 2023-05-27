import {createGlobalStyle} from "styled-components";
import Back from "../../assets/images/Fond.svg";

const GlobalStyle = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body {
    font-size: ${(props:any) => props.theme.size(2) + 2}px;
    font-family: ${(props:any) => props.theme.typography.body};
    background: url(${Back});
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props:any) => props.theme.typography.heading};
  }
`
export default GlobalStyle
