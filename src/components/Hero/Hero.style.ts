import Styled from 'styled-components';

export const HeroContainer = Styled.div`
    // border: 1px solid green;
    padding: 80px 80px;    
    img{
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        width:880px;
        // @media screen and (max-width: 1355px){
        //     width: 780px;
        // }
        @media screen and (max-width: 650px){
            width: 780px;
        }
        @media screen and (max-width: 500px){
            width: 100%;
        }
    }
    @media screen and (max-width: 500px){
        padding: 80px 16px 0 16px;
    }
`

export const HeroLeft = Styled.div`
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 1355px){
        background-color: rgba(0, 0, 0, 0.5);
        padding: 0 24px;
        border-radius: 8px;
    }
    
    @media screen and (max-width: 500px){
        padding: 8px;
        background-color: transparent;
        margin: 240px 0 0 0;
    }
`

export const Title = Styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 72px;
    @media screen and (max-width: 650px){
        font-size: 56px;
    }
    @media screen and (max-width: 500px){
        font-size: 32px;
    }
`

export const SubTitle = Styled.h1`
    color: #fff;
    font-weight: 700;
    font-size: 36px;
    @media screen and (max-width: 500px){
        font-size: 22px;
    }
`

export const Paragraph = Styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    max-width: 500px;
    text-align: center;
    @media screen and (max-width: 600px){
        font-size: 14px;
    }
`