import Styled from "styled-components";

export const NavbarItems = Styled.div`
    z-index: 999;
    // background: linear-gradient(90deg, rgb(110,94,254) 0%, rgba(73,63,252,1) 100%);
    height: 100px;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem; 
    align-items: center;
    padding: 0 48px;
    // position: sticky;
    // top: 0;

    .nav-menu{
        // border: 1px solid green;
        display: grid;
        grid-template-columns: repeat(4, auto);
        // grid-gap: 10px;
        list-style: none;
        text-align: center;
        justify-content: center;
        .nav-links{
            cursor: pointer;
            color: #000;
            text-decoration: none;
            padding: 0.5rem 1rem;
            font-size: 18px;
            font-weight: 700;
            &.contact {
                color: red;
            }
            &:hover{
                // background-color: #6d76f7;
                // border-radius: 4px;
                // transition: all 0.2s ease-out;
            }
            @media screen and (max-width: 960px) {
                color: #000;
                // text-align: center;
                width: 100%;
                padding: 10px 0;
            }
        }
        @media screen and (max-width: 960px) {
            &.active{
                    background: #fff;
                    left: 0;
                    opacity: 1;
                    transition: all 0.5s ease;
                    z-index: 1;
                }
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
            width: 100%;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
            padding: 20px 0;
        }
    }

    @media screen and (max-width: 960px) {
        position: relative;
        padding: 0 8px;
    }
`

export const NavbarLogo = Styled.div`
    // border: 1px solid red;
    display: flex;
    img{
        width: 93px;
        height: 93px;
        @media screen and (max-width: 960px) {
            width: 70px;
            height: 70px;
        }
    }
    div{
        margin: 0;
        padding: 0;
        p{
            color: #fff;
            font-size: 14px;
            span{
                font-weight: 700;
                font-size: 32px;
                // line-height: 75px;
                text-align: center;
                @media screen and (max-width: 960px) {
                    font-size: 24px
                }
            }
            @media screen and (max-width: 960px) {
                font-size: 12px;
            }
        }
    }
`

export const MenuIcon = Styled.div`
    display: none;
    @media screen and (max-width: 960px) {
        display: flex;
        align-items: center;
        justify-content: center;
        // border: 1px solid white;
    }
    
`