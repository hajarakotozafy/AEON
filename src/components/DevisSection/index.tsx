import React from 'react';
import { BtnContainer, Card, CardContainer, CardTitle, CheckBox, CheckBoxContainer, DevisContainer, DevisTitle, Form, FormContainer, InputCont } from './Devis.style';

const DevisSection: React.FC = () => {
    return(
        <DevisContainer  id="devis">
            <DevisTitle>
                <h1>DEVIS</h1>
                <h2>séléctionner</h2>
            </DevisTitle>
            <CardContainer>
                <Card>
                    <CardTitle>DESIGN</CardTitle>
                    <CheckBoxContainer>
                        <CheckBox><span>Identité visuelle : </span>création de logos, chartes graphiques et direction artistiques
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Conception publicitaire : </span>bannières, visuels publicitaires, affiches, flyers, etc.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Design éditorial : </span>création de livres, magazines et brochures
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Montage vidéo : </span>montage, découpage, assemblage vidéo dans le cadre de vidéo publicitaire, promotionnelles ou éducatives
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Illustration 2D/3D : </span>création de dessin, peinture, illustration traditionnel et digitalpour des projets graphiques
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Miniatures : </span>création de vigettes pour les vidéos ou les réseaux sociaux
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Refonte graphique de sites web : </span>amélioration de l'apparence et de la convivialité des sites web
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Infographie : </span>création de graphiques et d'infographies pour expliquer des données complexes
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Visuels de Réseaux Sociaux : </span>création de visuels pour les publications sur les réseaux sociaux
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Roadmaps : </span>conception de plans d'action visuels pour des projets
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Création de chartes graphiques : </span>élaboration d'un guide complet pour l'utilisation des éléments graphiques de l'entreprise
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Sculpteur Modeleur : </span>création de prototype ou figurine 3D
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Autre</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                    </CheckBoxContainer>
                </Card>
                <Card>
                    <CardTitle>DEVELOPPEMENT WEB</CardTitle>
                    <CheckBoxContainer>
                    <CheckBox><span>Création des sites web complet : </span>conception et développement de sites web professionnels et sur mesure, adaptés à vos besoins et objectifs.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Création d'applications mobile : </span>développement d'applications mobiles personnalisées et intuitives pour Android et iOS, afin de renforcer votre présence sur mobile.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Création d'articles de blog : </span>rédaction d'articles de qualité pour alimenter votre blog et améliorer votre référencement naturel.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Création / Installation / Configuration d'Applications personnalisés : </span> création et personnalisation d'applications selon vos besoins métiers, installation et configuration de solutions logicielles pour optimiser votre productivité.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Création de fichiers comptabilité Excel : </span>conception et développement de fichiers Excel personnalisés pour simplifier la gestion de votre comptabilité.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Refonte de sites web : </span>modernisation et optimisation de sites web existants pour les rendre plus attractifs, ergonomiques et performants.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Transfert d'un site web vers un autre Cms : </span> transfert et migration de votre site web vers un nouveau CMS pour améliorer sa gestion et sa sécurité.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Autre</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                    </CheckBoxContainer>
                </Card>
                <Card>
                    <CardTitle>COMMUNICATION & MARKETING</CardTitle>
                    <CheckBoxContainer>
                    <CheckBox><span>Stratégie de communication : </span>élaboration de stratégies de communication efficaces pour atteindre les objectifs de l'entreprise
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Image de marque : </span>développement de l'identité visuelle de l'entreprise, création de chartes graphiques, développement de la présence en ligne, etc
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Relations publiques : </span>gestion des relations avec les journalistes et les médias
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>SEO : </span>optimisation de contenu pour les moteurs de recherche, recherche de mots-clés, amélioration de la structure du site web, etc.
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Publicité en ligne : </span>création et gestion de campagnes publicitaires sur Google Ads, les réseaux sociaux, etc
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Marketing d'influence : </span>identification et gestion de partenariats avec des influenceurs, développement de collaborations pour la promotion de l'entreprise ou de ses produits
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                        <CheckBox><span>Autre</span>
                            <input type="checkbox"/>
                            <span className="checkmark"></span>
                        </CheckBox>
                    </CheckBoxContainer>
                </Card>
            </CardContainer>
            <FormContainer id="contact">
                <Form>
                    <CardTitle>SOUMETTRE VOTRE FORMULAIRE</CardTitle>
                    <InputCont>
                        <input type="text" className="budget" placeholder="Mon budget..."/>
                        <input type="mail" className="mail" placeholder="Adresse mail..."/>
                    </InputCont>
                    <textarea className="descri" placeholder="Résumé de votre projet..."></textarea>
                </Form>
                <BtnContainer>
                    <button>Envoyer</button>
                </BtnContainer>
            </FormContainer>
        </DevisContainer>
    )
}

export default DevisSection;