import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {ThemeProvider} from "styled-components";
import theme from "./core/theme";
import GlobalStyle from "./core/theme/global";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import PrivacyPolicy from "./components/PrivacyPolicy";
import LegalNotice from './components/LegalNotice';
import "@fontsource/manrope/500.css";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
                <BrowserRouter>
                    <Navbar/>
                        <Routes>
                            <Route path="/" element={<LandingPage/>}/>
                            <Route path="/Privacy-Policy/" element={<PrivacyPolicy/>}/>
                            <Route path="/Legal-Notice/" element={<LegalNotice/>}/>
                        </Routes>
                    <Footer/>
                </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
