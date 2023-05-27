import Styled from 'styled-components';

export const FooterContainer = Styled.div`
    background-color: #051532;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    color: #ffff;
    @media screen and (max-width: 650px){
        padding: 0 16px;
    }
    
`

export const Foot1 = Styled.div`
    border-bottom: 1px solid grey;
    padding: 48px;
    display: flex;
    justify-content: space-between;
    img{
        width: 192px;
        height: 192px;
        @media screen and (max-width: 500px){
            width: 80px;
            height: 80px;
        }
    }
    .support, .legal{
        h1{
            font-size: 24px
        }
    }
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    @media screen and (max-width: 650px){
        padding: 48px 16px;
    }
`

export const Foot2 = Styled.div`
    display: flex;
    justify-content: center;
    padding: 16px 0;
    h3{
        font-size: 20px;
        font-weight: 500;
    }
`