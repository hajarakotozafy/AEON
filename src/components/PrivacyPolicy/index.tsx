import React from "react";
import Styled from "styled-components";

const PrivacyPolicy: React.FC = () => {
    return (
        <PrivacyPolicyContainer>
            <h2>Privacy Policy</h2>
            <div>
                <h4>Introduction</h4>
                <p>Notre entreprise s'engage à respecter la vie privée de ses utilisateurs et clients. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons les informations personnelles que vous nous fournissez. Nous vous encourageons à lire cette politique attentivement avant d'utiliser notre site web.</p>
            </div>
            <div>
                <h4>Collecte d'informations personnelles</h4>
                <p>Nous collections des informations personnelles lorsque vous nous les fournissez volontairement, comme lorsque vous remplissez un formulaire de contact ou d'inscription. Les informations que nous collections peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse postale, votre site web et d'autres informations pertinentes pour la prestation de nos services.</p>
            </div>
            <div>
                <h4>Utilisation des informations personnelles</h4>
                <p>Nous utilisons les informations personnelles que nous collections pour répondre à vos demandes, pour vous fournir des informations sur nos services, pour vous informer des mises à jour ou des offres spéciales, pour personnaliser votre expérience sur notre site web, pour améliorer nos services, et pour d'autres activités commerciales légitimes.</p>
            </div>
            <div>
                <h4>Protection des informations personnelles</h4>
                <p>Nous prenons des mesures raisonnables pour protéger les informations personnelles que nous collectons et stockons. Nous utilisons des mesures de sécurité techniques, administratives et phisiques pour empêcher l'accès non autorisé, la divulgation ou la modification des informations personnelles.</p>
            </div>
            <div>
                <h4>Partage d'informations personnelles</h4>
                <p>Nous ne vendons ni ne louons vos informations personnelles à des tiers. Nous pouvons partager vos informations personnelles avec des prestataires de services tiers qui travaillent avec nous pour fournir des services à nos clients, mais ces tiers ne sont pas autorisés à utiliser vos informations personnelles à des fins autres que celles pour lesquelles elles ont été fournies.</p>
            </div>
            <div>
                <h4>Droit d'accès et de rectification</h4>
                <p>Vous avez le droit de demander l'accès, la rectification ou la suppression de vos informations personnelles. Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter à l'adresse e-mail ci-dessous.</p>
            </div>
            <div>
                <h4>Cookies</h4>
                <p>Notre site web utilise des cookies pour personnaliser votre expérience de navigation et pour recueillir des informations sur l'utilisation de notre site web. Les cookies sont de petits fichiers texte placés sur votre ordinateur ou votre appareil mobile lorsque vous visitez notre site web. Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais cela peut affecter certaines fonctionnalités de notre site web.</p>
            </div>
            <div>
                <h4>Modification de la politique de confidentialité</h4>
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications entreront en vigueur dès leur publication sur notre site web.</p>
            </div>
            <div>
                <h4>Contactez-nous</h4>
                <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à l'adresse e-mail suivante: [adresse e-mail de contact].</p>
            </div>
        </PrivacyPolicyContainer>
    )
};

export default PrivacyPolicy;

const PrivacyPolicyContainer = Styled.div`
    h2{
        padding: 0;
        margin: 0;
        font-weight: 400;
        font-size: 18px;
        text-align: center;
    }
    width: auto;
    padding: 80px;
    @media screen and (max-width: 650px){
        padding: 80px 32px;
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