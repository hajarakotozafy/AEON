import React from "react";
import Hero from "../Hero";
import DevisSection from "../DevisSection";
import Clients from "../Clients";

const LandingPage:React.FC = () => {
    return(
        <>
            <Hero/>
            <DevisSection/>
            <Clients/>
        </>
    )
}

export default LandingPage;