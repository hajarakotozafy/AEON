import React from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./core/theme";
import GlobalStyle from "./core/theme/global";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import DevisSection from "./components/DevisSection";
import Clients from "./components/Clients";
import Footer from "./components/Footer"
import "@fontsource/manrope/500.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Navbar/>
            <Hero/>
            <DevisSection/>
            <Clients/>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;
