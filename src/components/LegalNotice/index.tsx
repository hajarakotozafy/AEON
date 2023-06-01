import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const LegalNotice: React.FC = () => {
    return (
        <LegalNoticeContainer>
             <h2>Legal Notice</h2>
            <div>
                <h4>Identification de l'entreprise</h4>
                <p>Nom de l'entreprise: [Nom de votre entreprise]<br/>Adresse du siège social: [Adresse complète du siège social de l'entreprise]<br/>Numéro de téléphone: [Numéro de téléphone de l'entreprise]<br/>Adresse e-mail: [Adresse e-mail de l'entreprise]<br/>Numéro SIRET: [Numéro SIRET de l'entreprise]<br/>Directeur de publication: [Nom du directeur de publication]<br/>Hébergeur du site web: [Nom et adresse de l'hébergeur du site web]</p>
            </div>
            <div>
                <h4>Propriété intellectuelle</h4>
                <p>Le contenu de ce site web, y compris les textes, images, vidéos et autres contenus, est protégé par les lois sur la propriété intellectuelle et est la propriété exclusive de [Nom de votre entreprise] ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation du contenu sans autorisation écrite est strictement interdite.</p>
            </div>
            <div>
                <h4>Responsabilité</h4>
                <p>Les informations et les services sur ce site web sont fournis à titre informatif seulement. Nous ne garantissons pas l'exactitude, l'exhaustivité ou la fiabilité de ces informations. Nous déclinons toute responsabilité pour toute perte ou préjudice découlant de l'utilisation de ce site web ou des informations qu'il contient.</p>
            </div>
            <div>
                <h4>Liens vers des sites tiers</h4>
                <p>Ce site web peut contenir des liens vers des sites web tiers. Nous n'avons aucun contrôle sur le contenu de ces sites et déclinons toute responsabilité pour les infromations, les services ou les produits proposés sur ces sites.</p>
            </div>
            <div>
                <h4>Données personnelles</h4>
                <p>Les informations personnelles que nous collectons sur ce site web sont traitées conformément à notre politique de confidentialité, disponible à l'adresse suivante:<Link to="/Privacy-Policy/">[lien vers la politique de confidentialité]</Link>.</p>
            </div>
            <div>
                <h4>Cookies</h4>
                <p>Ce site web utilise des cookies pour améliorer votre expérience de navigation et pour recueillr des informations sur l'utilisation de notre site web. Pour plus d'informations sur l'utilisation des cookies sur ce site web, veuillez consulter notre politique de cookies disponible à l'adresse suivante: [lien vers la politique de cookies].</p>
            </div>
            <div>
                <h4>Droit applicable et juridiction compétente</h4>
                <p>Ces mentions légales sont régies par le droit français. Tout litige découlant de l'utilisation de ce site web sera soumis à la compétence exclusive des tribunaux français.</p>
            </div>
            <div>
                <h4>Modifications des mentions légales</h4>
                <p>Nous nous réservons le droit de modifier ces mentions légales à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web.</p>
            </div>
            <div>
                <h4>Contactez-nous</h4>
                <p>Si vous avez des questions ou des préoccupations concernant ces mentions légales, veuillez nous contacter à l'adresse e-mail suivant: [adresse e-mail de contact].</p>
            </div>
        </LegalNoticeContainer>
    )
}

export default LegalNotice;

const LegalNoticeContainer = Styled.div`
    h2{
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }
    width: auto;
    padding: 16px 80px;
    @media screen and (max-width: 650px){
        padding: 16px 32px;
    }
    // background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    gap: 32px;
    div {
        display: flex;
        flex-direction: column;
        color: #000000;
        font-size: 18px;
        font-weight: 600;
        flex-wrap: wrap;
        h4{
           padding: 0;
           margin: 0; 
        }
        p{
            margin: 0;
            padding: 0;
            text-align: justify;
        }
        @media screen and (max-width: 650px){
            font-size: 14px;
        }
    }
    &:before{
        position: fixed;
        content: "";
        width: 100%;
        height: 100vh;
        z-index: -5;
        background: #E5E5E5;
        top: 0;
        left: 0;

    }
`