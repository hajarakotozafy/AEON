import Styled from 'styled-components';

export const DevisContainer = Styled.form`
    padding: 80px;
    @media screen and (max-width: 650px){
        padding: 80px 16px;
    }
`

export const DevisTitle = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
     align-items: center;
    color: #fff;
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
    h2{
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        padding: 0;
        @media screen and (max-width: 500px){
            font-size: 22px;
        }
    }
`

export const CardContainer = Styled.div`
    padding: 40px 0;
    display: flex;
    gap: 32px;
    justify-content: center;
    align-items: start;
    @media screen and (max-width: 832px){
        flex-direction: column;
    }
`

export const Card = Styled.div`
    padding: 24px 16px;
    width: 384px;
    height: auto !important;
    background-color: #051532;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    .container{
        
    }
    @media screen and (max-width: 832px){
        width: auto;
    }
`

export const CardTitle = Styled.h1`
    color: #fff;
    padding: 0;
    margin: 0;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    @media screen and (max-width: 650px){
        font-size: 22px;
    }
`

export const CheckBoxContainer = Styled.div`
    // border: 1px solid #fff;
    width: 100%;
    display: flex;
    flex-direction: column;

    gap: 16px;
`

export const CheckBox = Styled.label`
        span{
            font-weight: 500;
        }
        color: #fff;
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 14px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        input{
            position absoute;
            opacity: 0;
            cursor: pointer;
            heigth: 0;
            width: 0;
        }
        .checkmark{
            position: absolute;
            top: 5px;
            left: 0;
            height: 20px;
            width: 20px;
            background-color: transparent;
            border: 3px solid #fff;
            &:after{
                content:"";
                position: absolute;
                display: none;
            }
        }
        &:hover input ~ .checkmark{
            background-color: #ccc;
        }
        input:checked ~ .checkmark{
            background:#2196F3;
        }
        input:checked ~ .checkmark:after{
            display: block;
        }
        .checkmark:after{
            left: 6px;
            top: 2px;
            width: 5px;
            height: 10px;
            border:solid white;
            border-width: 0 3px 3px 0;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
        }
`
export const FormContainer = Styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 772px){
            padding: 0;
        }
`
export const Form = Styled.div`
        position: relative;
        width: 700px;
        // background: #D9DADF;
        // opacity: 0.3;
        // border-radius: 8px;
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        &:after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #D9DADF;
            opacity: 0.3;
            border-radius: 8px;
            z-index: -2;
        }
        .descri{
            border-radius: 24px;
            border: none; 
            outline: none;
            height: 220px;
            font-size: 18px;
            color: grey;
            font-family: "Manrope";
            padding: 4px 16px;
            // border: 1px solid red;
        }
        @media screen and (max-width: 772px){
            width: auto;
            padding: 16px;
        }
        
`

export const InputCont = Styled.div`
        width: 100%;
        display: flex;
        justify-content: space-between;
        // border: 1px solid green;
        input{
            border-radius: 50px;
            background-color: #FFF;
            color: light-grey;
            border: none;
            outline: none;
            padding: 4px 16px;
            font-size: 18px;
            &.budget{
                height: 32px;
                width: 160px;
                @media screen and (max-width: 772px){
                    width: auto;
                }
            }
            &.mail{
                height: 32px;
                width: 380px;
                @media screen and (max-width: 772px){
                    width: auto;
                }
            }
        }
        @media screen and (max-width: 772px){
            flex-direction: column;
            justify-content: start;
            gap: 24px;
            width: auto;
        }
`

export const BtnContainer = Styled.div`
        width: 764px;
        display: flex;
        justify-content: center;
        // border: 1px solid green;
        margin: 0;
        padding: 24px 0;
        button{
            width: 140px;
            height: 40px;
            background: #ff6154;
            outline: none;
            border: none;
            border-radius: 4px;
            color: #fff;
            font-size: 24px;
            font-weight: 700;
        }
        @media screen and (max-width: 772px){
            width: auto;
        }
`