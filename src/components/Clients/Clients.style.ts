import Styled from "styled-components";

export const SliderLogo = Styled.div`
    position: relative;
    padding: 80px 110px;
    // background-color: #fff;
    &:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: #fff;
        opacity: 0.8;
        z-index: -2;
    }
    @media screen and (max-width: 650px){
        padding: 28px;
    }
`

export const Img = Styled.img`
    height: 110px;
    @media screen and (max-width: 650px){
        height: 60px;
    }
`

export const Slide = Styled.div`
    display: flex;
    justify-content: center;
`

export const SliderTitle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding: 0 0 32px 0;
    h1{
        font-size: 64px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        @media screen and (max-width: 650px){
            font-size: 56px;
        }
        @media screen and (max-width: 500px){
            font-size: 32px;
        }
    }
`