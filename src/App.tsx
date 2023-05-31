import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {ThemeProvider} from "styled-components";
import theme from "./core/theme";
import GlobalStyle from "./core/theme/global";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import DevisSection from "./components/DevisSection";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import "@fontsource/manrope/500.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                <BrowserRouter>
                    <Navbar/>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/Privacy-Policy/" element={<p>privacy policy</p>}/>
                            <Route path="/Legal-Notice/" element={<p>legal notice</p>}/>
                        </Routes>
                    <Footer/>
                </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
