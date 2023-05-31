import React from 'react';
import { HeroContainer, HeroLeft, Title, SubTitle, Paragraph } from './Hero.style';
import Vector from '../../assets/images/Vector.png';

const Hero: React.FC = () => {
    return(
        <>
        <HeroContainer>
            <HeroLeft>
                <Title>IMPOSSIBLE?</Title>
                <SubTitle>OSEZ L'IMPOSSIBLE <br/>AVEC AEON</SubTitle>
                <Paragraph>
                Vous cherchez une agence de marketing, design et développement web pour vous aider à atteindre vos objectifs en ligne ? Aeon est là pour vous accompagner. Nous mettons notre expertise et notre créativité à votre
disposition pour améliorer votre visibilité en ligne, optimiser votre site web
ou créer une nouvelle identité visuelle. Nous proposons également des 
services de référencement naturel (SEO), de publicité en ligne (SEA) et de 
gestion de réseaux sociaux pour aider votre entreprise à se développer en 
ligne. Notre équipe de professionnels passionnés est là pour vous guider à 
chaque étape du processus, en vous proposant des solutions adaptées à 
vos besoins. Que vous soyez une petite entreprise, une start-up en pleine 
croissance ou une grande entreprise, nous sommes là pour vous aider à 
concrétiser vos projets les plus ambitieux. Contactez-nous dès maintenant 
et osez l'impossible avec Aeon.
                </Paragraph>
            </HeroLeft>
            <img src={Vector} alt=""/>
        </HeroContainer>
        </>
    )
}

export default Hero;
